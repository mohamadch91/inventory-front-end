import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { p } from 'react-i18next';

class Navbar extends Component {
  toggleOffcanvas() {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
  }
  render () {
    return (
      <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <Link className="navbar-brand brand-logo" to="/"><img src={require('../../assets/images/logo.svg')} alt="logo" /></Link>
          <Link className="navbar-brand brand-logo-mini" to="/"><img src={require('../../assets/images/logo-mini.svg')} alt="logo" /></Link>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-stretch">
          <button className="navbar-toggler navbar-toggler align-self-center" type="button" onClick={ () => document.body.classList.toggle('sidebar-icon-only') }>
            <span className="mdi mdi-menu"></span>
          </button>
          <div className="search-field d-none d-md-block">
            <form className="d-flex align-items-center h-100" action="#">
              <div className="input-group">
                <div className="input-group-prepend bg-pparent">
                  <i className="input-group-text border-0 mdi mdi-magnify"></i>
                </div>
                <input type="text" className="form-control bg-pparent border-0" placeholder="Search products"/>
              </div>
            </form>
          </div>
          <ul className="navbar-nav navbar-nav-right">
            <li className="nav-item nav-profile d-none d-xl-flex">
              <Dropdown alignRight>
                <Dropdown.Toggle className="nav-link count-indicator">
                  <p>Reports</p>
                </Dropdown.Toggle>
                <Dropdown.Menu className="preview-list navbar-dropdown">
                  <Dropdown.Item className="dropdown-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <i className="mdi mdi-file-pdf mr-2"></i><p>PDF</p>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                  <i className="mdi mdi-file-excel mr-2"></i><p>Excel</p>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <i className="mdi mdi-file-word mr-2"></i><p>doc</p>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item nav-profile d-none d-xl-flex">
              <Dropdown alignRight>
                <Dropdown.Toggle className="nav-link count-indicator">
                  <p>Projects</p>
                </Dropdown.Toggle>
                <Dropdown.Menu className="preview-list navbar-dropdown">
                  <Dropdown.Item className="dropdown-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <i className="mdi mdi-eye-outline mr-2"></i><p>View Project</p>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <i className="mdi mdi-pencil-outline mr-2"></i><p>Edit Project</p>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item nav-profile nav-language d-none d-lg-flex">
              <Dropdown alignRight>
                <Dropdown.Toggle className="nav-link count-indicator">
                  <div className="nav-language-icon">
                    <i className="flag-icon flag-icon-us" title="us" id="us"></i>
                  </div>
                  <div className="nav-language-text">
                    <p className="mb-1 text-black"><p>English</p></p>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="preview-list navbar-dropdown">
                  <Dropdown.Item className="dropdown-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="nav-language-icon mr-2">
                      <i className="flag-icon flag-icon-ae" title="ae" id="ae"></i>
                    </div>
                    <div className="nav-language-text">
                      <p className="mb-1 text-black"><p>Arabic</p></p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="nav-language-icon mr-2">
                      <i className="flag-icon flag-icon-gb" title="GB" id="gb"></i>
                    </div>
                    <div className="nav-language-text">
                      <p className="mb-1 text-black"><p>English</p></p>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>

            <li className="nav-item nav-profile nav-language">
              <Dropdown alignRight>
                <Dropdown.Toggle className="nav-link count-indicator">
                  <div className="nav-profile-img">
                      <img src={require("../../assets/images/faces/face28.png")} alt="profile" />
                    </div>
                    <div className="nav-profile-text">
                      <p className="mb-1 text-black"><p>Henry Klein</p></p>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="preview-list navbar-dropdown">
                  <div className="p-3 text-center bg-primary">
                    <img className="img-avatar img-avatar48 img-avatar-thumb" src={require("../../assets/images/faces/face28.png")} alt=""/>
                  </div>
                  <div className="p-2">
                    <h5 className="dropdown-header text-uppercase pl-2 text-dark"><p>User Options</p></h5>
                    <Dropdown.Item className="dropdown-item d-flex align-items-center justify-content-between" href="!#" onClick={evt =>evt.preventDefault()}>
                      <span><p>Inbox</p></span>
                      <span className="p-0">
                        <span className="badge badge-primary">3</span>
                        <i className="mdi mdi-email-open-outline ml-1"></i>
                      </span>
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item d-flex align-items-center justify-content-between" href="!#" onClick={evt =>evt.preventDefault()}>
                      <span><p>Profile</p></span>
                      <span className="p-0">
                        <span className="badge badge-success">1</span>
                        <i className="mdi mdi-account-outline ml-1"></i>
                      </span>
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item d-flex align-items-center justify-content-between" href="!#" onClick={evt =>evt.preventDefault()}>
                      <span><p>Settings</p></span>
                      <i className="mdi mdi-settings"></i>
                    </Dropdown.Item>
                    <div role="separator" className="dropdown-divider"></div>
                    <h5 className="dropdown-header text-uppercase  pl-2 text-dark mt-2"><p>Actions</p></h5>
                    <Dropdown.Item className="dropdown-item d-flex align-items-center justify-content-between" href="!#" onClick={evt =>evt.preventDefault()}>
                      <span><p>Lock Account</p></span>
                      <i className="mdi mdi-lock ml-1"></i>
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item d-flex align-items-center justify-content-between" href="!#" onClick={evt =>evt.preventDefault()}>
                      <span><p>Log Out</p></span>
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
                  <h6 className="p-3 bg-primary text-white py-4 mb-0">Messages</h6>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <img src={require("../../assets/images/faces/face4.jpg")} alt="user" className="profile-pic"/>
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject ellipsis mb-1 font-weight-normal"><p>Mark send you a message</p></h6>
                      <p className="text-gray mb-0">
                        1 <p>Minutes ago</p>
                      </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <img src={require("../../assets/images/faces/face2.jpg")} alt="user" className="profile-pic"/>
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject ellipsis mb-1 font-weight-normal"><p>Cregh send you a message</p></h6>
                      <p className="text-gray mb-0">
                        15 <p>Minutes ago</p>
                      </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <img src={require("../../assets/images/faces/face3.jpg")} alt="user" className="profile-pic"/>
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject ellipsis mb-1 font-weight-normal"><p>Profile picture updated</p></h6>
                      <p className="text-gray mb-0">
                        18 <p>Minutes ago</p>
                      </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <h6 className="p-3 mb-0 text-center cursor-pointer">4<p> new messages</p></h6>
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
                  <h6 className="p-3 mb-0 bg-primary text-white py-4"><p>Notifications</p></h6>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-success">
                        <i className="mdi mdi-calendar"></i>
                      </div>
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject font-weight-normal mb-1"><p>Event today</p></h6>
                      <p className="text-gray ellipsis mb-0"> <p>Just a reminder that you have an event today</p> </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-warning">
                        <i className="mdi mdi-settings"></i>
                      </div>
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject font-weight-normal mb-1"><p>Settings</p></h6>
                      <p className="text-gray ellipsis mb-0">
                      <p>Update dashboard</p>
                      </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-info">
                        <i className="mdi mdi-link-variant"></i>
                      </div>
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject font-weight-normal mb-1"><p>Launch Admin</p></h6>
                      <p className="text-gray ellipsis mb-0">
                      <p>New admin wow!</p>
                      </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <h6 className="p-3 mb-0 text-center cursor-pointer"><p>See all notifications</p></h6>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
          <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" onClick={this.toggleOffcanvas}>
            <span className="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
