import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import ItemsService from "../services/items.service";
import CloseIcon from "../shared/CloseIcon";
import EditIcon from "../shared/EditIcon";
import SharedTable from "../shared/SharedTable";
import toast from "react-hot-toast";
import Spinner from "../shared/Spinner";
import "./itemClassLang.scss";
import "../styles/inputs.scss";
import { Trans } from "react-i18next";
/**
 * 
 * @returns DOM elemnt 
 * get all item classes from server and just can edit
 */
function ItemClass() {
  const [itemClasses, setItemClasses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editFormData, setEditFormData] = useState({});
  const [editableRowId, setEditableRowId] = useState(null);

  function getItemClasses() {
    ItemsService.getItemClasses()
      .then((res) => {
        setItemClasses(res.data);
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

  function handleEdit(i) {
    const formData = itemClasses.find((item) => item.id === i.id);
    setEditFormData(formData);
    setEditableRowId(i.id);
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const isValid = Object.keys(editFormData).every((key) => {
      return editFormData[key] !== "";
    });
    if (!isValid) {
            toast.error(<Trans>Please fill all the fields</Trans>);

    } else {
      setIsLoading(true);
      const newData = [...itemClasses];
      const index = newData.findIndex((item) => item.id === editFormData.id);
      newData[index] = editFormData;
      const formToPut = (({ id, title, code, active }) => ({
        id,
        title,
        code,
        active,
      }))(editFormData);
      ItemsService.putItemClass(formToPut)
        .then((res) => {
          getItemClasses();
        })
        .catch((err) => {
                    toast.error(<Trans>There is a problem sending data</Trans>);

          setIsLoading(false);
        });
      setEditableRowId(null);
      setEditFormData({});
    }
  }

  return (
    <div className="item-class-page mb-5">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <h3 className="page-title mb-3">
            <Trans>Item class list</Trans>
          </h3>
          <div>
            <SharedTable>
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>
                    <Trans>Title</Trans>
                  </TableCell>
                  <TableCell>
                    <Trans>Code</Trans>
                  </TableCell>
                  <TableCell>
                    <Trans>Active</Trans>
                  </TableCell>
                  <TableCell>
                    <Trans>Edit</Trans>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {itemClasses.map((item) => (
                  <>
                    {editableRowId !== item.id ? (
                      <TableRow>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.title}</TableCell>
                        <TableCell>{item.code}</TableCell>
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
                        <TableCell>{editFormData?.id}</TableCell>
                        <TableCell>
                          <input
                            name="title"
                            type="text"
                            onChange={handleChange}
                            value={editFormData?.title}
                            required
                          ></input>
                        </TableCell>
                        <TableCell>{editFormData.code}</TableCell>
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
                          <button className="save-btn" onClick={handleSubmit}>
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
        </>
      )}
    </div>
  );
}

export default ItemClass;
