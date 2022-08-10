import React, { Component } from "react";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import bsCustomFileInput from "bs-custom-file-input";
import UserService from "../services/user.service";
import { Toast } from "react-bootstrap";
export class Country extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      levels: 4,
      validated: false,
      CountryName: "",
      CountryCode: "",
      Currency: "",
      logo: null,
      slogo: null,
      growthRate:0,
      mainlocation: "",
      enableHR: false,
      enableMaintaining: false,
      targetpopulation: "General population",
      requiredcapacities: true,
      user: JSON.parse(localStorage.getItem("user")),
      country: JSON.parse(localStorage.getItem("country")),
      put: false,
      snackopen: false,
      type: "success",
    };
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

  handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    console.log(form);
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      console.log("invalid");
    } else {
      this.setState({ validated: true });
      let formData = new FormData();
      formData.append("country", this.state.CountryName);
      formData.append("codecountry", this.state.CountryCode);
      formData.append("currency", this.state.Currency);
      formData.append("levels", this.state.levels);
      console.log(typeof this.state.logo);
      if (this.state.logo !== null && typeof this.state.logo !== "string") {
        formData.append("logo", this.state.logo);
      }
      if (this.state.slogo !== null && typeof this.state.slogo !== "string") {
        formData.append("secondLogo", this.state.slogo);
      }

      formData.append("poptarget", this.state.targetpopulation);
      formData.append("poprate", this.state.growthRate);
      formData.append("havehr", this.state.enableHR);
      formData.append("mainlocation", this.state.mainlocation);
      formData.append("logo2", this.state.logo2);
      formData.append("usingtool", this.state.requiredcapacities);
      formData.append("usingmaintenance", this.state.enableMaintaining);

      if (this.state.user.admin && this.state.country !== []) {
        formData.append("id", this.state.country.id);
        console.log(this.state.targetpopulation);
        
        UserService.editcountry(formData)
          .then((res) => {
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
              logo2: country.logo2,
              requiredcapacities: country.usingtool,
              enableMaintaining: country.usingmaintenance,
            });
            this.alerthandle("Country changed successfully", "success");
          })
          .catch((err) => {
            // console.log(formData)
            // console.log(err)
            this.alerthandle("Country changed unsuccessfully", "error");
          });
      } else {
        UserService.addcountry(formData)
          .then((res) => {
            this.alerthandle("Country added successfully", "success");
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
              logo2: country.logo2,
              requiredcapacities: country.usingtool,
              enableMaintaining: country.usingmaintenance,
            });
          })
          .catch((err) => {
            // console.log(err)
            this.alerthandle("Country added unsuccessfully", "error");
          });
      }
    }
  };
  countryvalidator = () => {
    var hasNumber = /\d/;
    if (this.state.CountryCode.length === 0) {
      return true;
    }
    if (this.state.CountryCode.length > 3) {
      return false;
    }
    if (this.state.CountryCode.length < 3) {
      return false;
    }
    if (hasNumber.test(this.state.CountryCode)) {
      return false;
    }
    return true;
  };
  handleClosesnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ snackopen: false });
  };
  ccodevalid = () => {
    if (this.state.CountryCode.length === 0) {
      return false;
    }
    if (this.state.CountryCode.length === 3) {
      return true;
    }
  };
  cv = () => {
    if (this.state.CountryName.length > 1) {
      return true;
    }
    return false;
  };
  CurrencyValidator = () => {
    if (this.state.Currency.length < 4) {
      return true;
    }
    return false;
  };
  CV = () => {
    if (this.state.Currency.length > 0) {
      return true;
    }
    return false;
  };

  componentDidMount() {
    // bsCustomFileInput.init()
    const user = JSON.parse(localStorage.getItem("user"));
    const country = JSON.parse(localStorage.getItem("country"));
    console.log(country);
    console.log(typeof country.logo);
    if (country !== [] && country !== null) {
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
        logo2: country.logo2,
        requiredcapacities: country.usingtool,
        enableMaintaining: country.usingmaintenance,
      });
    }
    console.log(user);
    this.setState({ user: user, country: country });
  }
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Settings </h3>
        </div>
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Add Country</h4>
                <Form
                  noValidate
                  validated={this.state.validated}
                  onSubmit={this.handleSubmit}
                  className="form-sample"
                >
                  <h3 className=" card-description text-bold">
                    {" "}
                    Country info{" "}
                  </h3>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label control-label control-label">
                          Country
                        </label>
                        <div className="col-sm-9">
                          <Form.Control
                            disabled={!this.state.user.admin}
                            isValid={this.cv()}
                            value={this.state.CountryName}
                            onChange={(e) => {
                              console.log(e);
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
                          Country code
                        </label>
                        <div className="col-sm-9">
                          <Form.Control
                            disabled={!this.state.user.admin}
                            required
                            isInvalid={!this.countryvalidator()}
                            isValid={this.ccodevalid()}
                            value={this.state.CountryCode}
                            onChange={(e) => {
                              const code = e.target.value;
                              code.toString().toUpperCase();
                              this.setState({ CountryCode: code });
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
                          Currency
                        </label>
                        <div className="col-sm-9">
                          <div className="input-group">
                            <Form.Control
                              required
                              disabled={!this.state.user.admin}
                              isInvalid={!this.CurrencyValidator()}
                              isValid={this.CV()}
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
                          Allow levels
                        </label>
                        <div
                          style={{ marginTop: "2.5%" }}
                          className="col-sm-9 "
                        >
                          <Form.Control
                            disabled={!this.state.user.admin}
                            required
                            onChange={(e) => {
                              this.setState({ levels: e.target.value });
                            }}
                            type="range"
                            min="1"
                            max="8"
                            step="1"
                            defaultValue={4}
                          />

                          <label className="col-sm-3 col-form-label  ">
                            value : {this.state.levels}{" "}
                          </label>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label ">
                          logo{" "}
                        </label>
                        <div className="col-sm-9">
                          <div className="custom-file ">
                            <Form.Control
                              onChange={(e) => {
                                this.setState({ logo: e.target.files[0] });
                              }}
                              disabled={!this.state.user.admin}
                              type="file"
                              className="form-control visibility-hidden"
                              id="customFileLang"
                              lang="es"
                            />
                            <label
                              className="custom-file-label"
                              htmlFor="customFileLang"
                            >
                              {this.state.logo !== null
                                ? this.state.logo.name
                                : "Upload image"}

                              {typeof this.state.logo === "string"
                                ? this.state.logo.split("/")[2]
                                : ""}
                            </label>
                          </div>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label ">
                          second logo{" "}
                        </label>
                        <div className="col-sm-9">
                          <div className="custom-file ">
                            <Form.Control
                              onChange={(e) => {
                                this.setState({ slogo: e.target.files[0] });
                              }}
                              disabled={!this.state.user.admin}
                              type="file"
                              className="form-control visibility-hidden"
                              id="customFileLang1"
                              lang="es"
                            />
                            <label
                              className="custom-file-label"
                              htmlFor="customFileLang1"
                            >
                              {this.state.slogo !== null
                                ? this.state.slogo.name
                                : "Upload image"}
                              {typeof this.state.slogo === "string"
                                ? this.state.slogo.split("/")[2]
                                : ""}
                            </label>
                          </div>
                        </div>
                      </Form.Group>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 ">
                      <Form.Group className=" row  ">
                        <label className="col-sm-3 col-form-label control-label">
                          Annual Population Growth Rate
                        </label>
                        <div className="col-sm-9">
                          <div className="input-group ">
                            <Form.Control
                              disabled={!this.state.user.admin}
                              required
                              value={this.state.growthRate}
                              onChange={(e) => {
                                this.setState({ growthRate:e.target.value });
                              }}
                              type="number"
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
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label ">
                          Main Location
                        </label>
                        <div className="col-sm-9">
                          <Form.Control
                            disabled={!this.state.user.admin}
                            value={this.state.mainlocation}
                            onChange={(e) => {
                              this.setState({ mainlocation: e.target.value });
                            }}
                            type="text"
                          />
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-5 col-form-label">
                          Enable HR
                        </label>
                        <div className="col-sm-7">
                          <Form.Check
                            disabled={!this.state.user.admin}
                            onChange={(e) => {
                              this.setState({ enableHR: e.target.value });
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
                          Enable Maintenance
                        </label>
                        <div className="col-sm-7">
                          <Form.Check
                            disabled={!this.state.user.admin}
                            onChange={(e) => {
                              this.setState({
                                enableMaintaining: e.target.value,
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
                          Target Population
                        </label>
                        <div className="col-sm-9">
                          <Form.Control
                            required
                            disabled={!this.state.user.admin}
                            onChange={(e) => {
                              this.setState({
                                targetpopulation: e.target.value,
                              });
                            }}
                            className="form-select"
                            as="select"
                          >
                            <option value="General population">
                              General population
                            </option>
                            <option value="Under-1 Population">
                              Under-1 Population
                            </option>
                          </Form.Control>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label ">
                          Require Capacity
                        </label>
                        <div className="col-sm-9">
                          <Form.Control
                            disabled={!this.state.user.admin}
                            onChange={(e) => {
                              this.setState({
                                requiredcapacities: e.target.value,
                              });
                            }}
                            className="form-select"
                            as="select"
                          >
                            <option value="true">
                              Estimate required capacity (in MS Excel)
                            </option>
                            <option value="false">
                              Enter required capacity manually
                            </option>
                          </Form.Control>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  {this.state.country !== [] &&
                  this.state.country !== undefined &&
                  this.state.user.admin ? (
                    <button type="submit" className="btn btn-primary mr-2">
                      Save
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled
                      className="btn btn-primary mr-2"
                    >
                      Save
                    </button>
                  )}
                </Form>
              </div>
            </div>
          </div>
        </div>
        <Toast
          style={{
            position: "absolute",
            top: "120%",
            right: "0",
            backgroundColor:
              this.state.type == "success" ? "#03A10A" : "#F8D7DA",
            color: "#000",
          }}
          onClose={(e) => {
            this.handleClosesnack(e);
          }}
          show={this.state.snackopen}
          delay={3000}
          autohide
          className="d-inline-block m-1"
          bg={this.state.type}
        >
          <Toast.Body>{this.state.content}</Toast.Body>
        </Toast>
      </div>
    );
  }
}

export default Country;
