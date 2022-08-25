import {
  Pagination,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import CloseIcon from "../shared/CloseIcon";
import EditIcon from "../shared/EditIcon";
import SharedTable from "../shared/SharedTable";
import toast from "react-hot-toast";
import Spinner from "../shared/Spinner";
import LanguageService from "../services/language.service";
import "../styles/table.scss";
import "../styles/inputs.scss";
import "../styles/hr.scss";
import "./itemClass.scss";
import "./itemType.scss";
import "./editLang.scss";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
function EditLanguage() {
  const languages = [
    { label: "English", value: "en" },
    { label: "Français", value: "fr" },
    { label: "العربي", value: "ar" },
    { label: "فارسی", value: "fa" },
    { label: "Española", value: "es" },
    { label: "Pусский", value: "ru" },
  ];

  const [editFormData, setEditFormData] = useState({});
  const [addRowFormData, setAddRowFormData] = useState({
    word: "",
    translate: "",
    language: "en",
  });
  const [editableRowId, setEditableRowId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [translations, setTranslations] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [pageNum, setPageNum] = useState(1);
  const [page, setPage] = useState(1);
  const [searchParam, setSearchParam] = useState("");
  const { t } = useTranslation();

  function getData(query) {
    LanguageService.getTranslations()
      .then((res) => {
        let sum = res.data.reduce((acc, curr) => {
          return acc + curr.words;
        }, 0);
        setPageNum(Math.ceil(sum / 20));
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error("There is a problem loading data");
        setIsLoading(false);
      });
    LanguageService.getTranslationsByQuery(query)
      .then((res) => {
        setTranslations(res.data.words);
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error("There is a problem loading data");
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getData("?pnum=1&name=" + selectedLanguage);
  }, []);

  function handleEdit(i) {
    const formData = translations.find((item) => item.id === i.id);
    setEditFormData(formData);
    setEditableRowId(i.id);
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
      return editFormData[key] !== "" && editFormData[key] !== null;
    });
    if (!isValid) {
      toast.error("Please fill all the fields");
    } else {
      setIsLoading(true);
      let formToPut = editFormData;
      LanguageService.putTranslations(formToPut)
        .then((res) => {
          getData(
            `?pnum=${page}&name=${selectedLanguage}${
              searchParam.length > 0 ? "&search=" + searchParam : ""
            }`
          );
        })
        .catch((err) => {
          toast.error("There is a problem sending data");
          setIsLoading(false);
        });
      setEditableRowId(null);
      setEditFormData({});
    }
  }

  function handleSubmitNew(e) {
    e.preventDefault();
    const isValid = Object.keys(addRowFormData).every((key) => {
      return addRowFormData[key] !== "" && addRowFormData[key] !== null;
    });
    if (!isValid) {
      toast.error("Please fill all the fields");
    } else {
      setIsLoading(true);
      let formToPost = (({ language, word, translate }) => ({
        language,
        word,
        translate,
      }))(addRowFormData);
      LanguageService.postTranslations(formToPost)
        .then((res) => {
          getData(
            `?pnum=${page}&name=${selectedLanguage}${
              searchParam.length > 0 ? "&search=" + searchParam : ""
            }`
          );
        })
        .catch((err) => {
          toast.error("There is a problem sending data");
          setIsLoading(false);
        });
      setAddRowFormData({
        ...addRowFormData,
        word: "",
        translate: "",
      });
    }
  }

  function handlePage(e, p) {
    setIsLoading(true);
    setPage(p);
    getData(
      `?pnum=${p}&name=${selectedLanguage}${
        searchParam.length > 0 ? "&search=" + searchParam : ""
      }`
    );
  }

  return (
    <div className="item-class-page">
      <h3 className="page-title mb-3">
        <Trans>Language setting</Trans>
      </h3>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="row mb-4 mt-4">
            <div className="col-md-2 d-flex align-items-center">
              <h4 className="page-title">
                <Trans>Language</Trans>
              </h4>
            </div>
            <div className="col-md-2 d-flex">
              <select
                name="language"
                className="w-100"
                onChange={(e) => {
                  setSelectedLanguage(e.target.value);
                }}
                value={selectedLanguage}
              >
                {languages.map((lang, index) => (
                  <option key={lang.value} value={lang.value}>
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-2 d-flex align-items-center justify-content-end">
              <h4 className="page-title">
                <Trans>Search</Trans>
              </h4>
            </div>
            <div className="col-md-4 d-flex">
              <input
                type="text"
                name="search"
                value={searchParam}
                onChange={(e) => setSearchParam(e.target.value)}
              ></input>
            </div>
            <div className="col-md-2 d-flex align-items-center">
              <button
                className="save-btn w-100"
                onClick={() => {
                  setIsLoading(true);
                  getData(
                    `?pnum=${page}&name=${selectedLanguage}${
                      "&search=" + searchParam
                    }`
                  );
                }}
              >
                Filter
              </button>
            </div>
          </div>
          <div>
            <SharedTable>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Trans>Cluase</Trans>
                  </TableCell>
                  <TableCell>
                    <Trans>Value</Trans>
                  </TableCell>
                  <TableCell>
                    <Trans>Edit</Trans>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {translations &&
                  translations.map((item) => (
                    <>
                      {editableRowId !== item.id ? (
                        <TableRow>
                          <TableCell>{item.word}</TableCell>
                          <TableCell>{item.translate}</TableCell>
                          <TableCell>
                            <button
                              className="edit-btn"
                              onClick={() => handleEdit(item)}
                            >
                              <EditIcon />
                            </button>
                          </TableCell>
                        </TableRow>
                      ) : (
                        <TableRow>
                          <TableCell>
                            <input
                              name="word"
                              type="text"
                              onChange={handleChangeEdit}
                              value={editFormData?.word}
                            ></input>
                          </TableCell>
                          <TableCell>
                            <input
                              name="translate"
                              type="text"
                              onChange={handleChangeEdit}
                              value={editFormData?.translate}
                              required
                            ></input>
                          </TableCell>
                          <TableCell>
                            <button
                              className="save-btn"
                              onClick={handleSubmitEdit}
                            >
                              <Trans>Save</Trans>
                            </button>
                            <button
                              className="close-btn"
                              onClick={() => setEditableRowId(null)}
                            >
                              <CloseIcon />
                            </button>
                          </TableCell>
                        </TableRow>
                      )}
                    </>
                  ))}
              </TableBody>
            </SharedTable>
          </div>
          <div className="mt-4">
            <Pagination
              onChange={handlePage}
              count={pageNum}
              color="primary"
              page={page}
            />
          </div>
          <div className="add-row mt-4 mb-4">
            <form onSubmit={handleSubmitNew}>
              <h3 className="mb-3 mt-3">
                <Trans>Insert translation</Trans>
              </h3>
              <div className="row">
                <div className="col-md-3 flex-column d-flex">
                  <label>
                    <Trans>Clause</Trans>
                  </label>
                  <input
                    name="word"
                    type="text"
                    onChange={handleChangeAdd}
                    value={addRowFormData?.word}
                    required
                  ></input>
                </div>
                <div className="col-md-3 flex-column d-flex">
                  <label>
                    <Trans>Value</Trans>
                  </label>
                  <input
                    name="translate"
                    type="text"
                    onChange={handleChangeAdd}
                    value={addRowFormData?.translate}
                    required
                  ></input>
                </div>
                <div className="col-md-3 flex-column d-flex">
                  <label>
                    <Trans>Language</Trans>
                  </label>
                  <select
                    name="language"
                    onChange={handleChangeAdd}
                    value={addRowFormData?.language}
                  >
                    {languages.map((item, index) => (
                      <option
                        key={item.value}
                        value={item.value}
                        selected={index === 0}
                      >
                        {item.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-3 d-flex justify-content-center align-items-center">
                  <button className="save-btn" type="submit">
                    <Trans>Save</Trans>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

export default EditLanguage;
