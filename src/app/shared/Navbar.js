import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import i18n from "../../i18n-sample";
// import { span } from 'react-i18next';
import eventBus from "../common/EventBus";
import userService from "../services/user.service";
class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: JSON.parse(localStorage.getItem("user")),
      logo1: null,
      logo2: null,
    };
  }
  componentDidMount() {
    let country = JSON.parse(localStorage.getItem("country"));

    if (country !== null) {
      this.state.logo1 = country.logo;
      this.state.logo2 = country.secondLogo;
    }
    if (this.state.logo1 !== null) {
      this.setState({
        logo1: `http://5.182.47.38:8001${this.state.logo1}`,
      });
    }
    console.log(this.state.logo2);
    if (this.state.logo2 !== null) {
      this.setState({
        logo2: `http://5.182.47.38:8001${this.state.logo2}`,
      });
    }
  }
  toggleOffcanvas() {
    document.querySelector(".sidebar-offcanvas").classList.toggle("active");
  }
  languages = {
    en: "English",
    fr: "Français",
    ar: "العربية",
    fa: "فارسی",
    es: "Español",
    ru: "Русский",
  };
  render() {
    return (
      <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <Link className="navbar-brand brand-logo" to="/dashboard">
            <img src={this.state.logo1} alt="logo" />
          </Link>
          <Link className="navbar-brand brand-logo-mini" to="/dashboard">
            <img src={this.state.logo2} alt="logo" />
          </Link>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-stretch">
          <button
            className="navbar-toggler navbar-toggler align-self-center"
            type="button"
            onClick={() => document.body.classList.toggle("sidebar-icon-only")}
          >
            <span className="mdi mdi-menu"></span>
          </button>
          <div className="search-field d-none d-md-block">
            <form className="d-flex align-items-center h-100" action="#">
              <div className="input-group">
                <div className="input-group-prepend bg-transparent">
                  <i className="input-group-text border-0 mdi mdi-magnify"></i>
                </div>
                <input
                  type="text"
                  className="form-control bg-transparent border-0"
                  placeholder="Search products"
                />
              </div>
            </form>
          </div>
          <ul className="navbar-nav navbar-nav-right">
            <li className="nav-item nav-profile d-none d-xl-flex">
              <Dropdown alignRight>
                <Dropdown.Toggle className="nav-link count-indicator">
                  <span>Reports</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="preview-list navbar-dropdown">
                  <Dropdown.Item
                    className="dropdown-item d-flex align-items-center"
                    href="!#"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <i className="mdi mdi-file-pdf mr-2"></i>
                    <span>PDF</span>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item
                    className="dropdown-item d-flex align-items-center"
                    href="!#"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <i className="mdi mdi-file-excel mr-2"></i>
                    <span>Excel</span>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item
                    className="dropdown-item d-flex align-items-center"
                    href="!#"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <i className="mdi mdi-file-word mr-2"></i>
                    <span>doc</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item nav-profile d-none d-xl-flex">
              <Dropdown alignRight>
                <Dropdown.Toggle className="nav-link count-indicator">
                  <span>Projects</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="preview-list navbar-dropdown">
                  <Dropdown.Item
                    className="dropdown-item d-flex align-items-center"
                    href="!#"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <i className="mdi mdi-eye-outline mr-2"></i>
                    <span>View Project</span>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item
                    className="dropdown-item d-flex align-items-center"
                    href="!#"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <i className="mdi mdi-pencil-outline mr-2"></i>
                    <span>Edit Project</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item nav-profile nav-language d-none d-lg-flex">
              <Dropdown alignRight>
                <Dropdown.Toggle className="nav-link count-indicator">
                  <div className="nav-language-text">
                    <p className="mb-1 text-black">
                      <span>{this.languages[i18n.language]}</span>
                    </p>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="preview-list navbar-dropdown">
                  {Object.keys(this.languages).map((key) => (
                    <Dropdown.Item
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

            <li className="nav-item nav-profile nav-language">
              <Dropdown alignRight>
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
                      <span>User Options</span>
                    </h5>
                    <Dropdown.Item
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      href="!#"
                      onClick={(evt) => evt.preventDefault()}
                    >
                      <span>
                        <span>Inbox</span>
                      </span>
                      <span className="p-0">
                        <span className="badge badge-primary">3</span>
                        <i className="mdi mdi-email-open-outline ml-1"></i>
                      </span>
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      href="!#"
                      onClick={(evt) => evt.preventDefault()}
                    >
                      <span>
                        <span>Profile</span>
                      </span>
                      <span className="p-0">
                        <span className="badge badge-success">1</span>
                        <i className="mdi mdi-account-outline ml-1"></i>
                      </span>
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      href="!#"
                      onClick={(evt) => evt.preventDefault()}
                    >
                      <span>
                        <span>Settings</span>
                      </span>
                      <i className="mdi mdi-settings"></i>
                    </Dropdown.Item>
                    <div role="separator" className="dropdown-divider"></div>
                    <h5 className="dropdown-header text-uppercase  pl-2 text-dark mt-2">
                      <span>Actions</span>
                    </h5>
                    <Dropdown.Item
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      href="!#"
                      onClick={(evt) => evt.preventDefault()}
                    >
                      <span>
                        <span>Lock Account</span>
                      </span>
                      <i className="mdi mdi-lock ml-1"></i>
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      href="/login"
                      onClick={(evt) => {
                        eventBus.dispatch("logout");
                      }}
                    >
                      <span>
                        <span>Log Out</span>
                      </span>
                      <i className="mdi mdi-logout ml-1"></i>
                    </Dropdown.Item>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item">
              <Dropdown alignRight>
                <Dropdown.Toggle className="nav-link count-indicator hide-carret">
                  <i className="mdi mdi-email-outline"></i>
                  <span className="count-symbol bg-warning"></span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="preview-list navbar-dropdown">
                  <h6 className="p-3 bg-primary text-white py-4 mb-0">
                    Messages
                  </h6>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item
                    className="dropdown-item preview-item"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <div className="preview-thumbnail">
                      <img
                        src={require("../../assets/images/faces/face4.jpg")}
                        alt="user"
                        className="profile-pic"
                      />
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject ellipsis mb-1 font-weight-normal">
                        <span>Mark send you a message</span>
                      </h6>
                      <p className="text-gray mb-0">
                        1 <span>Minutes ago</span>
                      </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item
                    className="dropdown-item preview-item"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <div className="preview-thumbnail">
                      <img
                        src={require("../../assets/images/faces/face2.jpg")}
                        alt="user"
                        className="profile-pic"
                      />
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject ellipsis mb-1 font-weight-normal">
                        <span>Cregh send you a message</span>
                      </h6>
                      <p className="text-gray mb-0">
                        15 <span>Minutes ago</span>
                      </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item
                    className="dropdown-item preview-item"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <div className="preview-thumbnail">
                      <img
                        src={require("../../assets/images/faces/face3.jpg")}
                        alt="user"
                        className="profile-pic"
                      />
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject ellipsis mb-1 font-weight-normal">
                        <span>Profile picture updated</span>
                      </h6>
                      <p className="text-gray mb-0">
                        18 <span>Minutes ago</span>
                      </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <h6 className="p-3 mb-0 text-center cursor-pointer">
                    4<span> new messages</span>
                  </h6>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item">
              <Dropdown alignRight>
                <Dropdown.Toggle className="nav-link count-indicator hide-carret">
                  <i className="mdi mdi-bell-outline"></i>
                  <span className="count-symbol bg-danger"></span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu navbar-dropdown preview-list">
                  <h6 className="p-3 mb-0 bg-primary text-white py-4">
                    <span>Notifications</span>
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
                        <span>Event today</span>
                      </h6>
                      <p className="text-gray ellipsis mb-0">
                        {" "}
                        <span>
                          Just a reminder that you have an event today
                        </span>{" "}
                      </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item
                    className="dropdown-item preview-item"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-warning">
                        <i className="mdi mdi-settings"></i>
                      </div>
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject font-weight-normal mb-1">
                        <span>Settings</span>
                      </h6>
                      <p className="text-gray ellipsis mb-0">
                        <span>Update dashboard</span>
                      </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item
                    className="dropdown-item preview-item"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-info">
                        <i className="mdi mdi-link-variant"></i>
                      </div>
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject font-weight-normal mb-1">
                        <span>Launch Admin</span>
                      </h6>
                      <p className="text-gray ellipsis mb-0">
                        <span>New admin wow!</span>
                      </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <h6 className="p-3 mb-0 text-center cursor-pointer">
                    <span>See all notifications</span>
                  </h6>
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

export default Navbar;
