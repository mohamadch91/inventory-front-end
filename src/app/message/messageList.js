import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import EditIcon from "../shared/EditIcon";
import SharedTable from "../shared/SharedTable";
import toast from "react-hot-toast";
import HRService from "../services/hr.service";
import Spinner from "../shared/Spinner";
import MessageService from "../services/message.service";
import { MultiSelect } from "react-multi-select-component";
import "../styles/table.scss";
import "../styles/inputs.scss";
import "../styles/hr.scss";
import "../settings/itemClass.scss";
import "../settings/itemType.scss";

function MessageList() {
  const [list, setList] = useState([]);
  const [editFormData, setEditFormData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [facilities, setFacilities] = useState([]);
  const [selectedFacility, setSelectedFacility] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selected, setSelected] = useState([]);

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

  function handleEdit(i) {
    const formData = list.find((item) => item.id === i.id);
    setEditFormData(formData);
    setIsEditModalOpen(true);
  }

  function handleChangeEdit(e) {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  }

  function handleSubmitEdit() {
    const isValid = Object.keys(editFormData).every((key) => {
      return editFormData[key] !== "";
    });
    if (!isValid) {
      toast.error("Please fill all the fields");
    } else {
      if (selected.length === 0) {
        toast.error("Please select at least one facility");
      } else {
        const { subject, body } = editFormData;
        const data = {
          subject,
          body,
          reciever: selected.map((item) => item.value),
        };
        MessageService.sendMessage(data)
          .then((res) => {
            toast.success("Message sent successfully");
            setEditFormData({});
            setSelected([]);
          })
          .catch((err) => {
            toast.error("There is a problem sending message");
          });
      }
    }
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
                    <TableCell>Full Name</TableCell>
                    <TableCell>Facility</TableCell>
                    <TableCell>HR Position Levels</TableCell>
                    <TableCell>Gender</TableCell>
                    <TableCell>HR Education Levels</TableCell>
                    <TableCell>Total Years In Service</TableCell>
                    <TableCell>Total Year In This Position</TableCell>
                    <TableCell>Edit</TableCell>
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
              <h3 className="mb-1">Edit Message</h3>

              <button className="save-btn w-100" type="submit">
                Save
              </button>
            </form>
          </Modal>
        </>
      )}
    </div>
  );
}

export default MessageList;
