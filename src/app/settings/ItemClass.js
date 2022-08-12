import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useState } from "react";
import EditShape from "../shared/EditShape";
import SharedTable from "../shared/SharedTable";
import "./itemClass.scss";

function ItemClass() {
  const [data, setData] = useState([
    { id: 1, title: "Regrigator", code: "CC", active: true },
    { id: 2, title: "Electrical", code: "ELC", active: false },
    { id: 3, title: "Transport", code: "TPT", active: true },
    { id: 4, title: "Transport", code: "TPT", active: true },
  ]);
  const [editFormData, setEditFormData] = useState({});

  function handleEdit(i) {
    const formData = data.find((item) => item.id === i.id);
    setEditFormData(formData);
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
    setEditFormData({});
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
                      <EditShape />
                    </button>
                  </TableCell>
                </TableRow>
              </>
            ))}
          </TableBody>
        </SharedTable>
      </div>
      <section className="mt-4">
        <h3 className="mb-3">Edit</h3>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 d-flex flex-column">
              <label for="title">Title:</label>
              <input
                name="title"
                type="text"
                onChange={handleChange}
                value={editFormData?.title}
              ></input>
            </div>
            <div className="col-md-2 d-flex flex-column">
              <label for="code">Code:</label>
              <input
                name="code"
                type="text"
                onChange={handleChange}
                value={editFormData?.code}
              ></input>
            </div>
            <div className="col-md-2 d-flex align-items-center justify-content-center">
              <label for="active" className="mb-0 mr-2">
                Active:
              </label>
              <input
                name="active"
                type="checkbox"
                onChange={handleChange}
                checked={editFormData?.active}
              ></input>
            </div>
            <div className="col-md-2 d-flex align-items-center justify-content-center">
              <button type="submit">Save</button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default ItemClass;
