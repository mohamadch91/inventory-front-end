import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import i18n from "../../i18n";
import eventBus from "../common/EventBus";
import Help from "../components/Help";
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
        logo1: `https://inventory.runflare.run${this.state.logo1}`,
      });
    }
    if (this.state.logo2 !== null) {
      this.setState({
        logo2: `https://inventory.runflare.run${this.state.logo2}`,
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
            <img
              src={require("../../assets/images/home/nav-logo.jpg")}
              alt="profile"
              className={"pl-3"}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
            Inventory and Gap Analysis (
            {JSON.parse(localStorage.getItem("country"))?.codecountry}) V3.25
            (You are in {this.state.user?.facility_name})
          </div>

          <ul className="navbar-nav navbar-nav-right">
            <li className="nav-item nav-profile  d-xl-flex">
              <Help />
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
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject ellipsis mb-1 font-weight-normal">
                        <Link to="/message/list">
                          <span>See all message</span>
                        </Link>
                      </h6>
                    </div>
                  </Dropdown.Item>
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
                        <Link to="/dashboard/maintenanceLog">
                          <span>See all Maintenance</span>
                        </Link>
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
