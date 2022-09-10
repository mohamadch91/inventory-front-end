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

function UsersList() {
  const [list, setList] = useState([]);
  const [editFormData, setEditFormData] = useState({});
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
    UserListService.getUsersByFacilityId(id)
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
        facilityid: facilities[0]?.id,
      });
    }
  }, [facilities]);

  function handleEdit(i) {
    const formData = list.find((item) => item.pk === i.pk);
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

  function handleSubmitEdit(e) {
    e.preventDefault();
    const isValid = Object.keys(editFormData).every((key) => {
      return editFormData[key] !== "";
    });
    if (!isValid) {
      toast.error("Please fill all the fields");
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
          toast.success("user edit succesfuly");
        })
        .catch((err) => {
          toast.error("There is a problem sending data");
          setIsLoading(false);
        });
    }
  }

  function handleSubmitNew(e) {
    e.preventDefault();
    const isValid = Object.keys(addRowFormData).every((key) => {
      console.log(key);
      if (key !== "idnumber" || key !== "phone" || key !== "position") {
        console.log(addRowFormData[key]);
        return addRowFormData[key] !== "";
      }
    });
    if (!isValid) {
      toast.error("Please fill all the fields");
    } else {
      setIsLoading(true);
      const owner=JSON.parse(localStorage.getItem("user")).username
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
      formToPost.owner=owner
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
          console.log(err);
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
                    <TableCell>Id</TableCell>
                    <TableCell>
                      <Trans>Name</Trans>
                    </TableCell>
                    <TableCell>
                      <Trans>Username</Trans>
                    </TableCell>
                    <TableCell>
                      <Trans>Facility</Trans> <Trans>Name</Trans>
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
                              checked={item.is_active}
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
            onHide={() => {
              setIsEditModalOpen(false);
              setActiveStep(0);
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
                    <label>Facility</label>
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
                      type="text"
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
                      name="conf_password"
                      type="password"
                      onChange={handleChangeEdit}
                      value={editFormData?.conf_password}
                      required
                    ></input>
                  </div>
                  <button
                    className="save-btn w-100"
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
                    Next
                  </button>
                </>
              ) : (
                <>
                  <div className="d-flex flex-column align-items-center">
                    <label>ID Number</label>
                    <input
                      name="idnumber"
                      type="number"
                      onChange={handleChangeEdit}
                      value={editFormData?.idnumber}
                    ></input>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <label>Position</label>
                    <input
                      name="position"
                      type="text"
                      onChange={handleChangeEdit}
                      value={editFormData?.position}
                    ></input>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <label>Phone Number</label>
                    <input
                      name="phone"
                      type="tel"
                      onChange={handleChangeEdit}
                      value={editFormData?.phone}
                    ></input>
                  </div>
                  <div className="row mt-3">
                    <div className="d-flex align-items-center justify-content-center col-sm-6">
                      <label className="m-0 mr-2">Active</label>
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
                    </div>
                    <div className="d-flex align-items-center justify-content-center col-sm-6">
                      <label className="m-0 mr-2">Manage Facilities</label>
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
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="d-flex align-items-center justify-content-center col-sm-6">
                      <label className="m-0 mr-1">Manage Items</label>
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
                    </div>
                    <div className="d-flex align-items-center justify-content-center col-sm-6">
                      <label className="m-0 mr-2">View Reports</label>
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
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="d-flex align-items-center justify-content-center col-sm-12">
                      <label className="m-0 mr-2">Manage Users</label>
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
                    </div>
                  </div>
                  <button
                    className="save-btn w-100"
                    onClick={() => setActiveStep((prev) => prev - 1)}
                  >
                    <Trans>Back</Trans>
                  </button>
                  <button className="save-btn w-100" type="submit">
                    <Trans>Save</Trans>
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
              setIsAddModalOpen(false);
              setActiveStep(0);
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
                      <Trans>Facility</Trans>
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
                          selected={item.id === addRowFormData?.facilityid}
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
                      onChange={handleChangeAdd}
                      value={addRowFormData?.conf_password}
                      required
                    ></input>
                  </div>
                  <button
                    className="save-btn w-100"
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
                    Next
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
                      <label className="m-0 mr-2">
                        <Trans>Active</Trans>
                      </label>
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
                    </div>
                    <div className="d-flex align-items-center justify-content-center col-sm-6">
                      <label className="m-0 mr-2">
                        <Trans>Manage Facilities</Trans>
                      </label>
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
                      <label className="m-0 mr-1">
                        <Trans>Manage Items</Trans>
                      </label>
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
                      <label className="m-0 mr-2">
                        <Trans>View Reports</Trans>
                      </label>
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
                      <label className="m-0 mr-2">
                        <Trans>Manage Users</Trans>
                      </label>
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
                    <Trans>Back</Trans>
                  </button>
                  <button className="save-btn w-100 mb-3" type="submit">
                    <Trans>Save</Trans>
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
