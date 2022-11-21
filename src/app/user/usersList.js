import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import EditIcon from "../shared/EditIcon";
import SharedTable from "../shared/SharedTable";
import toast from "react-hot-toast";
import HRService from "../services/hr.service";
import UserListService from "../services/user-list.service";
import Spinner from "../shared/Spinner";
import "../styles/table.scss";
import "../styles/inputs.scss";
import "../styles/hr.scss";
import "../settings/itemClass.scss";
import "../settings/itemType.scss";
import { Trans } from "react-i18next";
/**
 *   Users List components load the users list and
 * can add or modify users
 * @returns JSX elements
 */
function UsersList() {
  const [list, setList] = useState([]);
  /**
   * @constant {JSON} editFormData json for edited user data
   */
  const [editFormData, setEditFormData] = useState({});
  /**
   * @constant {JSON} addRowFormData json for add user datas
   */
  const [addRowFormData, setAddRowFormData] = useState({
    facadmin: false,
    itemadmin: false,
    reportadmin: false,
    useradmin: false,
    is_active: false,
    password: "",
    conf_password: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [facilities, setFacilities] = useState([]);
  const [selectedFacility, setSelectedFacility] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  /**
   * @function getFacilities fetch facilities from server
   */
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
        toast.error(<Trans>There is a problem loading data</Trans>);
        setIsLoading(false);
      });
  }
  /**
   * @param  {Int} id facility id
   * fetch facility users by facility id
   *
   */
  function getList(id) {
    UserListService.getUsersByFacilityId(id)
      .then((res) => {
        setList(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error(<Trans>There is a problem loading data</Trans>);
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
        facilityid: facilities[0]?.id,
      });
    }
  }, [facilities]);
  /**
   * @param  {int} i user id
   * set edited user id
   *
   */
  function handleEdit(i) {
    const formData = list.find((item) => item.pk === i.pk);
    setEditFormData(formData);
    setIsEditModalOpen(true);
  }
  /**
   * @param  {event} e change event
   */
  function handleChangeEdit(e) {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  }

  function handleChangeAdd(e) {
    const { name, value } = e.target;
    setAddRowFormData({ ...addRowFormData, [name]: value });
  }
  /**
   * @param  {event} e
   * send data to api
   */
  function handleSubmitEdit(e) {
    e.preventDefault();
    const isValid = Object.keys(editFormData).every((key) => {
      return editFormData[key] !== "";
    });
    if (!isValid) {
      toast.error(<Trans>Please fill all the fields</Trans>);
    } else {
      setIsLoading(true);
      let formToPut = (({
        pk,
        password,
        is_active,
        facilityid,
        username,
        idnumber,
        position,
        phone,
        facadmin,
        itemadmin,
        reportadmin,
        useradmin,
      }) => ({
        pk,

        password,
        is_active,
        facilityid,
        username,
        idnumber,
        position,
        phone,
        facadmin,
        itemadmin,
        reportadmin,
        useradmin,
      }))(editFormData);
      console.log(editFormData);
      UserListService.updateUser(formToPut)
        .then((res) => {
          setIsLoading(true);
          getList(selectedFacility);
          setEditFormData({});
          setIsEditModalOpen(false);
          setActiveStep(0);
          toast.success(<Trans>user edit succesfuly</Trans>);
        })
        .catch((err) => {
          toast.error(<Trans>There is a problem sending data</Trans>);
          setIsLoading(false);
        });
    }
  }
  /**
   * @param  {event} e
   * sumbit new user to api
   */
  function handleSubmitNew(e) {
    e.preventDefault();
    const isValid = Object.keys(addRowFormData).every((key) => {
      console.log(key);
      /**
       * check for empty or not
       * empty is ok
       */
      if (key !== "idnumber" || key !== "phone" || key !== "position") {
        console.log(addRowFormData[key]);
        return addRowFormData[key] !== "";
      }
    });
    if (!isValid) {
      toast.error(<Trans>Please fill all the fields</Trans>);
    } else {
      setIsLoading(true);
      const owner = JSON.parse(localStorage.getItem("user")).username;
      let formToPost = (({
        password,
        is_active,
        facilityid,
        username,
        idnumber,
        position,
        phone,
        facadmin,
        itemadmin,
        reportadmin,
        useradmin,
        name,
      }) => ({
        password,
        is_active,
        facilityid,
        username,
        idnumber,
        position,
        phone,
        facadmin,
        itemadmin,
        reportadmin,
        useradmin,
        name,
      }))(addRowFormData);
      console.log(formToPost);
      formToPost.owner = owner;
      UserListService.addUser(formToPost)
        .then((res) => {
          toast.success("user added successfully");
          setIsLoading(true);
          getList(selectedFacility);
          setAddRowFormData({
            ...addRowFormData,
            facadmin: false,
            itemadmin: false,
            reportadmin: false,
            useradmin: false,
            is_active: true,
            password: "",
            conf_password: "",
          });
          setIsAddModalOpen(false);
          setActiveStep(0);
        })
        .catch((err) => {
          if (err.response.data.username) {
            toast.error(err.response.data.username[0]);
            setIsLoading(false);
          } else {
            toast.error("There is a problem sending data");
            setIsLoading(false);
          }
        });
    }
  }
  /**
   * close or open modal
   * !! change modal state
   */
  function toggleModal() {
    setIsAddModalOpen((prevState) => !prevState);
  }
  /**
   * @param  {int} id facility id
   * find facility by its id in list
   */
  function findFacilityById(id) {
    return facilities.find((item) => item.id === id);
  }

  return (
    <div className="item-class-page hr-page">
      <h3 className="page-title mb-3">
        <Trans>User by Facility</Trans>
      </h3>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="row mb-4 mt-4">
            <div className="col-md-2 d-flex align-items-center">
              <h4 className="page-title">
                <Trans>Main Facility</Trans>
              </h4>
            </div>
            <div className="col-md-10 d-flex">
              <select
                name="facilityid"
                onChange={(e) => {
                  setSelectedFacility(e.target.value);
                  setIsLoading(true);
                  getList(e.target.value);
                  setAddRowFormData({
                    ...addRowFormData,
                    facilityid: e.target.value,
                  });
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
                    <TableCell>
                      <Trans>ID</Trans>
                    </TableCell>
                    <TableCell>
                      <Trans>Name</Trans>
                    </TableCell>
                    <TableCell>
                      <Trans>Username</Trans>
                    </TableCell>
                    <TableCell>
                      <Trans>Facility Name</Trans>
                    </TableCell>
                    <TableCell>
                      <Trans>Owner</Trans>
                    </TableCell>
                    <TableCell>
                      <Trans>Manage Facilities</Trans>
                    </TableCell>
                    <TableCell>
                      <Trans>Manage Items</Trans>
                    </TableCell>
                    <TableCell>
                      <Trans>View Reports</Trans>
                    </TableCell>
                    <TableCell>
                      <Trans>Manage Users</Trans>
                    </TableCell>
                    <TableCell>
                      <Trans>Active</Trans>
                    </TableCell>
                    <TableCell>
                      <Trans>Position</Trans>
                    </TableCell>
                    <TableCell>
                      <Trans>Edit</Trans>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {list &&
                    list.map((item, index) => (
                      <>
                        <TableRow>
                          <TableCell>{item.pk}</TableCell>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{item.username}</TableCell>
                          <TableCell>
                            {findFacilityById(item.facilityid)?.name}
                          </TableCell>
                          <TableCell>{item?.owner}</TableCell>
                          <TableCell>
                            <div class="form-check form-check-primary mt-3">
                              <label className="form-check-label">
                                <input
                                  type="checkbox"
                                  checked={item.facadmin}
                                  disabled
                                ></input>
                                <i className="input-helper mt-3"></i>
                              </label>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div class="form-check form-check-primary mt-3">
                              <label className="form-check-label">
                                <input
                                  type="checkbox"
                                  checked={item.itemadmin}
                                  disabled
                                ></input>
                                <i className="input-helper mt-3"></i>
                              </label>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div class="form-check form-check-primary mt-3">
                              <label className="form-check-label">
                                <input
                                  type="checkbox"
                                  checked={item.reportadmin}
                                  disabled
                                ></input>
                                <i className="input-helper mt-3"></i>
                              </label>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div class="form-check form-check-primary mt-3">
                              <label className="form-check-label">
                                <input
                                  type="checkbox"
                                  checked={item.useradmin}
                                  disabled
                                ></input>
                                <i className="input-helper mt-3"></i>
                              </label>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div class="form-check form-check-primary mt-3">
                              <label className="form-check-label">
                                <input
                                  type="checkbox"
                                  checked={item.is_active}
                                  disabled
                                ></input>
                                <i className="input-helper mt-3"></i>
                              </label>
                            </div>
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
            onHide={() => {
              // setIsEditModalOpen(false);
              // setActiveStep(0);
            }}
          >
            <form onSubmit={handleSubmitEdit}>
              {activeStep === 0 ? (
                <>
                  <h3 className="mb-3 text-center">
                    <Trans>Edit</Trans> <Trans>user</Trans>
                  </h3>
                  <div className="d-flex flex-column align-items-center"></div>
                  <div className="d-flex flex-column align-items-center"></div>
                  <div className="d-flex flex-column align-items-center"></div>
                  <div className="d-flex flex-column align-items-center"></div>

                  <div className="d-flex flex-column align-items-center">
                    <label>
                      <Trans>Facility Name</Trans>
                    </label>
                    <select
                      name="facilityid"
                      onChange={handleChangeEdit}
                      value={editFormData?.facilityid}
                    >
                      {facilities.map((item, index) => (
                        <option
                          key={item.id}
                          value={item.id}
                          selected={item.id === editFormData?.facilityid}
                        >
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <label>
                      <Trans>Name</Trans>
                    </label>
                    <input
                      name="name"
                      type="text"
                      onChange={handleChangeEdit}
                      value={editFormData?.name}
                      required
                    ></input>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <label>
                      <Trans>Username</Trans>
                    </label>
                    <input
                      name="username"
                      type="text"
                      onChange={handleChangeEdit}
                      value={editFormData?.username}
                      autoComplete="off"
                      required
                    ></input>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <label>
                      <Trans>Password</Trans>
                    </label>
                    <input
                      name="password"
                      autoComplete="off"
                      type="password"
                      onChange={handleChangeEdit}
                      value={editFormData?.password}
                      required
                    ></input>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <label>
                      <Trans>Confirm Password</Trans>
                    </label>
                    <input
                      name="conf_password"
                      type="password"
                      autoComplete="off"
                      onChange={handleChangeEdit}
                      value={editFormData?.conf_password}
                      required
                    ></input>
                  </div>
                  <button
                    className="save-btn w-25 ml-5 mr-5"
                    onClick={(e) => {
                      e.preventDefault();
                      if (
                        editFormData?.password === editFormData?.conf_password
                      ) {
                        setActiveStep((prev) => prev + 1);
                      } else {
                        toast.error("Passwords doesn't match");
                      }
                    }}
                  >
                    <Trans>Next</Trans>
                  </button>
                  <button
                    className="btn-danger text-dark w-25 ml-5"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsEditModalOpen(false);
                      setActiveStep(0);
                    }}
                  >
                    <Trans>Cancel</Trans>
                  </button>
                </>
              ) : (
                <>
                  <div className="d-flex flex-column align-items-center">
                    <label>
                      <Trans>ID Number</Trans>
                    </label>
                    <input
                      name="idnumber"
                      type="number"
                      onChange={handleChangeEdit}
                      value={editFormData?.idnumber}
                    ></input>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <label>
                      <Trans>Position</Trans>
                    </label>
                    <input
                      name="position"
                      type="text"
                      onChange={handleChangeEdit}
                      value={editFormData?.position}
                    ></input>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <label>
                      <Trans>Phone Number</Trans>
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      onChange={handleChangeEdit}
                      value={editFormData?.phone}
                    ></input>
                  </div>
                  <div className="row mt-3">
                    <div className="d-flex align-items-center justify-content-center col-sm-6">
                      <label className="m-0 mr-2 mb-2">
                        <Trans>Active</Trans>
                      </label>
                      <div class="form-check form-check-primary mt-3">
                        <label className="form-check-label">
                          <input
                            name="is_active"
                            type="checkbox"
                            onChange={() =>
                              setEditFormData({
                                ...editFormData,
                                is_active: !editFormData.is_active,
                              })
                            }
                            checked={editFormData?.is_active}
                          />
                          <i className="input-helper mt-3"></i>
                        </label>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-center col-sm-6">
                      <label className="m-0 mr-2 mb-2">
                        <Trans>Manage Facilities</Trans>
                      </label>
                      <div class="form-check form-check-primary mt-3">
                        <label className="form-check-label">
                          <input
                            name="facadmin"
                            type="checkbox"
                            onChange={() =>
                              setEditFormData({
                                ...editFormData,
                                facadmin: !editFormData.facadmin,
                              })
                            }
                            checked={editFormData?.facadmin}
                          />
                          <i className="input-helper mt-3"></i>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="d-flex align-items-center justify-content-center col-sm-6">
                      <label className="m-0 mr-1 mb-2">
                        <Trans>Manage Items</Trans>
                      </label>
                      <div class="form-check form-check-primary mt-3">
                        <label className="form-check-label">
                          <input
                            name="itemadmin"
                            type="checkbox"
                            onChange={() =>
                              setEditFormData({
                                ...editFormData,
                                itemadmin: !editFormData.itemadmin,
                              })
                            }
                            checked={editFormData?.itemadmin}
                          />
                          <i className="input-helper mt-3"></i>
                        </label>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-center col-sm-6">
                      <label className="m-0 mr-2 mb-2">
                        <Trans>View Reports</Trans>
                      </label>
                      <div class="form-check form-check-primary mt-3">
                        <label className="form-check-label">
                          <input
                            name="reportadmin"
                            type="checkbox"
                            onChange={() =>
                              setEditFormData({
                                ...editFormData,
                                reportadmin: !editFormData.reportadmin,
                              })
                            }
                            checked={editFormData?.reportadmin}
                          />
                          <i className="input-helper mt-3"></i>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="d-flex align-items-center justify-content-center col-sm-12">
                      <label className="m-0 mr-2 mb-2">
                        <Trans>Manage Users</Trans>
                      </label>
                      <div class="form-check form-check-primary mt-3">
                        <label className="form-check-label">
                          <input
                            name="useradmin"
                            type="checkbox"
                            onChange={() =>
                              setEditFormData({
                                ...editFormData,
                                useradmin: !editFormData.useradmin,
                              })
                            }
                            checked={editFormData?.useradmin}
                            value={editFormData?.useradmin}
                          />
                          <i className="input-helper mt-3"></i>
                        </label>
                      </div>
                    </div>
                  </div>
                  <button
                    className="save-btn w-25 ml-3 mr-4"
                    onClick={() => setActiveStep((prev) => prev - 1)}
                  >
                    <Trans>Back</Trans>
                  </button>
                  <button className="save-btn w-25 mr-4" type="submit">
                    <Trans>Save</Trans>
                  </button>
                  <button
                    className="btn-danger text-dark w-25 ml-2"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsEditModalOpen(false);
                      setActiveStep(0);
                    }}
                  >
                    <Trans>Cancel</Trans>
                  </button>
                </>
              )}
            </form>
          </Modal>
          <button className="modal-btn" onClick={toggleModal}>
            <Trans>Add user</Trans>
          </button>
          <Modal
            show={isAddModalOpen}
            onHide={() => {
              // setIsAddModalOpen(false);
              // setActiveStep(0);
            }}
          >
            <form onSubmit={handleSubmitNew}>
              {activeStep === 0 ? (
                <>
                  <h3 className="mb-3 text-center">Add user</h3>
                  <div className="d-flex flex-column align-items-center"></div>
                  <div className="d-flex flex-column align-items-center"></div>
                  <div className="d-flex flex-column align-items-center"></div>
                  <div className="d-flex flex-column align-items-center"></div>

                  <div className="d-flex flex-column align-items-center">
                    <label>
                      <Trans>Facility Name</Trans>
                    </label>
                    <select
                      name="facilityid"
                      onChange={handleChangeAdd}
                      value={addRowFormData?.facilityid}
                    >
                      {facilities.map((item, index) => (
                        <option
                          key={item.id}
                          value={item.id}
                          selected={parseInt(selectedFacility) === item.id}
                        >
                          {console.log(parseInt(addRowFormData?.facilityid))}
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <label>
                      <Trans>Name</Trans>
                    </label>
                    <input
                      name="name"
                      type="text"
                      onChange={handleChangeAdd}
                      value={addRowFormData?.name}
                      required
                    ></input>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <label>
                      <Trans>Username</Trans>
                    </label>
                    <input
                      name="username"
                      type="text"
                      autoComplete="off"
                      onChange={handleChangeAdd}
                      value={addRowFormData?.username}
                      required
                    ></input>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <label>
                      <Trans>Password</Trans>
                    </label>
                    <input
                      name="password"
                      type="password"
                      autoComplete="off"
                      onChange={handleChangeAdd}
                      value={addRowFormData?.password}
                      required
                    ></input>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <label>
                      <Trans>Confirm Password</Trans>
                    </label>
                    <input
                      name="conf_password"
                      type="password"
                      autoComplete="off"
                      onChange={handleChangeAdd}
                      value={addRowFormData?.conf_password}
                      required
                    ></input>
                  </div>
                  <button
                    className="save-btn w-25 ml-5 mr-5"
                    onClick={(e) => {
                      e.preventDefault();
                      if (
                        addRowFormData?.password ===
                        addRowFormData?.conf_password
                      ) {
                        setActiveStep((prev) => prev + 1);
                      } else {
                        toast.error("Passwords doesn't match");
                      }
                    }}
                  >
                    <Trans>Next</Trans>
                  </button>
                  <button
                    className="btn-danger text-dark w-25 ml-5"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsAddModalOpen(false);
                      setActiveStep(0);
                    }}
                  >
                    <Trans>Cancel</Trans>
                  </button>
                </>
              ) : (
                <>
                  <div className="d-flex flex-column align-items-center">
                    <label>
                      <Trans>ID Number</Trans>
                    </label>
                    <input
                      name="idnumber"
                      type="number"
                      onChange={handleChangeAdd}
                      value={addRowFormData?.idnumber}
                    ></input>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <label>
                      <Trans>Position</Trans>
                    </label>
                    <input
                      name="position"
                      type="text"
                      onChange={handleChangeAdd}
                      value={addRowFormData?.position}
                    ></input>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <label>
                      <Trans>Phone Number</Trans>
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      onChange={handleChangeAdd}
                      value={addRowFormData?.phone}
                    ></input>
                  </div>
                  <div className="row mt-3">
                    <div className="d-flex align-items-center justify-content-center col-sm-6">
                      <label className="m-0 mr-2 mb-2">
                        <Trans>Active</Trans>
                      </label>
                      <div class="form-check form-check-primary mt-3">
                        <label className="form-check-label">
                          <input
                            name="is_active"
                            type="checkbox"
                            onChange={() =>
                              setAddRowFormData({
                                ...addRowFormData,
                                is_active: !addRowFormData.is_active,
                              })
                            }
                            checked={addRowFormData?.is_active}
                          />
                          <i className="input-helper mt-3"></i>
                        </label>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-center col-sm-6">
                      <label className="m-0 mr-2 mb-2">
                        <Trans>Manage Facilities</Trans>
                      </label>
                      <div class="form-check form-check-primary mt-3">
                        <label className="form-check-label">
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
                          <i className="input-helper mt-3"></i>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="d-flex align-items-center justify-content-center col-sm-6">
                      <label className="m-0 mr-1 mb-2">
                        <Trans>Manage Items</Trans>
                      </label>
                      <div class="form-check form-check-primary mt-3">
                        <label className="form-check-label">
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
                          <i className="input-helper mt-3"></i>
                        </label>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-center col-sm-6">
                      <label className="m-0 mr-2 mb-2">
                        <Trans>View Reports</Trans>
                      </label>
                      <div class="form-check form-check-primary mt-3">
                        <label className="form-check-label">
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
                          <i className="input-helper mt-3"></i>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="d-flex align-items-center justify-content-center col-sm-12">
                      <label className="m-0 mr-2 mb-2">
                        <Trans>Manage Users</Trans>
                      </label>
                      <div class="form-check form-check-primary mt-3">
                        <label className="form-check-label">
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
                          <i className="input-helper "></i>
                        </label>
                      </div>
                    </div>
                  </div>
                  <button
                    className="save-btn w-25 ml-5 mr-4"
                    onClick={() => setActiveStep((prev) => prev - 1)}
                  >
                    <Trans>Back</Trans>
                  </button>
                  <button className="save-btn w-25 mr-3 mb-3" type="submit">
                    <Trans>Save</Trans>
                  </button>
                  <button
                    className="btn-danger text-dark mr-4 btn-round w-25"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsAddModalOpen(false);
                      setActiveStep(0);
                    }}
                  >
                    <Trans>Cancel</Trans>
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
