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
import "./message.scss";
import { Link } from "react-router-dom";

function MessageList() {
  const [list, setList] = useState([]);
  const [editFormData, setEditFormData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFacility, setSelectedFacility] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const [sentOrReceived, setSentOrReceived] = useState("r"); // r means received and s means sent

  function getList() {
    if (sentOrReceived === "r") {
      MessageService.getReceivedMessages()
        .then((res) => {
          setList(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          toast.error("There is a problem loading data");
          setIsLoading(false);
        });
    } else {
      MessageService.getSentMessages()
        .then((res) => {
          setList(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          toast.error("There is a problem loading data");
          setIsLoading(false);
        });
    }
  }

  useEffect(() => {
    getList();
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

  function handleSubmitEdit(e) {
    e.preventDefault();
    const isValid = Object.keys(editFormData).every((key) => {
      return editFormData[key] !== "";
    });
    if (!isValid) {
      toast.error("Please fill all the fields");
    } else {
      const { subject, body, id, sender, reciever } = editFormData;
      const data = {
        subject,
        body,
        id,
      };
      data.sender = sender.id;
      data.reciever = reciever.id;
      MessageService.putMessage(data)
        .then((res) => {
          toast.success("Message sent successfully");
          getList();
          setEditFormData({});
          setSelected([]);
          setIsEditModalOpen(false);
        })
        .catch((err) => {
          toast.error("There is a problem sending message");
        });
    }
  }

  return (
    <div className="item-class-page hr-page message-page">
      <h3 className="page-title mb-3">Messages List</h3>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="row mb-4 mt-4">
            <div className="col-md-3 d-flex align-items-center">
              <h4 className="page-title">Received or Sent messages</h4>
            </div>
            <div className="col-md-9 d-flex">
              <select
                name="receivedOrSent"
                onChange={(e) => {
                  setSentOrReceived(e.target.value);
                  setIsLoading(true);
                  getList();
                }}
                value={sentOrReceived}
              >
                <option value="s">Sent</option>
                <option value="r">Received</option>
              </select>
            </div>
          </div>
          {list && list.length > 0 && (
            <div>
              <SharedTable>
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>
                      {sentOrReceived === "s" ? "Receiver" : "Sender"}
                    </TableCell>
                    <TableCell>Subject</TableCell>
                    <TableCell>Body</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Edit</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {list &&
                    list.map((item, index) => (
                      <>
                        <TableRow>
                          <TableCell>{index + 1}</TableCell>
                          <TableCell>
                            {sentOrReceived === "s"
                              ? item.reciever.name
                              : item.sender.name}
                          </TableCell>
                          <TableCell>{item.subject}</TableCell>
                          <TableCell>{item.body}</TableCell>
                          <TableCell>
                            {new Date(item.created_at).toLocaleDateString("en")}
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
              <div className="d-flex flex-column">
                <label>Subject</label>
                <input
                  onChange={handleChangeEdit}
                  type="text"
                  name="subject"
                  value={editFormData.subject}
                  required
                />
              </div>
              <div className="d-flex flex-column">
                <label>Message Body</label>
                <textarea
                  onChange={handleChangeEdit}
                  value={editFormData.body}
                  name="body"
                  required
                />
              </div>
              <button type="submit" className="w-100 save-btn mt-4">
                Send
              </button>
            </form>
          </Modal>
        </>
      )}
      <Link to="/message/new">
        <button className="save-btn mt-4">Send Message</button>
      </Link>
    </div>
  );
}

export default MessageList;
