import {
  Box,
  Step,
  StepLabel,
  Stepper,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import EditIcon from "../shared/EditIcon";
import SharedTable from "../shared/SharedTable";
import toast from "react-hot-toast";
import HRService from "../services/hr.service";
import Spinner from "../shared/Spinner";
import "../styles/table.scss";
import "../styles/inputs.scss";
import "../styles/hr.scss";
import "../settings/itemClass.scss";
import "../settings/itemType.scss";

function UsersList() {
  const [list, setList] = useState([]);
  const [editFormData, setEditFormData] = useState({});
  const [addRowFormData, setAddRowFormData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [facilities, setFacilities] = useState([]);
  const [selectedFacility, setSelectedFacility] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  function getFacilities() {
    HRService.getFacilities()
      .then((res) => {
        const data = res.data;
        setFacilities(data);
        setSelectedFacility(data[0].id);
        setIsLoading(false);
        getList(data[0].id);
      })
      .catch((err) => {
        toast.error("There is a problem loading data");
        setIsLoading(false);
      });
  }

  function getList(id) {
    HRService.getHRList(id)
      .then((res) => {
        setList(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error("There is a problem loading data");
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getFacilities();
  }, []);

  useEffect(() => {
    if (facilities) {
      setAddRowFormData({
        ...addRowFormData,
        facility: facilities[0]?.id,
      });
    }
  }, [facilities]);

  function handleEdit(i) {
    const formData = list.find((item) => item.id === i.id);
    setEditFormData(formData);
    setIsEditModalOpen(true);
  }

  function handleChangeEdit(e) {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  }

  function handleChangeAdd(e) {
    const { name, value } = e.target;
    setAddRowFormData({ ...addRowFormData, [name]: value });
  }

  function handleSubmitEdit() {
    const isValid = Object.keys(editFormData).every((key) => {
      return editFormData[key] !== "";
    });
    if (!isValid) {
      toast.error("Please fill all the fields");
    } else {
      setIsLoading(true);
      let formToPut = (({
        id,
        full_name,
        position_level,
        educatioin_level,
        gender,
      }) => ({
        id,
        full_name,
        position_level,
        educatioin_level,
        gender,
      }))(editFormData);
      formToPut.year_in_position = parseInt(editFormData.year_in_position);
      formToPut.years_in_service = parseInt(editFormData.years_in_service);
      formToPut.facility = parseInt(editFormData.facility);
      HRService.putHR(formToPut)
        .then((res) => {
          setIsLoading(true);
          getList(selectedFacility);
          setEditFormData({});
          setIsEditModalOpen(false);
        })
        .catch((err) => {
          toast.error("There is a problem sending data");
          setIsLoading(false);
        });
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
      let formToPost = (({
        id,
        full_name,
        position_level,
        educatioin_level,
        years_in_service,
        year_in_position,
        gender,
      }) => ({
        id,
        full_name,
        position_level,
        educatioin_level,
        years_in_service,
        year_in_position,
        gender,
      }))(addRowFormData);
      formToPost.year_in_position = parseInt(addRowFormData.year_in_position);
      formToPost.years_in_service = parseInt(addRowFormData.years_in_service);
      formToPost.facility = parseInt(addRowFormData.facility);
      HRService.postHR(formToPost)
        .then((res) => {
          setIsLoading(true);
          getList(selectedFacility);
          setAddRowFormData({
            ...addRowFormData,
          });
          setIsAddModalOpen(false);
        })
        .catch((err) => {
          toast.error("There is a problem sending data");
          setIsLoading(false);
        });
    }
  }

  function toggleModal() {
    setIsAddModalOpen((prevState) => !prevState);
  }

  function findFacilityById(id) {
    return facilities.find((item) => item.id === id);
  }

  return (
    <div className="item-class-page hr-page">
      <h3 className="page-title mb-3">HR by Facility</h3>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="row mb-4 mt-4">
            <div className="col-md-2 d-flex align-items-center">
              <h4 className="page-title">Main Facility</h4>
            </div>
            <div className="col-md-10 d-flex">
              <select
                name="facility"
                onChange={(e) => {
                  setSelectedFacility(e.target.value);
                  setIsLoading(true);
                  getList(e.target.value);
                }}
                value={selectedFacility}
              >
                {facilities.map((item, index) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {facilities && list && list.length > 0 && (
            <div>
              <SharedTable>
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    {/* <TableCell>Defined by</TableCell> */}
                    <TableCell>Facility Name</TableCell>
                    <TableCell>Manage Facilities</TableCell>
                    <TableCell>Manage Items</TableCell>
                    <TableCell>View Reports</TableCell>
                    <TableCell>Manage Users</TableCell>
                    <TableCell>Superior</TableCell>
                    {/* <TableCell>Enable</TableCell> */}
                    <TableCell>Position</TableCell>
                    <TableCell>Edit</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {list &&
                    list.map((item, index) => (
                      <>
                        <TableRow>
                          <TableCell>{index + 1}</TableCell>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{item.username}</TableCell>
                          {/* <TableCell>{item.definedby}</TableCell> */}
                          <TableCell>
                            {findFacilityById(item.facility)?.name}
                          </TableCell>
                          <TableCell>
                            <input
                              type="checkbox"
                              checked={item.facadmin}
                              disabled
                            ></input>
                          </TableCell>
                          <TableCell>
                            <input
                              type="checkbox"
                              checked={item.itemadmin}
                              disabled
                            ></input>
                          </TableCell>
                          <TableCell>
                            <input
                              type="checkbox"
                              checked={item.reportadmin}
                              disabled
                            ></input>
                          </TableCell>
                          <TableCell>
                            <input
                              type="checkbox"
                              checked={item.useradmin}
                              disabled
                            ></input>
                          </TableCell>
                          <TableCell>
                            <input
                              type="checkbox"
                              checked={item.is_superior}
                              disabled
                            ></input>
                          </TableCell>
                          <TableCell>{item.position}</TableCell>
                          <TableCell>
                            <button
                              className="edit-btn"
                              onClick={(event) => handleEdit(item)}
                            >
                              <EditIcon />
                            </button>
                          </TableCell>
                        </TableRow>
                      </>
                    ))}
                </TableBody>
              </SharedTable>
            </div>
          )}
          <Modal
            show={isEditModalOpen}
            onHide={() => setIsEditModalOpen(false)}
          >
            <form onSubmit={handleSubmitEdit}>
              {activeStep === 0 ? (
                <>
                  <h3 className="mb-3 text-center">
                    Human Resource Information
                  </h3>
                  <div className="d-flex flex-column align-items-center"></div>
                  <div className="d-flex flex-column align-items-center"></div>
                  <div className="d-flex flex-column align-items-center"></div>
                  <div className="d-flex flex-column align-items-center"></div>

                  <div className="d-flex flex-column align-items-center">
                    <label>Facility</label>
                    <select
                      name="facility"
                      onChange={handleChangeEdit}
                      value={editFormData?.facility}
                    >
                      {facilities.map((item, index) => (
                        <option
                          key={item.id}
                          value={item.id}
                          selected={item.facility === item.id}
                        >
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <label>Name</label>
                    <input
                      name="name"
                      type="text"
                      onChange={handleChangeEdit}
                      value={editFormData?.name}
                      required
                    ></input>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <label>Username</label>
                    <input
                      name="username"
                      type="number"
                      onChange={handleChangeEdit}
                      value={editFormData?.username}
                      required
                    ></input>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <label>Password</label>
                    <input
                      name="password"
                      type="password"
                      onChange={handleChangeEdit}
                      value={editFormData?.password}
                      required
                    ></input>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <label>Confirm Password</label>
                    <input
                      name="conf-password"
                      type="password"
                      onChange={handleChangeEdit}
                      value={editFormData?.year_in_position}
                      required
                    ></input>
                  </div>
                  <button
                    className="save-btn w-100"
                    onClick={() => setActiveStep((prev) => prev + 1)}
                  >
                    Next
                  </button>
                </>
              ) : (
                <>
                  <div className="d-flex flex-column align-items-center">
                    <label>ID Number</label>
                    <input
                      name="id"
                      type="number"
                      onChange={handleChangeEdit}
                      value={editFormData?.id}
                      required
                    ></input>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <label>Position</label>
                    <input
                      name="position"
                      type="text"
                      onChange={handleChangeEdit}
                      value={editFormData?.position}
                      required
                    ></input>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <label>Phone Number</label>
                    <input
                      name="phone"
                      type="tel"
                      onChange={handleChangeEdit}
                      value={editFormData?.phone}
                      required
                    ></input>
                  </div>
                  <div className="row mt-3">
                    <div className="d-flex align-items-center justify-content-center col-sm-6">
                      <label className="m-0 mr-2">Enable</label>
                      <input
                        name="enable"
                        type="checkbox"
                        onChange={() =>
                          setAddRowFormData({
                            ...editFormData,
                            enable: !editFormData.enable,
                          })
                        }
                        checked={editFormData?.enable}
                      />
                    </div>
                    <div className="d-flex align-items-center justify-content-center col-sm-6">
                      <label className="m-0 mr-2">Manage Facilities</label>
                      <input
                        name="facadmin"
                        type="checkbox"
                        onChange={() =>
                          setAddRowFormData({
                            ...editFormData,
                            facadmin: !editFormData.facadmin,
                          })
                        }
                        checked={editFormData?.facadmin}
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="d-flex align-items-center justify-content-center col-sm-6">
                      <label className="m-0 mr-1">Manage Items</label>
                      <input
                        name="itemadmin"
                        type="checkbox"
                        onChange={() =>
                          setAddRowFormData({
                            ...editFormData,
                            itemadmin: !editFormData.itemadmin,
                          })
                        }
                        checked={editFormData?.itemadmin}
                      />
                    </div>
                    <div className="d-flex align-items-center justify-content-center col-sm-6">
                      <label className="m-0 mr-2">View Reports</label>
                      <input
                        name="reportadmin"
                        type="checkbox"
                        onChange={() =>
                          setAddRowFormData({
                            ...editFormData,
                            reportadmin: !editFormData.reportadmin,
                          })
                        }
                        checked={editFormData?.reportadmin}
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="d-flex align-items-center justify-content-center col-sm-12">
                      <label className="m-0 mr-2">Manage Users</label>
                      <input
                        name="useradmin"
                        type="checkbox"
                        onChange={() =>
                          setAddRowFormData({
                            ...editFormData,
                            useradmin: !editFormData.useradmin,
                          })
                        }
                        checked={editFormData?.useradmin}
                      />
                    </div>
                  </div>
                  <button
                    className="save-btn w-100"
                    onClick={() => setActiveStep((prev) => prev - 1)}
                  >
                    Back
                  </button>
                  <button className="save-btn w-100" type="submit">
                    Save
                  </button>
                </>
              )}
            </form>
          </Modal>
          <button className="modal-btn" onClick={toggleModal}>
            Human Resource Information
          </button>
          <Modal show={isAddModalOpen} onHide={() => setIsAddModalOpen(false)}>
            <form onSubmit={handleSubmitNew}>
              {activeStep === 0 ? (
                <>
                  <h3 className="mb-3 text-center">
                    Human Resource Information
                  </h3>
                  <div className="d-flex flex-column align-items-center"></div>
                  <div className="d-flex flex-column align-items-center"></div>
                  <div className="d-flex flex-column align-items-center"></div>
                  <div className="d-flex flex-column align-items-center"></div>

                  <div className="d-flex flex-column align-items-center">
                    <label>Facility</label>
                    <select
                      name="facility"
                      onChange={handleChangeEdit}
                      value={addRowFormData?.facility}
                    >
                      {facilities.map((item, index) => (
                        <option
                          key={item.id}
                          value={item.id}
                          selected={item.facility === item.id}
                        >
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <label>Name</label>
                    <input
                      name="name"
                      type="text"
                      onChange={handleChangeEdit}
                      value={addRowFormData?.name}
                      required
                    ></input>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <label>Username</label>
                    <input
                      name="username"
                      type="number"
                      onChange={handleChangeEdit}
                      value={addRowFormData?.username}
                      required
                    ></input>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <label>Password</label>
                    <input
                      name="password"
                      type="password"
                      onChange={handleChangeEdit}
                      value={addRowFormData?.password}
                      required
                    ></input>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <label>Confirm Password</label>
                    <input
                      name="conf-password"
                      type="password"
                      onChange={handleChangeEdit}
                      value={addRowFormData?.year_in_position}
                      required
                    ></input>
                  </div>
                  <button
                    className="save-btn w-100"
                    onClick={() => setActiveStep((prev) => prev + 1)}
                  >
                    Next
                  </button>
                </>
              ) : (
                <>
                  <div className="d-flex flex-column align-items-center">
                    <label>ID Number</label>
                    <input
                      name="id"
                      type="number"
                      onChange={handleChangeEdit}
                      value={addRowFormData?.id}
                      required
                    ></input>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <label>Position</label>
                    <input
                      name="position"
                      type="text"
                      onChange={handleChangeEdit}
                      value={addRowFormData?.position}
                      required
                    ></input>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <label>Phone Number</label>
                    <input
                      name="phone"
                      type="tel"
                      onChange={handleChangeEdit}
                      value={addRowFormData?.phone}
                      required
                    ></input>
                  </div>
                  <div className="row mt-3">
                    <div className="d-flex align-items-center justify-content-center col-sm-6">
                      <label className="m-0 mr-2">Enable</label>
                      <input
                        name="enable"
                        type="checkbox"
                        onChange={() =>
                          setAddRowFormData({
                            ...addRowFormData,
                            enable: !addRowFormData.enable,
                          })
                        }
                        checked={addRowFormData?.enable}
                      />
                    </div>
                    <div className="d-flex align-items-center justify-content-center col-sm-6">
                      <label className="m-0 mr-2">Manage Facilities</label>
                      <input
                        name="facadmin"
                        type="checkbox"
                        onChange={() =>
                          setAddRowFormData({
                            ...addRowFormData,
                            facadmin: !addRowFormData.facadmin,
                          })
                        }
                        checked={addRowFormData?.facadmin}
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="d-flex align-items-center justify-content-center col-sm-6">
                      <label className="m-0 mr-1">Manage Items</label>
                      <input
                        name="itemadmin"
                        type="checkbox"
                        onChange={() =>
                          setAddRowFormData({
                            ...addRowFormData,
                            itemadmin: !addRowFormData.itemadmin,
                          })
                        }
                        checked={addRowFormData?.itemadmin}
                      />
                    </div>
                    <div className="d-flex align-items-center justify-content-center col-sm-6">
                      <label className="m-0 mr-2">View Reports</label>
                      <input
                        name="reportadmin"
                        type="checkbox"
                        onChange={() =>
                          setAddRowFormData({
                            ...addRowFormData,
                            reportadmin: !addRowFormData.reportadmin,
                          })
                        }
                        checked={addRowFormData?.reportadmin}
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="d-flex align-items-center justify-content-center col-sm-12">
                      <label className="m-0 mr-2">Manage Users</label>
                      <input
                        name="useradmin"
                        type="checkbox"
                        onChange={() =>
                          setAddRowFormData({
                            ...addRowFormData,
                            useradmin: !addRowFormData.useradmin,
                          })
                        }
                        checked={addRowFormData?.useradmin}
                      />
                    </div>
                  </div>
                  <button
                    className="save-btn w-100"
                    onClick={() => setActiveStep((prev) => prev - 1)}
                  >
                    Back
                  </button>
                  <button className="save-btn w-100" type="submit">
                    Save
                  </button>
                </>
              )}
            </form>
          </Modal>
        </>
      )}
    </div>
  );
}

export default UsersList;
