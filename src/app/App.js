import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./App.scss";
import { connect } from "react-redux";
import AppRoutes from "./AppRoutes";
import Navbar from "./shared/Navbar";
import Sidebar from "./shared/Sidebar";
import SettingsPanel from "./shared/SettingsPanel";
import Footer from "./shared/Footer";
// import { withTranslation } from "react-i18next";
import { clearMessage } from "./actions/message";
import eventBus from "./common/EventBus";
import { logout } from "./actions/auth";
import { history } from "./helpers/history";
import { Toaster } from "react-hot-toast";
import { Redirect } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };

    history.listen((location) => {
      props.dispatch(clearMessage()); // clear message when changing location
    });
  }
  state = {};
  componentDidMount() {
    const user = this.props.user;

    if (user) {
      this.setState({
        currentUser: user,
        // showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        // showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }

    eventBus.on("logout", () => {
      this.logOut();
    });
    this.onRouteChanged();
  }
  logOut() {
    console.log("salam")
     
    this.props.dispatch(logout());
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }
  render() {
    // console.log(this.state.currentUser);

    let navbarComponent = !this.state.isFullPageLayout ? <Navbar /> : "";
    let sidebarComponent = !this.state.isFullPageLayout ? <Sidebar /> : "";
    let SettingsPanelComponent = !this.state.isFullPageLayout ? (
      <SettingsPanel />
    ) : (
      ""
    );
    let footerComponent = !this.state.isFullPageLayout ? <Footer /> : "";
    return (
      <div className="container-scroller">
        <Toaster />
        {navbarComponent}
        <div className="container-fluid page-body-wrapper">
          {sidebarComponent}
          <div className="main-panel">
            <div className="content-wrapper">
              <AppRoutes />
              {SettingsPanelComponent}
            </div>
            {footerComponent}
          </div>
        </div>
      </div>
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    // const { i18n } = this.props;
    // const body = document.querySelector('body');
    // if(this.props.location.pathname === '/layout/RtlLayout') {
    //   body.classList.add('rtl');
    //   // i18n.changeLanguage('ar');
    // }
    // else {
    //   body.classList.remove('rtl')
    //   // i18n.changeLanguage('en');
    // }
    window.scrollTo(0, 0);
    const fullPageLayoutRoutes = [
      "/",
      "/login",
      "/user-pages/login-2",
      "/user-pages/register-1",
      "/user-pages/register-2",
      "/user-pages/lockscreen",
      "/error-pages/error-404",
      "/error-pages/error-500",
      "/general-pages/landing-page",
    ];
    for (let i = 0; i < fullPageLayoutRoutes.length; i++) {
      if (this.props.location.pathname === fullPageLayoutRoutes[i]) {
        this.setState({
          isFullPageLayout: true,
        });
        document
          .querySelector(".page-body-wrapper")
          .classList.add("full-page-wrapper");
        break;
      } else {
        this.setState({
          isFullPageLayout: false,
        });
        document
          .querySelector(".page-body-wrapper")
          .classList.remove("full-page-wrapper");
      }
    }
  }
}
function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}
export default connect(mapStateToProps)(withRouter(App));
