import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Collapse } from "react-bootstrap";
import eventBus from "../common/EventBus";

import { connect } from "react-redux";
import userService from "../services/user.service";
import { Trans} from "react-i18next";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import * as rdd from "react-device-detect";
import { history } from "../helpers/history";
import Help from "../components/Help";
/**
 * @component side bar class component
 * default template class
 */
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
  /**
   * change route on side bar click
   */
  onRouteChanged() {
    document.querySelector("#sidebar").classList.remove("active");
    Object.keys(this.state).forEach((i) => {
      this.setState({ [i]: false });
    });

    const dropdownPaths = [
      { path: "/apps", state: "appsMenuOpen" },
      { path: "/advanced-ui", state: "advancedUiMenuOpen" },
      { path: "/form-elements", state: "formElementsMenuOpen" },
      { path: "/maps", state: "mapsMenuOpen" },
      { path: "/user-pages", state: "userPagesMenuOpen" },
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
      { path: "/map", state: "mapOpen" },
      { path: "/reports", state: "reportsOpen" },
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
            <span>
              <Trans>Main</Trans>
            </span>
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
                <span>
                  <Trans>Dashboard</Trans>
                </span>
              </span>
            </Link>
          </li>{" "}
          {this.user?.facility_admin && (
            <li
              className={
                this.isPathActive("/facilities")
                  ? "nav-item active"
                  : "nav-item"
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
                  <span>
                    <Trans>Facilities</Trans>
                  </span>
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
                      <span>
                        <Trans>New facility</Trans>
                      </span>
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
                      <span>
                        <Trans>Facility list</Trans>
                      </span>
                    </Link>
                  </li>
                  {isBrowser && (
                    <li className="nav-item">
                      <Link
                        className={
                          this.isPathActive("/facilities/print")
                            ? "nav-link active"
                            : "nav-link"
                        }
                        to="/facilities/print"
                      >
                        <span>
                          <Trans>Print new facility form</Trans>
                        </span>
                      </Link>
                    </li>
                  )}
                </ul>
              </Collapse>
            </li>
          )}
          {this.user?.itemadmin && (
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
                  <span>
                    <Trans>Items</Trans>
                  </span>
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
                      <span>
                        <Trans>New item</Trans>
                      </span>
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
                      <span>
                        <Trans>Item list</Trans>
                      </span>
                    </Link>
                  </li>
                  {isBrowser && (
                    <li className="nav-item">
                      <Link
                        className={
                          this.isPathActive("/items/print")
                            ? "nav-link active"
                            : "nav-link"
                        }
                        to="/items/print"
                      >
                        <span>
                          <Trans>Print new item form</Trans>
                        </span>
                      </Link>
                    </li>
                  )}

                  <li className="nav-item">
                    <Link
                      className={
                        this.isPathActive("/items/qr")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/items/qr"
                    >
                      <span>
                        <Trans>Item QRs</Trans>
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        this.isPathActive("/items/scan-qr")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/items/scan-qr"
                    >
                      <span>
                        <Trans>Scan QRs</Trans>
                      </span>
                    </Link>
                  </li>
                </ul>
              </Collapse>
            </li>
          )}
          {isBrowser && (
            <>
              {this.country?.havehr && (
                <li
                  className={
                    this.isPathActive("/hr") ? "nav-item active" : "nav-item"
                  }
                >
                  <div
                    className={
                      this.state.hrMenuOpen
                        ? "nav-link menu-expanded"
                        : "nav-link"
                    }
                    onClick={() => this.toggleMenuState("hrMenuOpen")}
                    data-toggle="collapse"
                  >
                    <span className="icon-bg">
                      <i className="mdi mdi-account-multiple menu-icon"></i>
                    </span>
                    <span className="menu-title">
                      <span>
                        <Trans>Human resources</Trans>
                      </span>
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
                          <span>
                            <Trans>Human resources list</Trans>
                          </span>
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
                      <span>
                        <Trans>Users</Trans>
                      </span>
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
                          <span>
                            <Trans>Users list</Trans>
                          </span>
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
                    <span>
                      <Trans>Messages</Trans>
                    </span>
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
                        <span>
                          <Trans>New message</Trans>
                        </span>
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
                        <span>
                          <Trans>Messages list</Trans>
                        </span>
                      </Link>
                    </li>
                  </ul>
                </Collapse>
              </li>
              {this.user?.reportadmin && (
                <li
                  className={
                    this.isPathActive("/reports")
                      ? "nav-item active"
                      : "nav-item"
                  }
                >
                  <div
                    className={
                      this.state.reportsOpen
                        ? "nav-link menu-expanded"
                        : "nav-link"
                    }
                    onClick={() => this.toggleMenuState("reportsOpen")}
                    data-toggle="collapse"
                  >
                    <span className="icon-bg">
                      <i className="mdi mdi-table-large menu-icon"></i>
                    </span>
                    <span className="menu-title">
                      <span>
                        <Trans>Reports</Trans>
                      </span>
                    </span>
                    <i className="menu-arrow"></i>
                  </div>
                  <Collapse in={this.state.reportsOpen}>
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item">
                        <Link
                          className={
                            this.isPathActive("/reports/gap-item")
                              ? "nav-link active"
                              : "nav-link"
                          }
                          to="/reports/gap-item"
                        >
                          <span>
                            <Trans>Item gap report</Trans>
                          </span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className={
                            this.isPathActive("/reports/item-fac")
                              ? "nav-link active"
                              : "nav-link"
                          }
                          to="/reports/item-fac"
                        >
                          <span>
                            <Trans>Item report by facility</Trans>
                          </span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className={
                            this.isPathActive("/reports/fac-seg")
                              ? "nav-link active"
                              : "nav-link"
                          }
                          to="/reports/fac-seg"
                        >
                          <span>
                            <Trans>Facility segmentation</Trans>
                          </span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className={
                            this.isPathActive("/reports/item-gp")
                              ? "nav-link active"
                              : "nav-link"
                          }
                          to="/reports/item-gp"
                        >
                          <span>
                            <Trans>Item grouped report</Trans>
                          </span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className={
                            this.isPathActive("/reports/subfac-pop-data")
                              ? "nav-link active"
                              : "nav-link"
                          }
                          to="/reports/subfac-pop-data"
                        >
                          <span>
                            <Trans>Sub-facility populations report</Trans>
                          </span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className={
                            this.isPathActive("/reports/fac-prof")
                              ? "nav-link active"
                              : "nav-link"
                          }
                          to="/reports/fac-prof"
                        >
                          <span>
                            <Trans>Profile of facilities</Trans>
                          </span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className={
                            this.isPathActive("/reports/prof-cold-chain")
                              ? "nav-link active"
                              : "nav-link"
                          }
                          to="/reports/prof-cold-chain"
                        >
                          <span>
                            <Trans>Profile of cold chain equipment</Trans>
                          </span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className={
                            this.isPathActive("/reports/fac-map-based")
                              ? "nav-link active"
                              : "nav-link"
                          }
                          to="/reports/fac-map-based"
                        >
                          <span>
                            <Trans>Facility map-based report</Trans>
                          </span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className={
                            this.isPathActive("/reports/gap-map-based")
                              ? "nav-link active"
                              : "nav-link"
                          }
                          to="/reports/gap-map-based"
                        >
                          <span>
                            <Trans>Gap map report</Trans>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </Collapse>
                </li>
              )}

              {this.user !== null && this.user.admin && (
                <>
                  <li className="nav-item nav-category">
                    <span>
                      <Trans>ADMIN Setting</Trans>
                    </span>
                  </li>

                  <li
                    className={
                      this.isPathActive("/setting")
                        ? "nav-item active"
                        : "nav-item"
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
                        <span>
                          <Trans>Settings</Trans>
                        </span>
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
                            <span>
                              <Trans>Country</Trans> <Trans>settings</Trans>
                            </span>
                          </Link>
                        </li>
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
                            <span>
                              <Trans>Level settings</Trans>
                            </span>
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
                            <span>
                              <Trans>Item class</Trans>
                            </span>
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
                            <span>
                              <Trans>Items category</Trans>
                            </span>
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
                            <span>
                              <Trans>Item categories in different levels</Trans>
                            </span>
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
                            <span>
                              <Trans>Fields of Items categories</Trans>
                            </span>
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
                            <span>
                              <Trans>Fields related to facilities</Trans>
                            </span>
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
                            <span>
                              <Trans>Parameters</Trans>
                            </span>
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
                            <span>
                              <Trans>Manufacturers by item class</Trans>
                            </span>
                          </Link>
                        </li>
                        {this.country?.usingmaintenance && (
                          <li className="nav-item">
                            {" "}
                            <Link
                              className={
                                this.isPathActive("/settings/mtns_setting")
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                              to="/settings/mtns_setting"
                            >
                              <span>
                                <Trans>Maintenance settings</Trans>
                              </span>
                            </Link>
                          </li>
                        )}

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
                            <span>
                              <Trans>Import PQS/PIS 004</Trans>
                            </span>
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
                            <span>
                              <Trans>Import PQS/PIS 003</Trans>
                            </span>
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
                            <span>
                              <Trans>Edit language</Trans>
                            </span>
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
                            <span>
                              <Trans>Manage HELP</Trans>
                            </span>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className={
                              this.isPathActive("/settings/import-facility")
                                ? "nav-link active"
                                : "nav-link"
                            }
                            to="/settings/import-facility"
                          >
                            <span>
                              <Trans>Import Facilities with MS Excel</Trans>
                            </span>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className={
                              this.isPathActive("/settings/reports/excel")
                                ? "nav-link active"
                                : "nav-link"
                            }
                            to="/settings/reports/excel"
                          >
                            <span>
                              <Trans>Export all data to MS Excel</Trans>
                            </span>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className={
                              this.isPathActive("/settings/planning-cce-gap")
                                ? "nav-link active"
                                : "nav-link"
                            }
                            to="/settings/planning-cce-gap"
                          >
                            <span>
                              <Trans>
                                Planning for Cold Chain Equipment Gap
                              </Trans>
                            </span>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className={
                              this.isPathActive("/settings/planning-report")
                                ? "nav-link active"
                                : "nav-link"
                            }
                            to="/settings/planning-report"
                          >
                            <span>
                              <Trans>Planning Report</Trans>
                            </span>
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
                        this.state.aboutIGA
                          ? "nav-link menu-expanded"
                          : "nav-link"
                      }
                      onClick={() => this.toggleMenuState("aboutIGA")}
                      data-toggle="collapse"
                    >
                      <span className="icon-bg">
                        <i className="mdi mdi-table-large menu-icon"></i>
                      </span>
                      <span className="menu-title">
                        <span>
                          <Trans>About IGA</Trans>
                        </span>
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
                            <span>
                              <Trans>About IGA</Trans>
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </Collapse>
                  </li>
                </>
              )}
            </>
          )}
          {!isBrowser && (
            <div className="ml-4 mt-2">
              <li className="nav-item nav-profile ml-5  d-xl-flex">
                <Help />
              </li>
            </div>
          )}
          {/* Logout*/}
          <li className="nav-item sidebar-user-actions py-5">
            <div className="sidebar-user-menu">
              <Link
                to="/login"
                onClick={(event) => {
                  eventBus.dispatch("logout");
                  history.push("/login");
                }}
                className="nav-link"
              >
                <i
                  onClick={(event) => {
                    eventBus.dispatch("logout");
                  }}
                  className="mdi mdi-logout menu-icon"
                />
                <span className="menu-title">
                  <span>
                    <Trans>Logout</Trans>
                  </span>
                </span>
              </Link>
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
