import { Form } from "react-bootstrap";
import HelpService from "../services/help.service";
import { useQuery } from "react-query";
import Spinner from "../shared/Spinner";
import { useState } from "react";
import { languages, pages } from "../constants/help";
import API_URL from "../services/APIURL";
import { Translation,Trans } from "react-i18next";

function MangeHelp() {
  const [selectedLang, setSelectedLang] = useState("en");
  const [selectedPage, setSelectedPage] = useState("dashboard");
  const [helpFile, setHelpFile] = useState(null);

  const {
    data: helpData,
    isLoading: isLoading,
    refetch: refetchHelp,
  } = useQuery(["help", selectedLang, selectedPage], async () => {
    const res = await HelpService.getHelpContent(selectedLang, selectedPage);
    return res.data.length > 0 ? res.data[0] : {};
  });

  const onSaveHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("lang", selectedLang);
    formData.append("page", selectedPage);
    formData.append("abr", helpFile);
    if (helpData.id) {
      formData.append("id", helpData.id);
    }
    const res = await (helpData.id
      ? HelpService.putHelpContent(formData)
      : HelpService.postHelpContent(formData));
    refetchHelp();
  };

  return (
    <div>
      <h3 className="page-title mb-3">
        <Trans>Manage HELP</Trans>
      </h3>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="mt-3">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-12 col-lg-5">
                  <Form.Group className="row">
                    <label className="col-sm-12">
                      <Trans>Language</Trans>
                    </label>
                    <div className="col-sm-12">
                      <Form.Control
                        onChange={(e) => setSelectedLang(e.target.value)}
                        className="form-select"
                        as="select"
                        value={selectedLang}
                      >
                        {Object.keys(languages).map((lang) => (
                          <option value={lang} id={lang}>
                            {languages[lang]}
                          </option>
                        ))}
                      </Form.Control>
                    </div>
                  </Form.Group>
                </div>
                <div className="col-sm-12 col-lg-5">
                  <Form.Group className="row">
                    <label className="col-sm-12">
                      <Trans>Page</Trans>
                    </label>
                    <div className="col-sm-12">
                      <Form.Control
                        onChange={(e) => setSelectedPage(e.target.value)}
                        className="form-select"
                        as="select"
                        value={selectedPage}
                      >
                        {Object.keys(pages).map((page) => (
                          <Translation>
                        {(t, { i18n }) => (
                          <option key={page} value={page}>
                            {t( `${pages[page]}`)}
                          </option>
                        )}
                      </Translation>
                          
                        ))}
                      </Form.Control>
                    </div>
                  </Form.Group>
                </div>
                <div className="col-sm-12 col-lg-2">
                  <button
                    className="btn btn-primary w-100 mt-4"
                    onClick={refetchHelp}
                  >
                    <Trans>Filter</Trans>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-body pb-3">
              <form onSubmit={onSaveHandler}>
                <div className="row">
                  <input
                    type="file"
                    onChange={(e) => {
                      e.persist();
                      const value = e.target.files[0];
                      setHelpFile(value);
                    }}
                  />
                </div>
                <div className="row">
                  <button
                    className="btn btn-primary mt-3 "
                    style={{ marginLeft: "auto", width: "100px" }}
                    type="submit"
                  >
                    <Trans>Save</Trans>
                  </button>
                  {helpData?.abr && (
                    <a
                      href={API_URL + helpData.abr}
                      download
                      style={{ width: "fit-content" }}
                    >
                      <button
                        className="btn btn-success mt-3 ml-2"
                        type="button"
                      >
                        <Trans>Download Help</Trans>
                      </button>
                    </a>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MangeHelp;
