import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import CloseIcon from "../shared/CloseIcon";
import EditIcon from "../shared/EditIcon";
import SharedTable from "../shared/SharedTable";
import "./itemClass.scss";
import "./itemType.scss";

function ItemType() {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Ice Bag",
      itemClass: "Refrigerator",
      code: 11,
      active: true,
      havePQS: true,
    },
    {
      id: 2,
      title: "Cold Room",
      itemClass: "Transport",
      code: 16,
      active: false,
      havePQS: true,
    },
    {
      id: 3,
      title: "Freezer Room",
      itemClass: "Transport",
      code: 15,
      active: true,
      havePQS: false,
    },
    {
      id: 4,
      title: "Freezer",
      itemClass: "Electrical",
      code: 10,
      active: true,
      havePQS: false,
    },
  ]);
  const [itemClasses, setItemClasses] = useState([
    "Electrical",
    "Refrigerator",
    "Transport",
  ]);
  const [editFormData, setEditFormData] = useState({});
  const [addRowFormData, setAddRowFormData] = useState({});
  const [editableRowId, setEditableRowId] = useState(null);

  useEffect(() => {
    setAddRowFormData({
      ...addRowFormData,
      itemClass: itemClasses[0],
    });
  }, [itemClasses]);

  function handleEdit(i) {
    const formData = data.find((item) => item.id === i.id);
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

  function handleSubmit(e) {
    e.preventDefault();
    const newData = [...data];
    const index = newData.findIndex((item) => item.id === editFormData.id);
    newData[index] = editFormData;
    setData(newData);
    setEditableRowId(null);
    setEditFormData({});
  }

  function handleAdd() {
    const newData = [...data];
    setAddRowFormData({ ...addRowFormData, id: newData.length + 1 });
    newData.push(addRowFormData);
    setData(newData);
    setAddRowFormData({
      title: "",
      itemClass: "",
      code: 0,
      active: false,
      havePQS: false,
    });
  }

  return (
    <div className="item-class-page">
      <h3 className="page-title mb-3">Item class list</h3>
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
            {data.map((item) => (
              <>
                {editableRowId !== item.id ? (
                  <TableRow>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.itemClass}</TableCell>
                    <TableCell>{item.code}</TableCell>
                    <TableCell>
                      <input
                        type="checkbox"
                        checked={item.active}
                        disabled
                      ></input>
                    </TableCell>
                    <TableCell>
                      <input
                        type="checkbox"
                        checked={item.havePQS}
                        disabled
                      ></input>
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
                    <TableCell>{editFormData?.id}</TableCell>
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
                        name="itemClass"
                        onChange={handleChange}
                        value={editFormData?.itemClass}
                      >
                        {itemClasses.map((item, index) => (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </TableCell>
                    <TableCell>
                      <input
                        name="code"
                        type="number"
                        onChange={handleChange}
                        value={editFormData?.code}
                      ></input>
                    </TableCell>
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
                      <button className="save-btn" onClick={handleSubmit}>
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
          <div className="col-md-3 flex-column d-flex">
            <label>Item type</label>
            <input
              name="title"
              type="text"
              onChange={handleChangeAdd}
              value={addRowFormData?.title}
            ></input>
          </div>
          <div className="col-md-3 flex-column d-flex">
            <label>Item class</label>
            <select
              name="itemClass"
              onChange={handleChangeAdd}
              value={addRowFormData?.itemClass}
            >
              {itemClasses.map((item, index) => (
                <option key={index} value={item} selected={index === 0}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-2 flex-column d-flex">
            <label>Code</label>
            <input
              name="code"
              type="number"
              onChange={handleChangeAdd}
              value={addRowFormData?.code}
            ></input>
          </div>
          <div className="col-md-4 d-flex align-items-center">
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
            <button className="save-btn" onClick={handleAdd}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemType;
