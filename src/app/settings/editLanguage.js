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
import "./itemClassLang.scss";
import "./itemType.scss";
import "./editLang.scss";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
/**
 * edit language pages
 * 
 * @returns DOMELEMNT
 */
function EditLanguage() {
  /**
   * define languagess we supported
   */
  const languages = [
    { label: "English", value: "en" },
    { label: "Français", value: "fr" },
    { label: "عربي", value: "ar" },
    { label: "Española", value: "es" },
    { label: "Pусский", value: "ru" },
    { label: "украї́нська", value: "uk" },
    { label: "Chinese", value: "ch" },
    { label: "Other", value: "ot" },
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
  /**
   * 
   * @param {*} query query fo rget all data from serve
   * ge language words and translations 
   */
  function getData(query) {
    LanguageService.getTranslations()
      .then((res) => {
        let sum = 0
        let data = res.data
        for (let i = 0; i < data.length; i++) {
          if(data[i].language === selectedLanguage){
          sum += data[i].words
          }
        }
        console.log(sum)
        setPageNum(Math.ceil(sum / 20));
        setIsLoading(false);
      })
      .catch((err) => {
                toast.error(<Trans>There is a problem loading data</Trans>);

        setIsLoading(false);
      });
    LanguageService.getTranslationsByQuery(query)
      .then((res) => {
        setTranslations(res.data.words);
        setIsLoading(false);
      })
      .catch((err) => {
                toast.error(<Trans>There is a problem loading data</Trans>);

        setIsLoading(false);
      });
  }
/**
 * useeffect for gat data with paginations
 */
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
            toast.error(<Trans>Please fill all the fields</Trans>);

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
                    toast.error(<Trans>There is a problem sending data</Trans>);

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
            toast.error(<Trans>Please fill all the fields</Trans>);

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
                    toast.error(<Trans>There is a problem sending data</Trans>);

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
        <Trans>Language settings</Trans>
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
                <Trans>Filter</Trans>
              </button>
            </div>
          </div>
          <div>
            <SharedTable>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Trans>Clause</Trans>
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
                              disabled
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
                <div className="col-md-3 mt-4 d-flex justify-content-center align-items-center">
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
