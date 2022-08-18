import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import CloseIcon from "../shared/CloseIcon";
import EditIcon from "../shared/EditIcon";
import SharedTable from "../shared/SharedTable";
import toast from "react-hot-toast";
import Spinner from "../shared/Spinner";
import "./itemClass.scss";
import "./itemType.scss";
import RelatedService from "../services/related.service";
import { useParams } from "react-router-dom";

function ParameterDescription() {
  const [descriptions, setDescriptions] = useState([]);
  const [editFormData, setEditFormData] = useState({});
  const [addRowFormData, setAddRowFormData] = useState({
    name: "",
    order: null,
    enabled: false,
  });
  const [editableRowId, setEditableRowId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  function getData(type, id) {
    RelatedService.getParameterDescriptions(id, type)
      .then((res) => {
        setDescriptions(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error("There is a problem loading data");
        setIsLoading(false);
      });
  }

  useEffect(() => {
    const params = id?.split("-");
    getData(params[0], params[1]);
  }, [id]);

  // useEffect(() => {
  //   setAddRowFormData({
  //     ...addRowFormData,
  //     enabled: false,
  //   });
  // }, [descriptions]);

  function handleEdit(i) {
    const formData = descriptions.find((item) => item.id === i.id);
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
      return editFormData[key] !== "" && editFormData[key] !== null;
    });
    if (!isValid) {
      toast.error("Please fill all the fields");
    } else {
      setIsLoading(true);
      let formToPut = editFormData;
      formToPut.type = id.split("-")[0];
      RelatedService.putParameters(formToPut)
        .then((res) => {
          const params = id.split("-");
          getData(params[0], params[1]);
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
      return addRowFormData[key] !== "" && editFormData[key] !== null;
    });
    if (!isValid) {
      toast.error("Please fill all the fields");
    } else {
      setIsLoading(true);
      let formToPut = (({ name, enabled, order }) => ({
        name,
        enabled,
        order,
      }))(addRowFormData);
      formToPut.type = id.split("-")[0];
      formToPut.paramid = parseInt(id.split("-")[1]);
      RelatedService.putParameters(formToPut)
        .then((res) => {
          const params = id.split("-");
          getData(params[0], params[1]);
        })
        .catch((err) => {
          toast.error("There is a problem sending data");
          setIsLoading(false);
        });
      setAddRowFormData({
        ...addRowFormData,
        name: "",
        order: null,
        enabled: false,
      });
    }
  }

  return (
    <div className="item-class-page">
      <h3 className="page-title mb-3">Parameter Descriptions</h3>
      <div className="add-row mt-4 mb-4">
        <h3>Insert parameter In this row!</h3>
        <div className="row">
          <div className="col-md-4 flex-column d-flex">
            <label>Parameter description</label>
            <input
              name="name"
              type="text"
              onChange={handleChangeAdd}
              value={addRowFormData?.name}
              required
            ></input>
          </div>
          <div className="col-md-4 flex-column d-flex">
            <label>Show order</label>
            <input
              name="order"
              type="number"
              onChange={handleChangeAdd}
              value={addRowFormData?.order}
              required
            ></input>
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <label>Enable</label>
            <input
              name="enabled"
              className="mr-4"
              type="checkbox"
              onChange={() =>
                setAddRowFormData({
                  ...addRowFormData,
                  enabled: !addRowFormData.enabled,
                })
              }
              checked={addRowFormData?.enabled}
            ></input>
            <button className="save-btn" onClick={handleSubmitNew}>
              Save
            </button>
          </div>
        </div>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div>
            <SharedTable>
              <TableHead>
                <TableRow>
                  <TableCell>Description</TableCell>
                  <TableCell>Show order</TableCell>
                  <TableCell>Enable</TableCell>
                  <TableCell>Edit</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {descriptions.map((item, index) => (
                  <>
                    {editableRowId !== item.id ? (
                      <TableRow>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.order}</TableCell>
                        <TableCell>
                          <input
                            type="checkbox"
                            checked={item.enabled}
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
                        <TableCell>
                          <input
                            name="name"
                            type="text"
                            onChange={handleChange}
                            value={editFormData?.name}
                            required
                          ></input>
                        </TableCell>
                        <TableCell>
                          <input
                            name="order"
                            type="number"
                            onChange={handleChange}
                            value={editFormData?.order}
                            required
                          ></input>
                        </TableCell>
                        <TableCell>
                          <input
                            name="enabled"
                            type="checkbox"
                            onChange={() =>
                              setEditFormData({
                                ...editFormData,
                                enabled: !editFormData.enabled,
                              })
                            }
                            checked={editFormData?.enabled}
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
        </>
      )}
    </div>
  );
}

export default ParameterDescription;
