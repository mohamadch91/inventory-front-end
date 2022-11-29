import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import CloseIcon from "../shared/CloseIcon";
import EditIcon from "../shared/EditIcon";
import SharedTable from "../shared/SharedTable";
import toast from "react-hot-toast";
import Spinner from "../shared/Spinner";
import "../styles/table.scss";
import "../styles/inputs.scss";
import "../styles/hr.scss";
import "./itemClass.scss";
import "./itemType.scss";
import { Trans } from "react-i18next";

import ItemsService from "../services/items.service";

function Manufacturer() {
  const [manufacturers, setManufacturers] = useState([]);
  const [editFormData, setEditFormData] = useState({});
  const [addRowFormData, setAddRowFormData] = useState({
    describe: "",
    order: null,
    active: false,
  });
  const [editableRowId, setEditableRowId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [itemClasses, setItemClasses] = useState([]);
  const [selectedItemClass, setSelectedItemClass] = useState(null);

  function getItemClasses() {
    ItemsService.getActiveItemClasses()
      .then((res) => {
        const data = res.data;
        setItemClasses(data);
        setSelectedItemClass(data[0].id);
        setIsLoading(false);
        getManufacturers(data[0].id);
      })
      .catch((err) => {
                toast.error(<Trans>There is a problem loading data</Trans>);

        setIsLoading(false);
      });
  }

  function getManufacturers(id) {
    ItemsService.getManufacturers(id)
      .then((res) => {
        setManufacturers(res.data[0].manufacturer);
        setIsLoading(false);
      })
      .catch((err) => {
                toast.error(<Trans>There is a problem loading data</Trans>);

        setIsLoading(false);
      });
  }

  useEffect(() => {
    getItemClasses();
  }, []);

  useEffect(() => {
    if (itemClasses) {
      setAddRowFormData({
        ...addRowFormData,
        itemclass: itemClasses[0]?.id,
      });
    }
  }, [itemClasses]);

  function handleEdit(i) {
    const formData = manufacturers.find((item) => item.id === i.id);
    setEditFormData(formData);
    setEditableRowId(i.id);
  }

  function handleChangeEdit(e) {
    const { name, value } = e.target;

    setEditFormData({ ...editFormData, [name]: value });
  }

  function handleChangeAdd(e) {
    const { name, value } = e.target;

    setAddRowFormData({ ...addRowFormData, [name]: value });
  }

  function handleSubmitEdit(e) {
    e.preventDefault();
    const isValid = Object.keys(editFormData).every((key) => {
      return editFormData[key] !== "" && editFormData[key] !== null;
    });
    if (!isValid) {
            toast.error(<Trans>Please fill all the fields</Trans>);

    } else {
      setIsLoading(true);
      let formToPut = editFormData;
      ItemsService.putManufacturer(formToPut)
        .then((res) => {
          getManufacturers(selectedItemClass);
        })
        .catch((err) => {
                    toast.error(<Trans>There is a problem sending data</Trans>);

          setIsLoading(false);
        });
      setEditableRowId(null);
      setEditFormData({});
    }
  }

  function handleSubmitNew(e) {
    e.preventDefault();
    const isValid = Object.keys(addRowFormData).every((key) => {
      return addRowFormData[key] !== "" && addRowFormData[key] !== null;
    });
    if (!isValid) {
            toast.error(<Trans>Please fill all the fields</Trans>);

    } else {
      setIsLoading(true);
      let formToPost = (({ describe, active, order, itemclass }) => ({
        describe,
        active,
        order,
        itemclass,
      }))(addRowFormData);
      ItemsService.postManufacturer(formToPost)
        .then((res) => {
          getManufacturers(selectedItemClass);
        })
        .catch((err) => {
                    toast.error(<Trans>There is a problem sending data</Trans>);

          setIsLoading(false);
        });
      setAddRowFormData({
        ...addRowFormData,
        describe: "",
        order: null,
        active: false,
      });
    }
  }

  function findItemClassById(id) {
    return itemClasses.find((item) => item.id === id);
  }

  return (
    <div className="item-class-page">
      <h3 className="page-title mb-3">
        <Trans>Manufacturers by item class</Trans>
      </h3>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="row mb-4 mt-4">
            <div className="col-md-2 d-flex align-items-center">
              <h4>
                <Trans>Item class</Trans>
              </h4>
            </div>
            <div className="col-md-10 d-flex">
              <select
                name="itemclass"
                onChange={(e) => {
                  setSelectedItemClass(e.target.value);
                  getManufacturers(e.target.value);
                }}
                value={selectedItemClass}
              >
                {itemClasses.map((itemClass, index) => (
                  <option
                    key={itemClass.id}
                    value={itemClass.id}
                    //   selected={}
                  >
                    {itemClass.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <SharedTable>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Trans>Description</Trans>
                  </TableCell>
                  <TableCell>
                    <Trans>Item class</Trans>
                  </TableCell>
                  <TableCell>
                    <Trans>Show order</Trans>
                  </TableCell>
                  <TableCell>
                    <Trans>Enable</Trans>
                  </TableCell>
                  <TableCell>
                    <Trans>Edit</Trans>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {manufacturers &&
                  manufacturers.map((item, index) => (
                    <>
                      {editableRowId !== item.id ? (
                        <TableRow>
                          <TableCell>{item.describe}</TableCell>
                          <TableCell>
                            {findItemClassById(item.itemclass)?.title}
                          </TableCell>
                          <TableCell>{item.order}</TableCell>
                          <TableCell>
                            <div class="form-check form-check-primary mt-3">
                              <label className="form-check-label">
                                <input
                                  type="checkbox"
                                  checked={item.active}
                                  disabled
                                ></input>
                                <i className="input-helper mt-3"></i>
                              </label>
                            </div>
                          </TableCell>
                          <TableCell>
                            <button
                              className="edit-btn"
                              onClick={(event) => handleEdit(item)}
                            >
                              <EditIcon />
                            </button>
                          </TableCell>
                        </TableRow>
                      ) : (
                        <TableRow>
                          <TableCell>
                            <input
                              name="describe"
                              type="text"
                              onChange={handleChangeEdit}
                              value={editFormData?.describe}
                            ></input>
                          </TableCell>
                          <TableCell>
                            <select
                              name="itemclass"
                              onChange={handleChangeEdit}
                              value={editFormData?.itemclass}
                            >
                              {itemClasses.map((itemClass, index) => (
                                <option
                                  key={itemClass.id}
                                  value={itemClass.id}
                                  selected={item.itemclass === itemClass.id}
                                >
                                  {itemClass.title}
                                </option>
                              ))}
                            </select>
                          </TableCell>
                          <TableCell>
                            <input
                              name="order"
                              type="number"
                              onChange={handleChangeEdit}
                              value={editFormData?.order}
                              required
                            ></input>
                          </TableCell>
                          <TableCell>
                            <div class="form-check form-check-primary mt-3">
                              <label className="form-check-label">
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
                                <i className="input-helper mt-3"></i>
                              </label>
                            </div>
                          </TableCell>
                          <TableCell>
                            <button
                              className="save-btn"
                              onClick={handleSubmitEdit}
                            >
                              <Trans>Save</Trans>
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
          <div className="add-row mt-4 mb-4">
            <form onSubmit={handleSubmitNew}>
              <h3 className="mb-3 mt-3">
                <Trans>Insert manufacturer</Trans>
              </h3>
              <div className="row">
                <div className="col-md-3 flex-column d-flex">
                  <label className="mb-2">
                    <Trans>Name</Trans>
                  </label>
                  <input
                    name="describe"
                    type="text"
                    onChange={handleChangeAdd}
                    value={addRowFormData?.describe}
                    required
                  ></input>
                </div>
                <div className="col-md-3 flex-column d-flex">
                  <label className="mb-1">
                    <Trans>Item class</Trans>
                  </label>
                  <select
                    name="itemclass"
                    onChange={handleChangeAdd}
                    value={addRowFormData?.itemclass}
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
                <div className="col-md-3 flex-column d-flex">
                  <label className="mb-1">
                    <Trans>Show order</Trans>
                  </label>
                  <input
                    name="order"
                    type="number"
                    onChange={handleChangeAdd}
                    value={addRowFormData?.order}
                    required
                  ></input>
                </div>
                <div className="col-md-3 d-flex justify-content-center align-items-center mt-3">
                  <label>
                    <Trans>Active</Trans>
                  </label>
                  <div class="form-check form-check-primary mt-3">
                    <label className="form-check-label">
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
                      <i className="input-helper mt-3"></i>
                    </label>
                  </div>
                  <button className="save-btn" type="submit">
                    <Trans>Save</Trans>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

export default Manufacturer;
