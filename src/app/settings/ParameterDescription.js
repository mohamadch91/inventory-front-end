import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import CloseIcon from "../shared/CloseIcon";
import EditIcon from "../shared/EditIcon";
import SharedTable from "../shared/SharedTable";
import toast from "react-hot-toast";
import Spinner from "../shared/Spinner";
import "./itemClass.scss";
import "./itemType.scss";
import "../styles/inputs.scss";
import RelatedService from "../services/related.service";
import { useParams } from "react-router-dom";
import { Trans } from "react-i18next";

function ParameterDescription() {
  const [descriptions, setDescriptions] = useState([]);
  const [paramName, setParamName] = useState("");
  const [editFormData, setEditFormData] = useState({});
  const [addRowFormData, setAddRowFormData] = useState({
    name: "",
    order: null,
    enabled: true,
  });
  const [editableRowId, setEditableRowId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  function getData(type, id) {
    RelatedService.getParameterDescriptions(id, type)
      .then((res) => {
        setDescriptions(res.data["description"]);
        setParamName(res.data["name"]);
        setIsLoading(false);
      })
      .catch((err) => {
                toast.error(<Trans>There is a problem loading data</Trans>);

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
      formToPut.type = id.split("-")[0];
      RelatedService.putParameters(formToPut)
        .then((res) => {
          const params = id.split("-");
          getData(params[0], params[1]);
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
                    toast.error(<Trans>There is a problem sending data</Trans>);

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
    <div className="item-class-page-param">
      <h2 className="page-title mb-3">
        <Trans>{id?.split("-")[0]}</Trans> <Trans>Parameter Descriptions</Trans>
      </h2>
      <h3 className="mb-3 param-name">{paramName}</h3>
      <div className="add-row mt-4 mb-4">
        <h3>
          <Trans>Insert parameter In this row :</Trans>
        </h3>
        <form onSubmit={handleSubmitNew}>
          <div className="row">
            <div className="col-md-4 flex-column d-flex">
              <label>
                <Trans>Parameter description</Trans>
              </label>
              <input
                name="name"
                type="text"
                onChange={handleChangeAdd}
                value={addRowFormData?.name}
                required
              ></input>
            </div>
            <div className="col-md-4 flex-column d-flex">
              <label>
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
            <div className="col-md-4 d-flex justify-content-center align-items-center mt-3">
              <label>
                <Trans>Enable</Trans>
              </label>
              <div class="form-check form-check-primary mt-3">
                <label className="form-check-label">
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
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div>
            <SharedTable>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Trans>Description</Trans>
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
                {descriptions.map((item, index) => (
                  <>
                    {editableRowId !== item.id ? (
                      <TableRow>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.order}</TableCell>
                        <TableCell>
                          <div class="form-check form-check-primary mt-3">
                            <label className="form-check-label">
                              <input
                                type="checkbox"
                                checked={item.enabled}
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
                          <div class="form-check form-check-primary mt-3">
                            <label className="form-check-label">
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
        </>
      )}
    </div>
  );
}

export default ParameterDescription;
