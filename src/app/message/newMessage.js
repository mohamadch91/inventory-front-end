import { useEffect, useState } from "react";
import HRService from "../services/hr.service";
import MessageService from "../services/message.service";
import toast from "react-hot-toast";
import Spinner from "../shared/Spinner";
import { MultiSelect } from "react-multi-select-component";
import "../styles/inputs.scss";
import "./message.scss";
import "../settings/itemClass.scss";

function NewMessage() {
  const [isLoading, setIsLoading] = useState(true);
  const [facilities, setFacilities] = useState([]);
  const [formData, setFormData] = useState();
  const [selected, setSelected] = useState([]);

  function getFacilities() {
    HRService.getFacilities()
      .then((res) => {
        const data = res.data;
        setFacilities(data);
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

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (selected.length === 0) {
      toast.error("Please select at least one facility");
    } else {
      const { subject, body } = formData;
      const data = {
        subject,
        body,
        reciever: selected.map((item) => item.value),
      };
      MessageService.sendMessage(data)
        .then((res) => {
          toast.success("Message sent successfully");
          setFormData({});
          setSelected([]);
        })
        .catch((err) => {
          toast.error("There is a problem sending message");
        });
    }
  }

  return (
    <div className="new-message-page">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="container">
          <form onSubmit={handleSubmit}>
            <h3 className="mb-1">Send Message</h3>
            <div className="d-flex flex-column">
              <label>Receivers</label>
              <MultiSelect
                options={facilities.map((item) => {
                  return { label: item.name, value: item.id };
                })}
                value={selected}
                onChange={setSelected}
                labelledBy="Select"
              />
            </div>
            <div className="d-flex flex-column">
              <label>Subject</label>
              <input
                onChange={handleChange}
                type="text"
                name="subject"
                required
              />
            </div>
            <div className="d-flex flex-column">
              <label>Message Body</label>
              <textarea onChange={handleChange} name="body" required />
            </div>
            <button type="submit" className="w-100 save-btn mt-4">
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
export default NewMessage;
