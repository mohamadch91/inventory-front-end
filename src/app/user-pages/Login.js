import "./css/login.css";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { login } from "../actions/auth";
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";

import EventBus from "../common/EventBus";
import PropTypes from "prop-types";

import { Toast } from "react-bootstrap";
// import { withTranslation } from "react-i18next";
import { withRouter } from "react-router-dom";
import toast from "react-hot-toast";

/**
 *   Login component is used to login the user
 * @param {object} props
 * @param {boolean} props.isLoggedIn isLoggedIn is a boolean value which is used to check if the user is logged in or not
 * @param {object} props.message message is an object which contains the message to be displayed
 * @returns {JSX.Element} Login component
 * @example
 * <Login />
 *
 */
class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      content: "",
      loading: false,
      name: "",
      values: {
        showPassword: false,
      },
      loadfile: false,
      type: "success",
      progress: 0,
      source: null,
      open: false,
    };
  }

  /**
   * @param  {event} e is an event
   * @function onChangeUsername is used to set the username in the state
   * change user username come from the form
   */
  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
      name: e.target.value,
    });
  }
  /**
   * @param  {event} e is an event
   * @function onChangePassword is used to set the password in the state
   * change user password come from the form
   */
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  /**
   * @param  {event} e is an event
   * @function handleLogin is used to login the user
   * if the user is logged in successfully then redirect to the home page
   * if the user is not logged in successfully then display the error message
   *
   *
   */
  handleLogin(e) {
    e.preventDefault();

    this.setState({
      loading: true,
    });

    if (this.state.username == "") {
      toast.error(<Trans>Please enter username</Trans>);
      this.setState({
        loading: false,
      });
      return;
    }
    if (this.state.password == "") {
      toast.error(<Trans>Password is required</Trans>);
      this.setState({
        loading: false,
      });
      return;
    }
    const { dispatch, history } = this.props;

    dispatch(login(this.state.username, this.state.password))
      .then((res) => {
        toast.success(<Trans>Login Successfull</Trans>);

        history.push("/dashboard");
        window.location.reload();
      })
      .catch((err) => {
        toast.error(<Trans>Login Failed</Trans>);
        this.setState({
          loading: false,
        });
      });
  }
  /**
   *
   * if you want add show password button please use this function
   * and uncomment the code in the render function
   */
  // handleClickShowPassword = () => {
  //   this.setState({
  //     values: {
  //       ...this.state.values,
  //       showPassword: !this.state.values.showPassword,
  //     },
  //   });

  // };

  // handleMouseDownPassword(event) {
  //   event.preventDefault();
  // }

  render() {
    const { isLoggedIn, message } = this.props;
    if (isLoggedIn) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <section className="background-radial-gradient overflow-hidden w-100">
        <div className="container mobile-padding px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row mobile gx-lg-5 align-items-center mb-5 new_row ">
            <div
              className="col-lg-6 mb-5 zero_margin mb-lg-0"
              style={{ Zindex: "10", marginRight: "10%" }}
            >
              <h1
                className="my-5 new-margin  display-5 fw-bold "
                style={{ color: "hsl(218, 81%, 95%)", fontSize: "30px" }}
              >
                <Trans>Inventory and Gap Analysis System</Trans> <br />
                <span style={{ color: "hsl(218, 81%, 75%)" }}></span>
              </h1>
              <img className="who" src="./who-emblem.png" />
            </div>

            <div className="offset-1 offset-sm-0 col-lg-4 zero_margin mb-5 mb-lg-0 position-relative mt-5">
              <div
                id="radius-shape-1"
                className="position-absolute rounded-circle shadow-5-strong"
              ></div>
              <div
                id="radius-shape-2"
                className="position-absolute shadow-5-strong"
              ></div>

              <div className="card bg-glass new-margin  mb-5 mt-5">
                <div className="card-body px-5 py-5 px-md-5 col-md-12">
                  <Form
                    onSubmit={this.handleLogin}
                    ref={(c) => {
                      this.form = c;
                    }}
                  >
                    <div className="form-outline mb-4 mt-2">
                      <label className="form-label" htmlFor="form3Example3">
                        <Trans>Username</Trans>
                      </label>
                      <input
                        onChange={(e) => {
                          this.onChangeUsername(e);
                        }}
                        type="text"
                        id="form3Example3"
                        className="form-control"
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example4">
                        <Trans>Password</Trans>
                      </label>
                      <input
                        onChange={(e) => {
                          this.onChangePassword(e);
                        }}
                        type="password"
                        id="form3Example4"
                        className="form-control"
                      />
                    </div>

                    <div className="form-check d-flex justify-content-center mb-4"></div>

                    <button
                      type="submit"
                      className="btn sign btn-primary btn-block mb-2"
                    >
                      <h3 className="m-auto">
                        <Trans>SIGN IN</Trans>{" "}
                      </h3>
                      {this.state.loading && (
                        <span className="mr-2 pr-1 pl-2 spinner-border spinner-border-sm"></span>
                      )}
                    </button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const { message } = state.message;
  return {
    isLoggedIn,
    message,
  };
}

export default connect(mapStateToProps)(Login);
