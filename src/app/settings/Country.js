import React, { Component } from "react";
import { Form } from "react-bootstrap";
import UserService from "../services/user.service";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./country.css";
import * as XLSX from "xlsx";
import { toast } from "react-hot-toast";
import Map from "./Map";
import { Translation,Trans } from "react-i18next";
import { seperator } from "../helpers/seperator";

import "./country.scss";
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});
/**
 * @component render Country setting pages
 */
export class Country extends Component {
  constructor(props) {
    super(props);
    this.state = {
      levels: 4,
      validated: false,
      CountryName: "",
      CountryCode: "",
      Currency: "",
      logo: null,
      slogo: null,
      growthRate: 0,
      mainlocation: "",
      enableHR: false,
      enableMaintaining: false,
      targetpopulation: "General population",
      requiredcapacities: true,
      excelData: [],
      user: JSON.parse(localStorage.getItem("user")),
      country: JSON.parse(localStorage.getItem("country")),
      put: false,
      snackopen: false,
      type: "success",
      isCountyValid: false,
      isCountyCodeValid: false,
      isCurrencyValid: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleExcelChange = this.handleExcelChange.bind(this);
    this.isCountryValid = this.isCountryValid.bind(this);
    this.isCurrencyValid = this.isCurrencyValid.bind(this);
    this.isCountryCodeValid = this.isCountryCodeValid.bind(this);
    this.handlemapclick = this.handlemapclick.bind(this);
  }
  changestate = (e, state) => {
    this.setState({ [state]: e.target.value });
  };
  alerthandle(message, type) {
    this.setState({ content: message, type: type, snackopen: true });
  }
  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };
/**
 * 
 * @param {event} e
 * set location when clickig on the map 
 */
  handlemapclick(e) {
    let str = "LatLng(" + e.latlng.lat + "," + e.latlng.lng + ")";
    this.setState({ mainlocation: str});
  }
/**
 * 
 * @param {event} event 
 * @returns null
 * when clickng on the save country called
 * check if country exist edit else submit countery
 * also after submiting get country and change localstorage datas
 */
  handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    // check for validations
    if (
      !this.isCountryCodeValid() ||
      !this.isCurrencyValid() ||
      !this.isCountryValid()
    ) {
      this.setState({ validated: false });
      event.preventDefault();
      event.stopPropagation();
      toast.error(<Trans>complete form correctly</Trans>);
      return;
    }
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
            toast.error(<Trans>complete form correctly</Trans>);

    } else {
      this.setState({ validated: true });
      let formData = new FormData();
      /**
       * create new formdata from states
       * form data becouse images
       */
      formData.append("country", this.state.CountryName);
      formData.append("codecountry", this.state.CountryCode);
      formData.append("currency", this.state.Currency);
      formData.append("levels", this.state.levels);
      if (this.state.logo !== null && typeof this.state.logo !== "string") {
        formData.append("logo", this.state.logo);
      }
      if (this.state.slogo !== null && typeof this.state.slogo !== "string") {
        formData.append("secondLogo", this.state.slogo);
      }
      let rate =this.state.growthRate
      rate=rate.replace(seperator(),".")
      rate=parseFloat(rate)
      formData.append("poptarget", this.state.targetpopulation);
      formData.append(
        "poprate",
                  rate
      );
      formData.append("havehr", this.state.enableHR);
      formData.append("mainlocation", this.state.mainlocation);
      formData.append("logo2", this.state.logo2);
      formData.append("usingtool", this.state.requiredcapacities);
      formData.append("usingmaintenance", this.state.enableMaintaining);
      console.log(this.state.country)
      if (this.state.user?.admin && Object.keys(this.state.country).length) {
        formData.append("id", this.state.country.id);
        UserService.editcountry(formData)
          .then((res) => {
            const perviuscountry = JSON.parse(localStorage.getItem("country"));
            localStorage.setItem("country", JSON.stringify(res.data));
            const country = JSON.parse(localStorage.getItem("country"));
            if (country.levels > perviuscountry.levels) {
              for (let i = 0; i < country.levels - perviuscountry.levels; i++) {
                const data = {
                  maxpop: 0,
                  minpop: 0,
                  uppervol: 0,
                  undervol: 0,
                  m25vol: 0,
                  m70vol: 0,
                  m25volnew: 0,
                  m70volnew: 0,
                  uppervolnew: 0,
                  undervolnew: 0,
                  name: "levels" + (perviuscountry.levels + i + 1),
                  dryvol: 0,
                  dryvolnew: 0,
                  country: 1,
                  parent: perviuscountry.levels + i - 1,
                };
                UserService.addlevel(data)
                  .then((res) => {
                    console.log(res);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }
            }
            this.setState({
              CountryName: country.country,
              CountryCode: country.codecountry,
              Currency: country.currency,
              levels: country.levels,
              logo: country.logo,
              slogo: country.secondLogo,
              growthRate: country.poprate,
              targetpopulation: country.poptarget,
              enableHR: country.havehr,
              mainlocation: country.mainlocation,
              requiredcapacities: country.usingtool,
              enableMaintaining: country.usingmaintenance,
            });
            this.alerthandle("Country changed successfully", "success");
            toast.success(<Trans>Country changed successfully</Trans>);
          })
          .catch((err) => {
            this.alerthandle("Country changed unsuccessfully", "error");
            toast.error(<Trans>Country changed unsuccessfully</Trans>);
          });
      } else {
        UserService.addcountry(formData)
          .then((res) => {
            this.alerthandle("Country added successfully", "success");
            toast.success("Country added successfully");
            localStorage.setItem("country", JSON.stringify(res.data));
            const country = JSON.parse(localStorage.getItem("country"));
            for (let i = 0; i < country.levels; i++) {
              const data = {
                maxpop: 0,
                minpop: 0,
                uppervol: 0,
                undervol: 0,
                m25vol: 0,
                m70vol: 0,
                m25volnew: 0,
                m70volnew: 0,
                uppervolnew: 0,
                undervolnew: 0,
                name: "levels" + i,
                dryvol: 0,
                dryvolnew: 0,
                country: 1,
                parent: i === 0 ? null : i - 1,
              };
              UserService.addlevel(data)
                .then((res) => {
                  console.log(res);
                })
                .catch((err) => {
                  console.log(err);
                });
            }
            this.setState({
              CountryName: country.country,
              CountryCode: country.codecountry,
              Currency: country.currency,
              levels: country.levels,
              logo: country.logo,
              slogo: country.secondLogo,
              growthRate: country.poprate,
              targetpopulation: country.poptarget,
              enableHR: country.havehr,
              mainlocation: country.mainlocation,
              requiredcapacities: country.usingtool,
              enableMaintaining: country.usingmaintenance,
            });
          })
          .catch((err) => {
            this.alerthandle("Country added unsuccessfully", "error");
            toast.error("Country added unsuccessfully");
          });
      }
    }
  };
  isCountryCodeValid = () => {
    var hasNumber = /\d/;
    if (this.state.CountryCode?.length === 0) {
      return true;
    }
    if (this.state.CountryCode?.length > 3) {
      return false;
    }
    if (this.state.CountryCode?.length < 3) {
      return false;
    }
    if (hasNumber.test(this.state.CountryCode)) {
      return false;
    }
    return true;
  };
  isCountryValid = () => {
    if (
      this.state.CountryName?.length > 1 &&
      !/\d/.test(this.state.CountryName)
    ) {
      return true;
    }
    return false;
  };
  isCurrencyValid = () => {
    if (
      this.state.Currency?.length > 0 &&
      this.state.Currency?.length < 4 &&
      !/\d/.test(this.state.Currency)
    ) {
      return true;
    }
    return false;
  };

  handleExcelChange(e) {
    const [file] = e.target.files;
    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
      this.setState({ excelData: data });
    };
    reader.readAsBinaryString(file);
  }
  handleClosesnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ snackopen: false });
  };

  componentDidMount() {
    // bsCustomFileInput.init()
    const user = JSON.parse(localStorage.getItem("user"));
    const country = JSON.parse(localStorage.getItem("country"));

    if (Object.keys(country).length !== 0) {
      this.setState({
        CountryName: country.country,
        CountryCode: country.codecountry,
        Currency: country.currency,
        levels: country.levels,
        logo: country.logo,
        slogo: country.secondLogo,
        growthRate: country.poprate,
        targetpopulation: country.poptarget,
        enableHR: country.havehr,
        mainlocation: country.mainlocation,
        requiredcapacities: country.usingtool,
        enableMaintaining: country.usingmaintenance,
        country: country,
      });
    }

    this.setState({ user: user });
  }
  render() {
    return (
      <div>
        <div className="page-header">
          <h1 className="page-title">
            {" "}
            <Trans>Settings</Trans>{" "}
          </h1>
        </div>
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">
                  <Trans>Add Country</Trans>
                </h4>
                <Form
                  noValidate
                  validated={this.state.validated}
                  onSubmit={this.handleSubmit}
                  className="form-sample"
                >
                  <h3 className=" card-description text-bold">
                    {" "}
                    <Trans>Country</Trans> <Trans>Information</Trans>
                  </h3>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label control-label control-label">
                          <Trans>Country</Trans>
                        </label>
                        <div className="col-sm-9">
                          <Form.Control
                            isValid={this.isCountryValid()}
                            isInvalid={!this.isCountryValid()}
                            value={this.state.CountryName}
                            onChange={(e) => {
                              this.setState({ CountryName: e.target.value });
                            }}
                            required
                            placeholder="Example: USA"
                            type="text"
                          />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label control-label">
                          <Trans>Country</Trans> <Trans>code</Trans>
                        </label>
                        <div className="col-sm-9">
                          <Form.Control
                            disabled={true}
                            required
                            isInvalid={!this.isCountryCodeValid()}
                            isValid={this.isCountryCodeValid()}
                            value={this.state.CountryCode}
                            onChange={(e) => {
                              const code = e.target.value;
                              const x = code.toString().toUpperCase();
                              this.setState({ CountryCode: x });
                            }}
                            placeholder="Example: ABC"
                            type="text"
                          />
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label control-label">
                          <Trans>Currency</Trans>
                        </label>
                        <div className="col-sm-9">
                          <div className="input-group">
                            <Form.Control
                              required
                              disabled={!this.state.user?.admin}
                              isInvalid={!this.isCurrencyValid()}
                              isValid={this.isCurrencyValid()}
                              value={this.state.Currency}
                              onChange={(e) => {
                                this.setState({ Currency: e.target.value });
                              }}
                              placeholder="Example: $"
                              type="text"
                              className="form-control"
                              aria-label="Amount (to the nearest dollar)"
                            />
                          </div>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label control-label">
                          <Trans>Allowed levels</Trans>
                        </label>
                        <div
                          style={{ marginTop: "2.5%" }}
                          className="col-sm-9 "
                        >
                          <Form.Control
                            disabled={!this.state.user?.admin}
                            required
                            onChange={(e) => {
                              this.setState({ levels: e.target.value });
                            }}
                            type="range"
                            min="1"
                            max="8"
                            step="1"
                            value={this.state.levels}
                          />

                          <label className="col-sm-3 col-form-label  ">
                            <Trans>Value</Trans>: {this.state.levels}{" "}
                          </label>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label ">
                          <Trans>
                            Logo 1: jpg.jpeg.png, aspect ration 16:4
                          </Trans>
                        </label>
                        <div className="col-sm-9 mt-3">
                          <div className="custom-file ">
                            <Form.Control
                              onChange={(e) => {
                                this.setState({ logo: e.target.files[0] });
                              }}
                              disabled={!this.state.user?.admin}
                              type="file"
                              className="form-control visibility-hidden"
                              id="customFileLang"
                              lang="es"
                              accept="image/png, image/jpeg, image/jpg"
                            />
                            <Translation>
                              {(t, { i18n }) => (
                                <label
                                  className="custom-file-label"
                                  htmlFor="customFileLang"
                                  datacustomattr={t("Browse")}
                                >
                                  {this.state.logo !== null ? (
                                    this.state.logo.name
                                  ) : (
                                    <Trans>Upload image</Trans>
                                  )}

                                  {typeof this.state.logo === "string"
                                    ? this.state.logo.split("/")[2]
                                    : ""}
                                </label>
                              )}
                            </Translation>
                          </div>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label ">
                          <Trans>Logo 2: jpg.jpeg.png, aspect ration 1:1</Trans>
                        </label>
                        <div className="col-sm-9 mt-3">
                          <div className="custom-file ">
                            <Form.Control
                              onChange={(e) => {
                                this.setState({ slogo: e.target.files[0] });
                              }}
                              disabled={!this.state.user?.admin}
                              type="file"
                              className="form-control visibility-hidden"
                              id="customFileLang1"
                              lang="es"
                              accept="image/png, image/jpeg, image/jpg"
                            />
                            <Translation>
                              {(t, { i18n }) => (
                                <label
                                  className="custom-file-label"
                                  htmlFor="customFileLang1"
                                  datacustomattr={t("Browse")}
                                >
                                  {this.state.slogo !== null ? (
                                    this.state.slogo.name
                                  ) : (
                                    <Trans>Upload image</Trans>
                                  )}
                                  {typeof this.state.slogo === "string"
                                    ? this.state.slogo.split("/")[2]
                                    : ""}
                                </label>
                              )}
                            </Translation>
                          </div>
                        </div>
                      </Form.Group>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 ">
                      <Form.Group className=" row  ">
                        <label className="col-sm-3 col-form-label control-label">
                          <Trans>Annual population growth rate (%)</Trans>
                        </label>
                        <div className="col-sm-9">
                          <div className="input-group ">
                            <Form.Control
                              disabled={!this.state.user?.admin}
                              required
                              isValid={true}
                              value={this.state.growthRate
                                .toString()
                                .replace(".", seperator())}
                              onKeyPress={(e) => {
                                e.persist();
                                const numericKeys="0123456789"+seperator()
                                if (numericKeys.indexOf(e.key)===-1){
                                   e.preventDefault();
                                   return;
                                }
                                let number = e.target.value.replace(
                                  seperator(),
                                  "."
                                );
                                const flag = number.split(".").length;
                                if (flag > 1) {
                                  const num = number.split(".")[0];
                                  const floatpoint = number
                                    .split(".")[1]
                                    .slice(0, 2);
                                  number = num + "." + floatpoint;
                                }

                                this.setState({
                                  growthRate: number.replace(".", seperator()),
                                });
                                
                              }}
                              onChange={(e) => {
                                let number = e.target.value.replace(
                                  seperator(),
                                  "."
                                );
                                const flag = number.split(".").length;
                                if (flag > 1) {
                                  const num = number.split(".")[0];
                                  const floatpoint = number
                                    .split(".")[1]
                                    .slice(0, 2);
                                  number = num + "." + floatpoint;
                                }

                                this.setState({
                                  growthRate: number.replace(".", seperator()),
                                });
                              }}
                              type="string"
                              className="form-control"
                              aria-label="Amount (to the nearest dollar)"
                            />
                            <div className="input-group-append h-75 pb-3">
                              <span className="input-group-text">%</span>
                            </div>
                          </div>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-5 col-form-label">
                          <Trans>Enable HR data</Trans>
                        </label>
                        <div className="col-sm-7">
                          <Form.Check
                            disabled={!this.state.user?.admin}
                            checked={this.state.enableHR}
                            value={this.state.enableHR}
                            onChange={(e) => {
                              // e.preventDefault()
                              this.setState({ enableHR: !this.state.enableHR });
                            }}
                            type="switch"
                            label=""
                            id="disabled-custom-switch"
                          />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-5 col-form-label">
                          <Trans>Enable maintenance functions</Trans>
                        </label>
                        <div className="col-sm-7">
                          <Form.Check
                            checked={this.state.enableMaintaining}
                            disabled={!this.state.user?.admin}
                            onChange={(e) => {
                              this.setState({
                                enableMaintaining:
                                  !this.state.enableMaintaining,
                              });
                            }}
                            type="switch"
                            label=""
                            id="disabled-custom"
                          />
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label control-label">
                          <Trans>Target populations:</Trans>
                        </label>
                        <div className="col-sm-9">
                          <Form.Control
                            required
                            disabled={!this.state.user?.admin}
                            onChange={(e) => {
                              this.setState({
                                targetpopulation: e.target.value,
                              });
                            }}
                            value={this.state.targetpopulation}
                            className="form-select"
                            as="select"
                          >
                            <Translation>
                              {(t, { i18n }) => (
                                <option value="General population">
                                  {t("General populations")}
                                </option>
                              )}
                            </Translation>
                            <Translation>
                              {(t, { i18n }) => (
                                <option value="Under-1 Population">
                                  {t("Under-1 populations")}
                                </option>
                              )}
                            </Translation>
                          </Form.Control>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label control-label">
                          <Trans>Required capacity</Trans>
                        </label>
                        <div className="col-sm-9">
                          <Form.Control
                            required
                            disabled={!this.state.user?.admin}
                            onChange={(e) => {
                              const value =
                                e.target.value === "true" ? true : false;
                              this.setState({
                                requiredcapacities: value,
                              });
                            }}
                            value={this.state.requiredcapacities}
                            className="form-select"
                            as="select"
                          >
                            <Translation>
                              {(t, { i18n }) => (
                                <option
                                  value={true}
                                  key="Estimate required capacity (in MS Excel)"
                                >
                                  {t(
                                    "Import from Assistant Tool (in MS Excel)"
                                  )}
                                </option>
                              )}
                            </Translation>

                            <Translation>
                              {(t, { i18n }) => (
                                <option value={false}>
                                  {t("Enter manually")}
                                </option>
                              )}
                            </Translation>
                          </Form.Control>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <Form.Group className="row">
                    <div className="col-md-6">
                      <label className="col-sm-3 col-form-label ">
                        <Trans>Main location</Trans>
                      </label>
                      <div className="map">
                        <Map
                          loca={this.state.mainlocation}
                          handleChange={this.handlemapclick}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="mt-5">
                        <div className="col-sm-12">
                          <Form.Control
                            disabled
                            value={this.state.mainlocation}
                            onChange={(e) => {
                              this.setState({ mainlocation: e.target.value });
                            }}
                            type="text"
                          />
                        </div>
                      </Form.Group>
                    </div>
                  </Form.Group>

                  {this.state.country !== [] &&
                  this.state.country !== undefined &&
                  this.state.user?.admin ? (
                    <button type="submit" className="btn w-25 btn-primary mr-2">
                      <Trans>Save</Trans>
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled
                      className="btn w-25 btn-primary mr-2"
                    >
                      <Trans>Save</Trans>
                    </button>
                  )}
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Country;
