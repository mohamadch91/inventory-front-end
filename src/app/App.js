import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./App.scss";
import { connect } from "react-redux";
import AppRoutes from "./AppRoutes";
import Navbar from "./shared/Navbar";
import Sidebar from "./shared/Sidebar";

import Footer from "./shared/Footer";
import { withTranslation } from "react-i18next";
import { clearMessage } from "./actions/message";
import eventBus from "./common/EventBus";
import { logout } from "./actions/auth";
import { history } from "./helpers/history";
import { Toaster } from "react-hot-toast";
/**
 *   App component is the main component of the application
 * @param {object} props
 * @param {object} props.user user object
 * we use navbar side bar and footer in this component
 * @returns {JSX.Element} App component
 * @example
 * <App />
 */
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      /**
       * @property {boolean} isFullPageLayout isFullPageLayout is a boolean value which is used to check if the current route is a full page layout or not
       * @property {object} currentUser currentUser is an object which contains the current user information
       * state is used to set the current user and check if the current user is admin or moderator
       */
      currentUser: undefined,
    };

    /**
     * @function logOut is used to log out the current user
     * @function onRouteChanged is used to check if the current route is a full page layout or not
     * @function componentDidMount is used to check if the current user is logged in or not
     * @function componentDidUpdate is used to check if the current route is changed or not
     * @function render is used to render the component
     *
     */
    history.listen((location) => {
      props.dispatch(clearMessage()); // clear message when changing location
    });
  }
  state = {};

  /**
   * @function componentDidMount is used to check if the current user is logged in or not
   * @returns {JSX.Element} App component
   */
  componentDidMount() {
    const user = this.props.user;

    if (user) {
      this.setState({
        currentUser: user,
      });
    }
    /**
     * @function onRouteChanged is used to check if the current route is a full page layout or not
     * define the logout event bus
     * for read event bus document please see common/EventBus.js
     */
    eventBus.on("logout", () => {
      this.logOut();
    });
    this.onRouteChanged();
  }

  /**
   * logOut is used to log out the current user and redirect to login page
   * dispatch logout action
   */
  logOut() {
    this.props.dispatch(logout());
    this.setState({
      currentUser: undefined,
    });
  }
  render() {
    let navbarComponent = !this.state.isFullPageLayout ? <Navbar /> : "";
    let sidebarComponent = !this.state.isFullPageLayout ? <Sidebar /> : "";

    let footerComponent = !this.state.isFullPageLayout ? <Footer /> : "";
    return (
      <div className="container-scroller">
        <Toaster />
        {navbarComponent}
        <div className="container-fluid page-body-wrapper">
          {sidebarComponent}
          {this.props.location.pathname !== "/" &&
          this.props.location.pathname !== "/login" ? (
            <div className="main-panel">
              <div className="content-wrapper">
                <AppRoutes />
              </div>
              {footerComponent}
            </div>
          ) : (
            <AppRoutes />
          )}
        </div>
      </div>
    );
  }
  /**
   * @param  {Object} prevProps previous props before update
   * change the route if update the props
   */
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    const { i18n } = this.props;

    window.scrollTo(0, 0);
    /**
     * @constant {Array} fullPageLayoutRoutes is an array which contains the full page layout routes
     */
    const fullPageLayoutRoutes = [
      "/",
      "/login",
      "/error-pages/error-404",
      "/error-pages/error-500",
    ];
    /**
     * check if the current route is a full page layout or not
     * if the current route is a full page layout then set the isFullPageLayout state to true
     * else set the isFullPageLayout state to false
     * @constant {boolean} isFullPageLayout is a boolean value which is used to check if the current route is a full page layout or not
     *
     */
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
/**
 * @param  {state} state state is the state of the redux store
 * @returns {object} user object
 */
function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}
export default connect(mapStateToProps)(
  withTranslation("translation")(withRouter(App))
);
