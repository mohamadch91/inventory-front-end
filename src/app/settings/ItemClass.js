import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import CloseIcon from "../shared/CloseIcon";
import EditIcon from "../shared/EditIcon";
import SharedTable from "../shared/SharedTable";
import "./itemClass.scss";

function ItemClass() {
  const [data, setData] = useState([
    { id: 1, title: "Refrigerator", code: "CC", active: true },
    { id: 2, title: "Electrical", code: "ELC", active: false },
    { id: 3, title: "Transport", code: "TPT", active: true },
    { id: 4, title: "Transport", code: "TPT", active: true },
  ]);

  const [editFormData, setEditFormData] = useState({});
  const [editableRowId, setEditableRowId] = useState(null);

  function handleEdit(i) {
    const formData = data.find((item) => item.id === i.id);
    setEditFormData(formData);
    setEditableRowId(i.id);
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
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

  function EditRowForm() {
    return (
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
          <input
            name="code"
            type="text"
            onChange={handleChange}
            value={editFormData?.code}
          ></input>
        </TableCell>
        <TableCell>
          <input
            name="active"
            type="checkbox"
            onChange={handleChange}
            checked={editFormData?.active}
          ></input>
        </TableCell>
        <TableCell>
          <button className="save-btn" onClick={handleSubmit}>
            Save
          </button>
          <button className="close-btn" onClick={() => setEditableRowId(null)}>
            <CloseIcon />
          </button>
        </TableCell>
      </TableRow>
    );
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
              <TableCell>Code</TableCell>
              <TableCell>Active</TableCell>
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
                    <TableCell>{item.code}</TableCell>
                    <TableCell>
                      <input
                        type="checkbox"
                        checked={item.active}
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
                  <EditRowForm />
                )}
              </>
            ))}
          </TableBody>
        </SharedTable>
      </div>
    </div>
  );
}

export default ItemClass;
