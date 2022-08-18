import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Collapse } from "react-bootstrap";
import EventBus from "../common/EventBus";
// import { span } from 'react-i18next';

class Sidebar extends Component {
  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({ [menuState]: false });
    } else if (Object.keys(this.state).length === 0) {
      this.setState({ [menuState]: true });
    } else {
      Object.keys(this.state).forEach((i) => {
        this.setState({ [i]: false });
      });
      this.setState({ [menuState]: true });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector("#sidebar").classList.remove("active");
    Object.keys(this.state).forEach((i) => {
      this.setState({ [i]: false });
    });

    const dropdownPaths = [
      { path: "/apps", state: "appsMenuOpen" },
      { path: "/basic-ui", state: "basicUiMenuOpen" },
      { path: "/advanced-ui", state: "advancedUiMenuOpen" },
      { path: "/form-elements", state: "formElementsMenuOpen" },
      { path: "/tables", state: "tablesMenuOpen" },
      { path: "/maps", state: "mapsMenuOpen" },
      { path: "/icons", state: "iconsMenuOpen" },
      { path: "/charts", state: "chartsMenuOpen" },
      { path: "/user-pages", state: "userPagesMenuOpen" },
      { path: "/error-pages", state: "errorPagesMenuOpen" },
      { path: "/general-pages", state: "generalPagesMenuOpen" },
      { path: "/ecommerce", state: "ecommercePagesMenuOpen" },
      { path: "/settings", state: "settingsMenuOpen" },
    ];

    dropdownPaths.forEach((obj) => {
      if (this.isPathActive(obj.path)) {
        this.setState({ [obj.state]: true });
      }
    });
  }
  render() {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item nav-category">
            <span>Main</span>
          </li>
          <li
            className={
              this.isPathActive("/dashboard") ? "nav-item active" : "nav-item"
            }
          >
            <Link className="nav-link" to="/dashboard">
              <span className="icon-bg">
                <i className="mdi mdi-cube menu-icon"></i>
              </span>
              <span className="menu-title">
                <span>Dashboard</span>
              </span>
            </Link>
          </li>
          <li className="nav-item nav-category">
            <span>Admin setting </span>
          </li>
          <li
            className={
              this.isPathActive("/setting") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.settingsMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("settingsMenuOpen")}
              data-toggle="collapse"
            >
              <span className="icon-bg">
                <i className="mdi mdi-settings menu-icon"></i>
              </span>
              <span className="menu-title">
                <span>Settings</span>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.settingsMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/settings/country")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/settings/country"
                  >
                    <span>Country setting</span>
                  </Link>
                </li>
                {/* <li className="nav-item"> <Link className={ this.isPathActive('/settings/level') ? 'nav-link active' : 'nav-link' } to="/settings/level"><span>level setting</span></Link></li> */}
                {/* <li className="nav-item"> <Link className={ this.isPathActive('/settings/level-list') ? 'nav-link active' : 'nav-link' } to="/settings/level-list"><span>level list</span></Link></li> */}
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/settings/new-level-list")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/settings/new-level-list"
                  >
                    <span>Level setting</span>
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/settings/item-class")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/settings/item-class"
                  >
                    <span>Item class</span>
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/settings/item-type")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/settings/item-type"
                  >
                    <span>Item type</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      this.isPathActive("/settings/item-t-level")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/settings/item-t-level"
                  >
                    <span>"Item type" In different levels</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      this.isPathActive("/settings/item-fields")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/settings/item-fields"
                  >
                    <span>Fields of "Item type"</span>
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/settings/params")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/settings/params"
                  >
                    <span>Parameters</span>
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/settings/manufacturer")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/settings/manufacturer"
                  >
                    <span>Manufacturer by Item class</span>
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li className="nav-item nav-category">
            <span>UI Features</span>
          </li>
          <li
            className={
              this.isPathActive("/basic-ui") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.basicUiMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("basicUiMenuOpen")}
              data-toggle="collapse"
            >
              <span className="icon-bg">
                <i className="mdi mdi-crosshairs-gps menu-icon"></i>
              </span>
              <span className="menu-title">
                <span>Basic UI Elements</span>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.basicUiMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/basic-ui/buttons")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/basic-ui/buttons"
                  >
                    <span>Buttons</span>
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/basic-ui/dropdowns")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/basic-ui/dropdowns"
                  >
                    <span>Dropdowns</span>
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/basic-ui/typography")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/basic-ui/typography"
                  >
                    <span>Typography</span>
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/icons") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.iconsMenuOpen ? "nav-link menu-expanded" : "nav-link"
              }
              onClick={() => this.toggleMenuState("iconsMenuOpen")}
              data-toggle="collapse"
            >
              <span className="icon-bg">
                <i className="mdi mdi-contacts menu-icon"></i>
              </span>
              <span className="menu-title">
                <span>Icons</span>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.iconsMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/icons/mdi")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/icons/mdi"
                  >
                    <span>Material</span>
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/form-elements")
                ? "nav-item active"
                : "nav-item"
            }
          >
            <div
              className={
                this.state.formElementsMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("formElementsMenuOpen")}
              data-toggle="collapse"
            >
              <span className="icon-bg">
                <i className="mdi mdi-format-list-bulleted menu-icon"></i>
              </span>
              <span className="menu-title">
                <span>Form elements</span>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.formElementsMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/form-elements/basic-elements")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/form-elements/basic-elements"
                  >
                    <span>Basic Elements</span>
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li className="nav-item nav-category">
            <span>Data Representation</span>
          </li>
          <li
            className={
              this.isPathActive("/charts") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.chartsMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("chartsMenuOpen")}
              data-toggle="collapse"
            >
              <span className="icon-bg">
                <i className="mdi mdi-chart-bar menu-icon"></i>
              </span>
              <span className="menu-title">
                <span>Charts</span>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.chartsMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/charts/chart-js")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/charts/chart-js"
                  >
                    <span>Chart Js</span>
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/tables") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.tablesMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("tablesMenuOpen")}
              data-toggle="collapse"
            >
              <span className="icon-bg">
                <i className="mdi mdi-table-large menu-icon"></i>
              </span>
              <span className="menu-title">
                <span>Tables</span>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.tablesMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/tables/basic-table")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/tables/basic-table"
                  >
                    <span>Basic Table</span>
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li className="nav-item nav-category">Sample Pages</li>

          <li
            className={
              this.isPathActive("/error-pages") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.errorPagesMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("errorPagesMenuOpen")}
              data-toggle="collapse"
            >
              <span className="icon-bg">
                <i className="mdi mdi-security menu-icon"></i>
              </span>
              <span className="menu-title">
                <span>Error pages</span>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.errorPagesMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/error-pages/error-404")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/error-pages/error-404"
                  >
                    <span>404</span>
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/error-pages/error-500")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/error-pages/error-500"
                  >
                    <span>500</span>
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li className="nav-item documentation-link">
            <a
              className="nav-link"
              href="http://bootstrapdash.com/demo/connect-plus-react-free/documentation/documentation.html"
            >
              <span className="icon-bg">
                <i className="mdi mdi-file-document-box menu-icon"></i>
              </span>
              <span className="menu-title">
                <span>Documentation</span>
              </span>
            </a>
          </li>
          <li className="nav-item sidebar-user-actions">
            <div className="user-details">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="d-flex align-items-center">
                    <div className="sidebar-profile-img">
                      <img
                        src={require("../../assets/images/faces/face28.png")}
                        alt="profile"
                      />
                    </div>
                    <div className="sidebar-profile-text">
                      <p className="mb-1">
                        <span>Henry Klein</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="badge badge-danger">3</div>
              </div>
            </div>
          </li>
          <li className="nav-item sidebar-user-actions">
            <div className="sidebar-user-menu">
              <a
                href="!#"
                onClick={(event) => event.preventDefault()}
                className="nav-link"
              >
                <i className="mdi mdi-settings menu-icon"></i>
                <span className="menu-title">
                  <span>Settings</span>
                </span>
              </a>
            </div>
          </li>
          <li className="nav-item sidebar-user-actions">
            <div className="sidebar-user-menu">
              <a
                href="!#"
                onClick={(event) => event.preventDefault()}
                className="nav-link"
              >
                <i className="mdi mdi-speedometer menu-icon"></i>
                <span className="menu-title">
                  <span>Take Tour</span>
                </span>
              </a>
            </div>
          </li>
          <li className="nav-item sidebar-user-actions">
            <div className="sidebar-user-menu">
              <a
                href="!#"
                onClick={(event) => {
                  EventBus.dispatch("logout");
                }}
                className="nav-link"
              >
                <i className="mdi mdi-logout menu-icon"></i>
                <span className="menu-title">
                  <span>Log Out</span>
                </span>
              </a>
            </div>
          </li>
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add className 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector("body");
    document.querySelectorAll(".sidebar .nav-item").forEach((el) => {
      el.addEventListener("mouseover", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.add("hover-open");
        }
      });
      el.addEventListener("mouseout", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.remove("hover-open");
        }
      });
    });
  }
}

export default withRouter(Sidebar);
