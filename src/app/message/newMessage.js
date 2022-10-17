import { useEffect, useState } from "react";
import MessageService from "../services/message.service";
import toast from "react-hot-toast";
import Spinner from "../shared/Spinner";
import { MultiSelect } from "react-multi-select-component";
import "../styles/inputs.scss";
import "./message.scss";
import "../settings/itemClass.scss";
import { Trans } from "react-i18next";

function NewMessage() {
  const [isLoading, setIsLoading] = useState(true);
  const [facilities, setFacilities] = useState([]);
  const [formData, setFormData] = useState();
  const [selected, setSelected] = useState([]);

  function getFacilities() {
    MessageService.getfacilities()
      .then((res) => {
        const data = res.data;
        setFacilities(data);
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

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (selected.length === 0) {
      toast.error(<Trans>Please select at least one facility</Trans>);
    } else {
      const { subject, body } = formData;
      const data = {
        subject,
        body,
        reciever: selected.map((item) => item.value),
      };
      MessageService.sendMessage(data)
        .then((res) => {
          toast.success(<Trans>Message sent successfully</Trans>);
          setFormData({});
          setSelected([]);
        })
        .catch((err) => {
          toast.error(<Trans>There is a problem sending message</Trans>);
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
            <h3 className="mb-1 page-title">
              <Trans>Send message</Trans>
            </h3>
            <div className="d-flex flex-column">
              <label>
                <Trans>Receivers</Trans>
              </label>
              <MultiSelect
                options={facilities.map((item) => {
                  return { label: item.name, value: item.id };
                })}
                value={selected}
                onChange={setSelected}
                labelledBy="Select"
                className="multi-select"
              />
            </div>
            <div className="d-flex flex-column">
              <label>
                <Trans>Subject</Trans>
              </label>
              <input
                onChange={handleChange}
                type="text"
                name="subject"
                required
              />
            </div>
            <div className="d-flex flex-column">
              <label>
                <Trans>Message body</Trans>
              </label>
              <textarea onChange={handleChange} name="body" required />
            </div>
            <button type="submit" className="w-100 save-btn mt-4">
              <Trans>Send</Trans>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
export default NewMessage;
