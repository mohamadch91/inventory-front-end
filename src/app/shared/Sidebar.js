import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Collapse } from "react-bootstrap";
import EventBus from "../common/EventBus";
// import { span } from 'react-i18next';
import { connect } from "react-redux";
import userService from "../services/user.service";
class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user || {},
      country: JSON.parse(localStorage.getItem("country")) || {},
    };
  }

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
      { path: "/about-iga", state: "aboutIGA" },
      { path: "/hr", state: "hrMenuOpen" },
      { path: "/user", state: "userListMenuOpen" },
      { path: "/facilities", state: "facilitiesOpen" },
      { path: "/items", state: "itemsOpen" },
      { path: "/message", state: "messageMenuOpen" },
      { path: "/pqs4", state: "pqs4MenuOpen" },
      { path: "/pqs3", state: "pqs4MenuOpen" },
      { path: "/language", state: "languageMenuOpen" },
    ];

    dropdownPaths.forEach((obj) => {
      if (this.isPathActive(obj.path)) {
        this.setState({ [obj.state]: true });
      }
    });
  }

  user = JSON.parse(localStorage.getItem("user"));
  country = JSON.parse(localStorage.getItem("country"));
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
          <li
            className={
              this.isPathActive("/facilities") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.facilitiesOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("facilitiesOpen")}
              data-toggle="collapse"
            >
              <span className="icon-bg">
                <i className="mdi mdi-table-large menu-icon"></i>
              </span>
              <span className="menu-title">
                <span>Facilities</span>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.facilitiesOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <Link
                    className={
                      this.isPathActive("/facilities/info")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/facilities/info/new"
                  >
                    <span>New Facility</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      this.isPathActive("/facilities/list")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/facilities/list"
                  >
                    <span>Facility list</span>
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/items") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.itemsOpen ? "nav-link menu-expanded" : "nav-link"
              }
              onClick={() => this.toggleMenuState("itemsOpen")}
              data-toggle="collapse"
            >
              <span className="icon-bg">
                <i className="mdi mdi-table-large menu-icon"></i>
              </span>
              <span className="menu-title">
                <span>Items</span>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.itemsOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <Link
                    className={
                      this.isPathActive("/items/info")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/items/info/new"
                  >
                    <span>New Item</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      this.isPathActive("/items/list")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/items/list"
                  >
                    <span>Item list</span>
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          {this.country?.havehr && (
            <li
              className={
                this.isPathActive("/hr") ? "nav-item active" : "nav-item"
              }
            >
              <div
                className={
                  this.state.hrMenuOpen ? "nav-link menu-expanded" : "nav-link"
                }
                onClick={() => this.toggleMenuState("hrMenuOpen")}
                data-toggle="collapse"
              >
                <span className="icon-bg">
                  <i className="mdi mdi-account-multiple menu-icon"></i>
                </span>
                <span className="menu-title">
                  <span>Human Resource</span>
                </span>
                <i className="menu-arrow"></i>
              </div>
              <Collapse in={this.state.hrMenuOpen}>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/hr/list")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/hr/list"
                    >
                      <span>HR View</span>
                    </Link>
                  </li>
                </ul>
              </Collapse>
            </li>
          )}

          {this.user !== null && this.user.useradmin && (
            <li
              className={
                this.isPathActive("/user") ? "nav-item active" : "nav-item"
              }
            >
              <div
                className={
                  this.state.userListMenuOpen
                    ? "nav-link menu-expanded"
                    : "nav-link"
                }
                onClick={() => this.toggleMenuState("userListMenuOpen")}
                data-toggle="collapse"
              >
                <span className="icon-bg">
                  <i className="mdi mdi-account menu-icon"></i>
                </span>
                <span className="menu-title">
                  <span>User</span>
                </span>
                <i className="menu-arrow"></i>
              </div>
              <Collapse in={this.state.userListMenuOpen}>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/user/list")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/user/list"
                    >
                      <span>Users View</span>
                    </Link>
                  </li>
                </ul>
              </Collapse>
            </li>
          )}

          <li
            className={
              this.isPathActive("/message") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.messageMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("messageMenuOpen")}
              data-toggle="collapse"
            >
              <span className="icon-bg">
                <i className="mdi mdi-message-text menu-icon"></i>
              </span>
              <span className="menu-title">
                <span>Message</span>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.messageMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/message/new")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/message/new"
                  >
                    <span>New Message</span>
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/message/list")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/message/list"
                  >
                    <span>Message List</span>
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>

          {this.user !== null && this.user.admin && (
            <>
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
                    {/* <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/settings/level")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/settings/level"
                  >
                    <span>level setting</span>
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/settings/level-list")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/settings/level-list"
                  >
                    <span>level list</span>
                  </Link>
                </li> */}
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
                        <span>item category</span>
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
                        <span>"item category" In different levels</span>
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
                        <span>Fields of "item category"</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className={
                          this.isPathActive("/settings/facility-fields")
                            ? "nav-link active"
                            : "nav-link"
                        }
                        to="/settings/facility-fields"
                      >
                        <span>Fields related to facilities</span>
                      </Link>
                    </li>
                    <li className="nav-item">
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
                    <li className="nav-item">
                      {" "}
                      <Link
                        className={
                          this.isPathActive("/settings/pqs4")
                            ? "nav-link active"
                            : "nav-link"
                        }
                        to="/settings/pqs4"
                      >
                        <span>Import PQS4/PIS</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <Link
                        className={
                          this.isPathActive("/settings/pqs3")
                            ? "nav-link active"
                            : "nav-link"
                        }
                        to="/settings/pqs3"
                      >
                        <span>Import PQS3/PIS</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <Link
                        className={
                          this.isPathActive("/settings/language/edit")
                            ? "nav-link active"
                            : "nav-link"
                        }
                        to="/settings/language/edit"
                      >
                        <span>Edit Language</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className={
                          this.isPathActive("/settings/manage-help")
                            ? "nav-link active"
                            : "nav-link"
                        }
                        to="/settings/manage-help"
                      >
                        <span>Manage Help</span>
                      </Link>
                    </li>
                  </ul>
                </Collapse>
              </li>
              <li
                className={
                  this.isPathActive("/about-iga")
                    ? "nav-item active"
                    : "nav-item"
                }
              >
                <div
                  className={
                    this.state.aboutIGA ? "nav-link menu-expanded" : "nav-link"
                  }
                  onClick={() => this.toggleMenuState("aboutIGA")}
                  data-toggle="collapse"
                >
                  <span className="icon-bg">
                    <i className="mdi mdi-table-large menu-icon"></i>
                  </span>
                  <span className="menu-title">
                    <span>About IGA</span>
                  </span>
                  <i className="menu-arrow"></i>
                </div>
                <Collapse in={this.state.aboutIGA}>
                  <ul className="nav flex-column sub-menu">
                    <li className="nav-item">
                      <Link
                        className={
                          this.isPathActive("/about-iga")
                            ? "nav-link active"
                            : "nav-link"
                        }
                        to="/about-iga"
                      >
                        <span>About IGA</span>
                      </Link>
                    </li>
                  </ul>
                </Collapse>
              </li>
            </>
          )}

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
function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}
export default connect(mapStateToProps)(withRouter(Sidebar));
