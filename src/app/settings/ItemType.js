import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import ItemsService from "../services/items.service";
import CloseIcon from "../shared/CloseIcon";
import EditIcon from "../shared/EditIcon";
import SharedTable from "../shared/SharedTable";
import toast from "react-hot-toast";
import Spinner from "../shared/Spinner";
import "./itemClass.scss";
import "./itemType.scss";

function ItemType() {
  const [itemTypes, setItemTypes] = useState([]);
  const [itemClasses, setItemClasses] = useState([]);
  const [editFormData, setEditFormData] = useState({});
  const [addRowFormData, setAddRowFormData] = useState({});
  const [editableRowId, setEditableRowId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  function getItemClasses() {
    ItemsService.getItemClasses()
      .then((res) => {
        const data = res.data.filter((item) => item.active === true);
        setItemClasses(data);
        getItemTypes();
      })
      .catch((err) => {
        toast.error("There is a problem loading data");
        setIsLoading(false);
      });
  }

  function getItemTypes() {
    ItemsService.getItemTypes()
      .then((res) => {
        setItemTypes(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error("There is a problem loading data");
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getItemClasses();
  }, []);

  useEffect(() => {
    setAddRowFormData({
      ...addRowFormData,
      itemClass: itemClasses[0],
      active: false,
      havePQS: false,
    });
  }, [itemClasses]);

  function handleEdit(i) {
    const formData = itemTypes.find((item) => item.id === i.id);
    setEditFormData(formData);
    setEditableRowId(i.id);
  }

  function handleChange(e) {
    const { name, value, valueAsNumber } = e.target;
    if (e.target.type === "number") {
      if (typeof valueAsNumber === "number" && !isNaN(valueAsNumber)) {
        setEditFormData({ ...editFormData, [name]: valueAsNumber });
      }
    } else {
      setEditFormData({ ...editFormData, [name]: value });
    }
  }

  function handleChangeAdd(e) {
    const { name, value, valueAsNumber } = e.target;
    if (e.target.type === "number") {
      if (typeof valueAsNumber === "number" && !isNaN(valueAsNumber)) {
        setAddRowFormData({ ...addRowFormData, [name]: valueAsNumber });
      }
    } else {
      setAddRowFormData({ ...addRowFormData, [name]: value });
    }
  }

  function handleSubmitEdit() {
    const isValid = Object.keys(editFormData).every((key) => {
      return editFormData[key] !== "";
    });
    if (!isValid) {
      toast.error("Please fill all the fields");
    } else {
      setIsLoading(true);
      const formToPut = (({ id, title, code, active, havePQS, itemclass }) => ({
        id,
        title,
        code,
        active,
        havePQS,
        itemclass,
      }))(editFormData);
      ItemsService.putItemTypes(formToPut)
        .then((res) => {
          getItemTypes();
        })
        .catch((err) => {
          toast.error("There is a problem sending data");
          setIsLoading(false);
        });
      setEditableRowId(null);
      setEditFormData({});
    }
  }

  function handleSubmitNew() {
    const isValid = Object.keys(addRowFormData).every((key) => {
      return addRowFormData[key] !== "";
    });
    if (!isValid) {
      toast.error("Please fill all the fields");
    } else {
      setIsLoading(true);
      let formToPut = (({ title, code, active, havePQS }) => ({
        title,
        code,
        active,
        havePQS,
      }))(addRowFormData);
      if (addRowFormData?.itemClass?.id) {
        formToPut.itemclass = addRowFormData.itemClass.id.toString();
      } else {
        formToPut.itemclass = addRowFormData.itemClass.toString();
      }
      ItemsService.postItemType(formToPut)
        .then((res) => {
          getItemTypes();
        })
        .catch((err) => {
          toast.error("There is a problem sending data");
          setIsLoading(false);
        });
      setAddRowFormData({
        ...addRowFormData,
        itemClass: itemClasses[0],
        active: false,
        havePQS: false,
        title: "",
      });
    }
  }

  function findItemClassById(id) {
    return itemClasses.find((item) => item.id === id);
  }

  return (
    <div className="item-class-page">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <h3 className="page-title mb-3">Item type list</h3>
          <div>
            <SharedTable>
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Item class</TableCell>
                  <TableCell>Code</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Have PQS?</TableCell>
                  <TableCell>Edit</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {itemTypes.map((itemType, index) => (
                  <>
                    {editableRowId !== itemType.id ? (
                      <TableRow>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{itemType.title}</TableCell>
                        <TableCell>
                          {findItemClassById(itemType.itemclass)?.title}
                        </TableCell>
                        <TableCell>{itemType.code}</TableCell>
                        <TableCell>
                          <input
                            type="checkbox"
                            checked={itemType.active}
                            disabled
                          ></input>
                        </TableCell>
                        <TableCell>
                          <input
                            type="checkbox"
                            checked={itemType.havePQS}
                            disabled
                          ></input>
                        </TableCell>
                        <TableCell>
                          <button
                            className="edit-btn"
                            onClick={(event) => handleEdit(itemType)}
                          >
                            <EditIcon />
                          </button>
                        </TableCell>
                      </TableRow>
                    ) : (
                      <TableRow>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>
                          <input
                            name="title"
                            type="text"
                            onChange={handleChange}
                            value={editFormData?.title}
                          ></input>
                        </TableCell>
                        <TableCell>
                          <select
                            name="itemclass"
                            onChange={handleChange}
                            value={editFormData?.itemClass}
                          >
                            {itemClasses.map((itemClass, index) => (
                              <option
                                key={itemClass.id}
                                value={itemClass.id}
                                selected={itemType.itemclass === itemClass.id}
                              >
                                {itemClass.title}
                              </option>
                            ))}
                          </select>
                        </TableCell>
                        <TableCell>{editFormData?.code}</TableCell>
                        <TableCell>
                          <input
                            name="active"
                            type="checkbox"
                            onChange={() =>
                              setEditFormData({
                                ...editFormData,
                                active: !editFormData.active,
                              })
                            }
                            checked={editFormData?.active}
                          ></input>
                        </TableCell>
                        <TableCell>
                          <input
                            name="havePQS"
                            type="checkbox"
                            onChange={() =>
                              setEditFormData({
                                ...editFormData,
                                havePQS: !editFormData.havePQS,
                              })
                            }
                            checked={editFormData?.havePQS}
                          ></input>
                        </TableCell>
                        <TableCell>
                          <button
                            className="save-btn"
                            onClick={handleSubmitEdit}
                          >
                            Save
                          </button>
                          <button
                            className="close-btn"
                            onClick={() => setEditableRowId(null)}
                          >
                            <CloseIcon />
                          </button>
                        </TableCell>
                      </TableRow>
                    )}
                  </>
                ))}
              </TableBody>
            </SharedTable>
          </div>
          <div className="add-row mt-4">
            <h3>Submit new</h3>
            <div className="row">
              <div className="col-md-4 flex-column d-flex">
                <label>Item type</label>
                <input
                  name="title"
                  type="text"
                  onChange={handleChangeAdd}
                  value={addRowFormData?.title}
                ></input>
              </div>
              <div className="col-md-4 flex-column d-flex">
                <label>Item class</label>
                <select
                  name="itemClass"
                  onChange={handleChangeAdd}
                  value={addRowFormData?.itemClass}
                >
                  {itemClasses.map((item, index) => (
                    <option
                      key={item.id}
                      value={item.id}
                      selected={index === 0}
                    >
                      {item.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-4 d-flex justify-content-center align-items-center">
                <label>Active</label>
                <input
                  name="active"
                  className="mr-4"
                  type="checkbox"
                  onChange={() =>
                    setAddRowFormData({
                      ...addRowFormData,
                      active: !addRowFormData.active,
                    })
                  }
                  checked={addRowFormData?.active}
                ></input>
                <label>Have PQS?</label>
                <input
                  name="havePQS"
                  className="mr-4"
                  type="checkbox"
                  onChange={() =>
                    setAddRowFormData({
                      ...addRowFormData,
                      havePQS: !addRowFormData.havePQS,
                    })
                  }
                  checked={addRowFormData?.havePQS}
                ></input>
                <button className="save-btn" onClick={handleSubmitNew}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ItemType;
