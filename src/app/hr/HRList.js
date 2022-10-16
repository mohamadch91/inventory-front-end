import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
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
import { Translation,Trans } from "react-i18next";
/**
 * @component HRList
 * show HR page
 * can see add or edit HR,s
 * 
 */
function HRList() {
  const genders = ["male", "female"];
  const positionLevels = ["Nurse", "Vaccinator", "Assistant"];
  const educationLevels = ["Diploma", "Bsc"];

  const [list, setList] = useState([]);
  const [editFormData, setEditFormData] = useState({
    genders: genders[0],
    position_level: positionLevels[0],
    educatioin_level: educationLevels[0],
  });
  const [addRowFormData, setAddRowFormData] = useState({
    genders: genders[0],
    position_level: positionLevels[0],
    educatioin_level: educationLevels[0],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [facilities, setFacilities] = useState([]);
  const [selectedFacility, setSelectedFacility] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  /**
   * fetch facilities from API
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

  function getList(id) {
    HRService.getHRList(id)
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
        id,
        full_name,
        position_level,
        educatioin_level,
        genders,
      }) => ({
        id,
        full_name,
        position_level,
        educatioin_level,
        genders,
      }))(editFormData);
      if (!editFormData.genders) {
        formToPut.genders = "male";
      }
      if (!editFormData.position_level) {
        formToPut.position_level = positionLevels[0];
      }
      if (!editFormData.educatioin_level) {
        formToPut.educatioin_level = educationLevels[0];
      }
      formToPut.year_in_position = parseInt(editFormData.year_in_position);
      formToPut.years_in_service = parseInt(editFormData.years_in_service);
      formToPut.facility = parseInt(editFormData.facility);
      HRService.putHR(formToPut)
        .then((res) => {
          setIsLoading(true);
          getList(selectedFacility);
          setEditFormData({
            genders: genders[0],
            position_level: positionLevels[0],
            educatioin_level: educationLevels[0],
          });
          setIsEditModalOpen(false);
        })
        .catch((err) => {
                    toast.error(<Trans>There is a problem sending data</Trans>);

          setIsLoading(false);
        });
    }
  }

  function handleSubmitNew(e) {
    e.preventDefault();
    const isValid = Object.keys(addRowFormData).every((key) => {
      return addRowFormData[key] !== "";
    });
    if (!isValid) {
            toast.error(<Trans>Please fill all the fields</Trans>);

    } else {
      setIsLoading(true);
      let formToPost = (({
        id,
        full_name,
        position_level,
        educatioin_level,
        years_in_service,
        year_in_position,
        genders,
      }) => ({
        id,
        full_name,
        position_level,
        educatioin_level,
        years_in_service,
        year_in_position,
        genders,
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
            genders: genders[0],
            position_level: positionLevels[0],
            educatioin_level: educationLevels[0],
          });
          setIsAddModalOpen(false);
        })
        .catch((err) => {
          toast.error(<Trans>There is a problem sending data</Trans>);
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
        <Trans>Human resources information by facility</Trans>
      </h3>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="row mb-4 mt-4">
            <div className="col-md-2 d-flex align-items-center">
              <h4 className="page-title">
                <Trans>Main facility</Trans>
              </h4>
            </div>
            <div className="col-md-10 d-flex">
              <select
                name="facility"
                onChange={(e) => {
                  setSelectedFacility(e.target.value);
                  setIsLoading(true);
                  getList(e.target.value);
                  setAddRowFormData({
                    ...addRowFormData,
                    facility: e.target.value,
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
                      <Trans>Full Name</Trans>
                    </TableCell>
                    <TableCell>
                      <Trans>Facility</Trans>
                    </TableCell>
                    <TableCell>
                      <Trans>HR Position Levels</Trans>
                    </TableCell>
                    <TableCell>
                      <Trans>Gender</Trans>
                    </TableCell>
                    <TableCell>
                      <Trans>HR Education Levels</Trans>
                    </TableCell>
                    <TableCell>
                      <Trans>Total Years In Service</Trans>
                    </TableCell>
                    <TableCell>
                      <Trans>Total Year In This Position</Trans>
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
                          <TableCell>{index + 1}</TableCell>
                          <TableCell>{item.full_name}</TableCell>
                          <TableCell>
                            {findFacilityById(item.facility)?.name}
                          </TableCell>
                          <TableCell>{item.position_level}</TableCell>
                          <TableCell>{item.genders}</TableCell>
                          <TableCell>{item.educatioin_level}</TableCell>
                          <TableCell>{item.years_in_service}</TableCell>
                          <TableCell>{item.year_in_position}</TableCell>
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
              <h3 className="mb-1">
                <Trans>Human resource information</Trans>
              </h3>
              <div className="d-flex flex-column align-items-center"></div>
              <div className="d-flex flex-column align-items-center"></div>
              <div className="d-flex flex-column align-items-center"></div>
              <div className="d-flex flex-column align-items-center"></div>

              <div className="d-flex flex-column align-items-center">
                <label>
                  <Trans>Facility</Trans>
                </label>
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
                <label>
                  <Trans>Full Name</Trans>
                </label>
                <input
                  name="full_name"
                  type="text"
                  onChange={handleChangeEdit}
                  value={editFormData?.full_name}
                  required
                ></input>
              </div>

              <div className="d-flex flex-column align-items-center">
                <label>
                  <TableCell>HR Position Levels</TableCell>
                </label>
                <select
                  name="position_level"
                  onChange={handleChangeEdit}
                  value={editFormData?.position_level}
                >
                  {positionLevels.map((item, index) => (
                    <Translation>
                      {(t, { i18n }) => (
                        <option key={index} value={item}>
                          {t(item)}
                        </option>
                      )}
                    </Translation>
                  ))}
                </select>
              </div>
              <div className="d-flex flex-column align-items-center">
                <label>
                  <Trans>HR Education Levels</Trans>
                </label>
                <select
                  name="educatioin_level"
                  onChange={handleChangeEdit}
                  value={editFormData?.educatioin_level}
                >
                  {educationLevels.map((item, index) => (
                    <Translation>
                      {(t, { i18n }) => (
                        <option key={index} value={item}>
                          {t(item)}
                        </option>
                      )}
                    </Translation>
                  ))}
                </select>
              </div>
              <div className="d-flex flex-column align-items-center">
                <label>
                  <Trans>Gender</Trans>
                </label>
                <select
                  name="genders"
                  onChange={handleChangeEdit}
                  value={editFormData?.genders}
                >
                  {genders.map((i, index) => (
                    <Translation>
                      {(t, { i18n }) => (
                        <option key={index} value={i}>
                          {t(i)}
                        </option>
                      )}
                    </Translation>
                  ))}
                </select>
              </div>
              <div className="d-flex flex-column align-items-center">
                <label>
                  <Trans>Total Years In Service</Trans>
                </label>
                <input
                  name="years_in_service"
                  type="number"
                  onChange={handleChangeEdit}
                  value={editFormData?.years_in_service}
                  required
                ></input>
              </div>
              <div className="d-flex flex-column align-items-center">
                <label>
                  <Trans>Total Years In This Position</Trans>
                </label>
                <input
                  name="year_in_position"
                  type="number"
                  onChange={handleChangeEdit}
                  value={editFormData?.year_in_position}
                  required
                ></input>
              </div>
              <button className="save-btn w-100" type="submit">
                <Trans>Save</Trans>
              </button>
            </form>
          </Modal>
          <button className="modal-btn" onClick={toggleModal}>
            <Trans>Add human resource</Trans>
          </button>
          <Modal show={isAddModalOpen} onHide={() => setIsAddModalOpen(false)}>
            <form onSubmit={handleSubmitNew}>
              <h3 className="mb-1">
                <Trans>Human resource information</Trans>
              </h3>
              <div className="d-flex flex-column align-items-center"></div>
              <div className="d-flex flex-column align-items-center"></div>
              <div className="d-flex flex-column align-items-center"></div>
              <div className="d-flex flex-column align-items-center"></div>

              <div className="d-flex flex-column align-items-center">
                <label>
                  <Trans>Facility</Trans>
                </label>
                <select
                  name="facility"
                  onChange={handleChangeAdd}
                  value={addRowFormData?.facility}
                >
                  {facilities.map((item, index) => (
                    <option
                      key={item.id}
                      value={item.id}
                      selected={selectedFacility === item.id}
                    >
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="d-flex flex-column align-items-center">
                <label>
                  <Trans>Full Name</Trans>
                </label>
                <input
                  name="full_name"
                  type="text"
                  onChange={handleChangeAdd}
                  value={addRowFormData?.full_name}
                  required
                ></input>
              </div>

              <div className="d-flex flex-column align-items-center">
                <label>
                  <Trans>HR Position Levels</Trans>
                </label>
                <select
                  name="position_level"
                  onChange={handleChangeAdd}
                  value={addRowFormData?.position_level}
                >
                  {positionLevels.map((item, index) => (
                    <Translation>
                      {(t, { i18n }) => (
                        <option key={index} value={item}>
                          {t(item)}
                        </option>
                      )}
                    </Translation>
                  ))}
                </select>
              </div>
              <div className="d-flex flex-column align-items-center">
                <label>
                  <Trans>HR Education Levels</Trans>
                </label>
                <select
                  name="educatioin_level"
                  onChange={handleChangeAdd}
                  value={addRowFormData?.educatioin_level}
                >
                  {educationLevels.map((item, index) => (
                    <Translation>
                      {(t, { i18n }) => (
                        <option key={index} value={item}>
                          {t(item)}
                        </option>
                      )}
                    </Translation>
                  ))}
                </select>
              </div>
              <div className="d-flex flex-column align-items-center">
                <label>
                  <Trans>Gender</Trans>
                </label>
                <select
                  name="genders"
                  onChange={handleChangeAdd}
                  value={addRowFormData?.genders}
                >
                  {genders.map((i, index) => (
                    <Translation>
                      {(t, { i18n }) => (
                        <option key={index} value={i}>
                          {t(i)}
                        </option>
                      )}
                    </Translation>
                  ))}
                </select>
              </div>
              <div className="d-flex flex-column align-items-center">
                <label>
                  <Trans>Total Years In Service</Trans>
                </label>
                <input
                  name="years_in_service"
                  type="number"
                  onChange={handleChangeAdd}
                  value={addRowFormData?.years_in_service}
                  required
                ></input>
              </div>
              <div className="d-flex flex-column align-items-center">
                <label>
                  <Trans>Total Years In This Position</Trans>
                </label>
                <input
                  name="year_in_position"
                  type="number"
                  onChange={handleChangeAdd}
                  value={addRowFormData?.year_in_position}
                  required
                ></input>
              </div>
              <button className="save-btn w-100" type="submit">
                <Trans>Save</Trans>
              </button>
            </form>
          </Modal>
        </>
      )}
    </div>
  );
}

export default HRList;
