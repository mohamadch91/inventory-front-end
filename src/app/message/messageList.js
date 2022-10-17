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
import { Translation,Trans } from "react-i18next";

function MessageList() {
  const [list, setList] = useState([]);
  const [editFormData, setEditFormData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFacility, setSelectedFacility] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const [sentOrReceived, setSentOrReceived] = useState("s"); // r means received and s means sent

  function getList() {
    if (sentOrReceived === "s") {
      MessageService.getReceivedMessages()
        .then((res) => {
          setList(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
                  toast.error(<Trans>There is a problem loading data</Trans>);

          setIsLoading(false);
        });
    } else {
      MessageService.getSentMessages()
        .then((res) => {
          setList(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
                  toast.error(<Trans>There is a problem loading data</Trans>);

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
            toast.error(<Trans>Please fill all the fields</Trans>);

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
          toast.success(<Trans>Message sent successfully</Trans>);
          getList();
          setEditFormData({});
          setSelected([]);
          setIsEditModalOpen(false);
        })
        .catch((err) => {
          toast.error(<Trans>There is a problem sending message</Trans>);
        });
    }
  }

  return (
    <div className="item-class-page hr-page message-page">
      <h3 className="page-title mb-3">
        <Trans>Messages list</Trans>
      </h3>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="row mb-4 mt-4">
            <div className="col-md-3 d-flex align-items-center">
              <h4>
                <Trans>Received or sent messages</Trans>
              </h4>
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
                <Translation>
                  {(t, { i18n }) => <option value="s">{t("Sent")}</option>}
                </Translation>
                <Translation>
                  {(t, { i18n }) => <option value="r">{t("Received")}</option>}
                </Translation>
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
                      {sentOrReceived === "s" ? (
                        <Trans>Receiver</Trans>
                      ) : (
                        <Trans>Sender</Trans>
                      )}
                    </TableCell>
                    <TableCell>
                      <Trans>Subject</Trans>
                    </TableCell>
                    <TableCell>
                      <Trans>Body</Trans>
                    </TableCell>
                    <TableCell>
                      <Trans>Date</Trans>
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
              <h3 className="mb-1">
                <Trans>Edit Message</Trans>
              </h3>
              <div className="d-flex flex-column">
                <label>
                  <Trans>Subject</Trans>
                </label>
                <input
                  onChange={handleChangeEdit}
                  type="text"
                  name="subject"
                  value={editFormData.subject}
                  required
                />
              </div>
              <div className="d-flex flex-column">
                <label>
                  <Trans>Message body</Trans>
                </label>
                <textarea
                  onChange={handleChangeEdit}
                  value={editFormData.body}
                  name="body"
                  required
                />
              </div>
              <button type="submit" className="w-100 save-btn mt-4">
                <Trans>Send</Trans>
              </button>
            </form>
          </Modal>
        </>
      )}
      <Link to="/message/new">
        <button className="save-btn mt-4">
          <Trans>Send message</Trans>
        </button>
      </Link>
    </div>
  );
}

export default MessageList;
