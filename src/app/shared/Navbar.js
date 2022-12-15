import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { HashLink as Links } from "react-router-hash-link";
import i18n from "../../i18n";
import eventBus from "../common/EventBus";
import Help from "../components/Help";
import { Translation, Trans } from "react-i18next";
import dashboardService from "../services/dashboard.service";
import UserService from "../services/user.service";
import MessageService from "../services/message.service";
import Modal from "react-bootstrap/Modal";
import "../styles/hr.scss";
import "../settings/itemClass.scss";
import "../settings/itemType.scss";
import toast from "react-hot-toast";
import "../styles/navbar.scss";
import { isBrowser } from "react-device-detect";
/**
 *   navbar component
 * @return {JSX} return nav bar component
 */
class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: JSON.parse(localStorage.getItem("user")),
      logo1: null,
      logo2: null,
      has_maintain: false,
      Profmodal: false,
      passModal: false,
      messageCount: 0,
      changePassForm: {},
      userInfo: {
        name: JSON.parse(localStorage.getItem("user"))?.name,
        idnumber: JSON.parse(localStorage.getItem("user"))?.idnumber,
        phone: JSON.parse(localStorage.getItem("user"))?.phone,
      },
    };
  }
  /**
   * open profile modal
   * @function
   *
   */
  ProfmodalOpen = () => {
    this.setState({ Profmodal: true });
  };
  /**
   * close profile modal
   * @function
   *
   */
  ProfmodalClose = () => {
    this.setState({ Profmodal: false });
  };
  /**
   * open password modal
   * @function
   *
   */
  passModalOpen = () => {
    this.setState({ passModal: true });
  };
  /**
   * close password modal
   * @function
   *
   */
  passModalClose = () => {
    this.setState({ passModal: false });
  };
  /**
   * @param  {event} e
   * handle password change input event
   * just change the state
   */
  handleChangePass = (e) => {
    const { name, value } = e.target;
    const new_data = this.state.changePassForm;
    new_data[name] = value;
    this.setState({ changePassForm: new_data });
  };
  /**
   * @param  {event} e click event
   * change password
   * send dataa to api
   */
  sumbitChangepass = (e) => {
    e.preventDefault();
    for (const key in this.state.changePassForm) {
      if (this.state.changePassForm[key] === "") {
        toast.error(<Trans>There is a problem loading data</Trans>);
      }
    }
    /**
     * check regex of length and password strength
     */
    const poorRegExp = /[a-z]/;
    const weakRegExp = /(?=.*?[0-9])/;
    const newpass = this.state.changePassForm["password"];
    const confpass = this.state.changePassForm["conf_password"];
    const poorPassword = poorRegExp.test(newpass);
    const weakPassword = weakRegExp.test(newpass);
    if (newpass.length < 8) {
      toast.error(<Trans>password length must be larger than 8</Trans>);
    } else if (!weakPassword) {
      toast.error(<Trans>password must be contain numerical charecters</Trans>);
    } else if (!poorPassword) {
      toast.error(<Trans>password must be contain charechters</Trans>);
    } else if (newpass !== confpass) {
      toast.error(<Trans>confirm password is wrong</Trans>);
    } else {
      const id = this.state.user.id;
      UserService.changePassword(id, this.state.changePassForm).then(
        (res) => {
          toast.success(<Trans>Password change succesfully</Trans>);
          this.passModalClose();
        },
        (err) => {
          const data = err.response.data;
          if (data) {
            if (data.old_password) {
              toast.error(<Trans>Old password is not correct</Trans>);
            }
            if (data.password) {
              toast.error(<Trans>Password is to common</Trans>);
            }
          }
        }
      );
    }
  };
  /**
   *
   * @param {event} e
   * cahnge user state data in user profile
   */
  handleChangeUser = (e) => {
    const { name, value } = e.target;
    const new_data = this.state.userInfo;
    new_data[name] = value;
    this.setState({ userInfo: new_data });
  };
  /**
   *
   * @param {event} e
   * send new profile data to api
   *
   */
  submitChaneprofile = (e) => {
    e.preventDefault();
    const id = this.state.user.id;
    const new_data = {};
    //Check for field empty or not
    for (const key in this.state.userInfo) {
      if (this.state.userInfo[key] !== "") {
        new_data[key] = this.state.userInfo[key];
      }
    }
    new_data["username"] = this.state.user.username;
    UserService.updateUser(id, new_data).then(
      (res) => {
        toast.success(<Trans>Profile update succesfully</Trans>);
        const user = JSON.parse(localStorage.getItem("user"));
        user.phone = res.data.phone;
        user.idnumber = res.data.idnumber;
        user.name = res.data.name;
        localStorage.removeItem("user");
        localStorage.setItem("user", JSON.stringify(user));
        this.ProfmodalClose();
      },
      (err) => {
        toast.error(<Trans>Update profile failed</Trans>);
      }
    );
  };

  /**
   * when component munt called
   * get warnings from API
   * get unread mesaeg from API
   * get country and user info also
   */
  componentDidMount() {
    console.log(this.state.user);
    if (this.state.user !== undefined && this.state.user !== null) {
      dashboardService.getAllWarningsData().then(
        (res) => {
          const sum =
            res.data.seven_days + res.data.three_days + res.data.extended.count;
          if (sum !== 0) {
            this.setState({ has_maintain: true });
          }
        },
        (err) => {
          console.log(err);
        }
      );
      MessageService.getUnreadMessages().then((res) => {
        this.setState({ messageCount: res.data });
      });
    }
    let country = JSON.parse(localStorage.getItem("country"));

    if (country !== null) {
      this.state.logo1 = country.logo;
      this.state.logo2 = country.secondLogo;
    }
    if (this.state.logo1 !== null) {
      this.setState({
        logo1: `https://tlsapi.invgap.org${this.state.logo1}`,
      });
    }
    if (this.state.logo2 !== null) {
      this.setState({
        logo2: `https://tlsapi.invgap.org${this.state.logo2}`,
      });
    }
  }
  toggleOffcanvas() {
    document.querySelector(".sidebar-offcanvas").classList.toggle("active");
  }
  languages = {
    en: "English",
    fr: "Français",
    ar: "عربی",
    es: "Español",
    ru: "Русский",
    ot: "Other",
    uk: "украї́нська",
    ch: "Chinese",
  };
  render() {
    return (
      <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        {isBrowser && (
          <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center"></div>
        )}

        <div className="navbar-menu-wrapper d-flex align-items-stretch">
          <button
            className="navbar-toggler navbar-toggler align-self-center"
            type="button"
            onClick={() => document.body.classList.toggle("sidebar-icon-only")}
          >
            <span className="mdi mdi-menu"></span>
          </button>
          {isBrowser && (
            <div className="search-field search d-none d-md-block">
              <div className="w-100 h-100">
                <img
                  src={require("../../assets/images/home/nav-logo.jpg")}
                  alt="profile"
                  className={"pl-1 images"}
                />
                <img
                  className={"pl-1 images"}
                  src={this.state.logo1}
                  alt="logo"
                />
                <img
                  className={"pl-1 images"}
                  src={this.state.logo2}
                  alt="logo"
                />
              </div>
            </div>
          )}

          <div className="text-center align-item-center align-center pl-3 sys-text ">
            <Trans>Inventory and Gap Analysis</Trans> v3.1 (
            {JSON.parse(localStorage.getItem("country"))?.country} :{" "}
            {this.state.user?.facility_name} )
          </div>
          <div className="text-center align-item-center align-center pl-3 sys-text-mobile ">
            <Trans>IGA</Trans> :{this.state.user?.facility_name}
          </div>
          <ul className="navbar-nav navbar-nav-right">
            {isBrowser && (
              <li className="nav-item nav-profile  d-xl-flex">
                <Help />
              </li>
            )}

            <li className="nav-item nav-profile nav-language  d-flex">
              <Dropdown alignRight>
                <Dropdown.Toggle className="nav-link count-indicator">
                  <div className="">
                    <p className="mb-1 text-black">
                      <span>{this.languages[i18n.language]}</span>
                    </p>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="preview-list navbar-dropdown">
                  {Object.keys(this.languages).map((key, i) => (
                    <Dropdown.Item
                      key={i + key}
                      className="dropdown-item d-flex align-items-center"
                      href="!#"
                      onClick={(e) => {
                        e.preventDefault();
                        i18n.changeLanguage(key);
                        window.location.reload();
                      }}
                    >
                      <div className="nav-language-text">
                        <p className="mb-1 text-black">
                          <span>{this.languages[key]}</span>
                        </p>
                      </div>
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item nav-profile nav-language d-flex">
              <Dropdown>
                <Dropdown.Toggle className="nav-link count-indicator">
                  <div className="nav-profile-img">
                    <img
                      src={require("../../assets/images/faces/face28.png")}
                      alt="profile"
                    />
                  </div>
                  <div className="nav-profile-text">
                    <p className="mb-1 text-black">
                      <span>
                        {this.state.user == null
                          ? ""
                          : this.state.user.username}
                      </span>
                    </p>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="preview-list navbar-dropdown">
                  <div className="p-3 text-center bg-primary">
                    <img
                      className="img-avatar img-avatar48 img-avatar-thumb"
                      src={require("../../assets/images/faces/face28.png")}
                      alt=""
                    />
                  </div>
                  <div className="p-2">
                    <h5 className="dropdown-header text-uppercase pl-2 text-dark">
                      <span>
                        <Trans>User Options</Trans>
                      </span>
                    </h5>
                    <h5 className="dropdown-header text-uppercase pl-2 text-dark">
                      <span>
                        {" "}
                        {this.state.user == null
                          ? ""
                          : this.state.user.username}
                      </span>
                    </h5>
                    <Dropdown.Item
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      onClick={this.passModalOpen}
                    >
                      <span>
                        <span>
                          <Trans>Change password</Trans>
                        </span>
                      </span>
                      <i className="mdi  mdi-account-key ml-1"></i>
                    </Dropdown.Item>
                    <Modal
                      show={this.state.passModal}
                      onHide={this.passModalClose}
                      style={{ padding: "10px" }}
                    >
                      <form onSubmit={this.sumbitChangepass}>
                        <h3 className="mb-1 text-center fs-5">
                          <Trans>Change password</Trans>
                        </h3>
                        <div className="d-flex flex-column align-items-center"></div>
                        <div className="d-flex flex-column align-items-center"></div>
                        <div className="d-flex flex-column align-items-center"></div>
                        <div className="d-flex flex-column align-items-center"></div>

                        <div className="d-flex flex-column align-items-center">
                          <label>
                            <Trans>Old password</Trans>
                          </label>
                          <input
                            name="old_password"
                            type="password"
                            onChange={this.handleChangePass}
                            value={this.state.changePassForm?.old_password}
                            required
                          ></input>
                        </div>

                        <div className="d-flex flex-column align-items-center">
                          <label>
                            <Trans>New passowrd</Trans>
                          </label>
                          <input
                            name="password"
                            type="password"
                            onChange={this.handleChangePass}
                            value={this.state.changePassForm?.password}
                            required
                          ></input>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                          <label>
                            <Trans>Confirm new password</Trans>
                          </label>
                          <input
                            name="conf_password"
                            type="password"
                            onChange={this.handleChangePass}
                            value={this.state.changePassForm?.conf_password}
                            required
                          ></input>
                        </div>

                        <button className="save-btn w-100" type="submit">
                          <Trans>Save</Trans>
                        </button>
                      </form>
                    </Modal>
                    <Dropdown.Item
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      onClick={this.ProfmodalOpen}
                    >
                      <span>
                        <span>
                          <Trans>Profile</Trans>
                        </span>
                      </span>
                      <i className="mdi mdi mdi-account-star ml-1"></i>
                    </Dropdown.Item>
                    <Modal
                      show={this.state.Profmodal}
                      onHide={this.ProfmodalClose}
                      style={{ padding: "10px" }}
                    >
                      <form onSubmit={this.submitChaneprofile}>
                        <h3 className="mb-1 text-center fs-5">
                          <Trans>Update profile</Trans>
                        </h3>
                        <div className="d-flex flex-column align-items-center"></div>
                        <div className="d-flex flex-column align-items-center"></div>
                        <div className="d-flex flex-column align-items-center"></div>
                        <div className="d-flex flex-column align-items-center"></div>

                        <div className="d-flex flex-column align-items-center">
                          <label>
                            <Trans>Name</Trans>
                          </label>
                          <input
                            name="name"
                            type="text"
                            onChange={this.handleChangeUser}
                            value={this.state.userInfo?.name}
                          ></input>
                        </div>

                        <div className="d-flex flex-column align-items-center">
                          <label>
                            <Trans>ID Number</Trans>
                          </label>
                          <input
                            name="idnumber"
                            type="number"
                            onChange={this.handleChangeUser}
                            value={this.state.userInfo?.idnumber}
                          ></input>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                          <label>
                            <Trans>Phone Number</Trans>
                          </label>
                          <input
                            name="phone"
                            type="number"
                            onChange={this.handleChangeUser}
                            value={this.state.userInfo?.phone}
                          ></input>
                        </div>

                        <button className="save-btn w-100" type="submit">
                          <Trans>Save</Trans>
                        </button>
                      </form>
                    </Modal>
                    <Dropdown.Item
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      href="/login"
                      onClick={(evt) => {
                        eventBus.dispatch("logout");
                      }}
                    >
                      <span>
                        <span>
                          <Trans>Logout</Trans>
                        </span>
                      </span>
                      <i className="mdi mdi-logout ml-1"></i>
                    </Dropdown.Item>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item ">
              <Dropdown alignRight>
                <Dropdown.Toggle className="nav-link count-indicator hide-carret">
                  <i className="mdi mdi-email-outline"></i>
                  {this.state.messageCount !== 0 && (
                    <span className="count-symbol bg-warning"></span>
                  )}
                </Dropdown.Toggle>
                <Dropdown.Menu className="preview-list navbar-dropdown">
                  <h6 className="p-3 bg-primary text-white py-4 mb-0">
                    <Trans>Messages</Trans>
                  </h6>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item
                    className="dropdown-item preview-item"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject ellipsis mb-1 font-weight-normal">
                        <Link to="/message/list">
                          <span>
                            <Trans>You have</Trans> {this.state.messageCount}{" "}
                            <Trans>unread messages</Trans>
                          </span>
                        </Link>
                      </h6>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item" disabled>
              <Dropdown alignRight>
                <Dropdown.Toggle className="nav-link count-indicator hide-carret">
                  <i className="mdi mdi-bell-outline"></i>
                  {this.state.has_maintain && (
                    <span className="count-symbol bg-danger"></span>
                  )}
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu navbar-dropdown preview-list">
                  <h6 className="p-3 mb-0 bg-primary text-white py-4">
                    <span>
                      <Trans>Notifications</Trans>
                    </span>
                  </h6>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item
                    className="dropdown-item preview-item"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-success">
                        <i className="mdi mdi-calendar"></i>
                      </div>
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject font-weight-normal mb-1">
                        <Links to="/dashboard#warnings">
                          <span>
                            <Trans>See all Maintenance</Trans>
                          </span>
                        </Links>
                      </h6>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
          <button
            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            onClick={this.toggleOffcanvas}
          >
            <span className="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
    );
  }
}

export default withTranslation("translation")(Navbar);
