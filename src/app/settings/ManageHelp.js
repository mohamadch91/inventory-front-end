import { Form } from "react-bootstrap";
import HelpService from "../services/help.service";
import { useQuery } from "react-query";
import Spinner from "../shared/Spinner";
import { useEffect, useState } from "react";
import { languages, pages } from "../constants/help";

function MangeHelp() {
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [selectedPage, setSelectedPage] = useState(pages[0]);
  const [helpContent, setHelpContent] = useState("");

  const {
    data: helpData,
    isLoading: isLoading,
    refetch: refetchHelp,
  } = useQuery(
    ["help", selectedLang, selectedPage],
    async () => {
      const res = await HelpService.getHelpContent(selectedLang, selectedPage);
      return res.data.length > 0 ? res.data[0] : {};
    },
    {
      enabled: false,
      staleTime: Infinity,
      onSuccess(data) {
        setHelpContent(data.abr);
      },
    }
  );

  useEffect(() => {
    refetchHelp();
  }, []);

  const onSaveHandler = async (e) => {
    e.preventDefault();
    const payload = {
      lang: selectedLang,
      page: selectedPage,
      abr: helpContent,
    };
    if (helpData.id) {
      payload.id = helpData.id;
    }
    const res = await (helpData.id
      ? HelpService.putHelpContent(payload)
      : HelpService.postHelpContent(payload));
  };

  return (
    <div>
      <h3 className="page-title mb-3">Manage help</h3>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="mt-3">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-12 col-lg-5">
                  <Form.Group className="row">
                    <label className="col-sm-12">Language</label>
                    <div className="col-sm-12">
                      <Form.Control
                        onChange={(e) =>
                          setSelectedLang(languages[e.target.value])
                        }
                        className="form-select"
                        as="select"
                        value={languages.indexOf(selectedLang)}
                      >
                        {languages.map((lang, index) => (
                          <option value={index}>{lang}</option>
                        ))}
                      </Form.Control>
                    </div>
                  </Form.Group>
                </div>
                <div className="col-sm-12 col-lg-5">
                  <Form.Group className="row">
                    <label className="col-sm-12">Page</label>
                    <div className="col-sm-12">
                      <Form.Control
                        onChange={(e) => setSelectedPage(pages[e.target.value])}
                        className="form-select"
                        as="select"
                        value={pages.indexOf(selectedPage)}
                      >
                        {pages.map((page, index) => (
                          <option value={index}>{page}</option>
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
                    Filter
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-body pb-3">
              <form onSubmit={onSaveHandler}>
                <div className="row">
                  <textarea
                    placeholder="help content..."
                    value={helpContent}
                    rows={10}
                    onChange={(e) => setHelpContent(e.target.value)}
                  />
                </div>
                <div className="row">
                  <button
                    className="btn btn-primary mt-3"
                    style={{ marginLeft: "auto", width: "72px" }}
                    type="submit"
                  >
                    Save
                  </button>
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
