
import './css/login.css'
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Form } from 'react-bootstrap';
import { connect } from "react-redux";
import { login } from "../actions/auth";
import { Link } from "react-router-dom";

import EventBus from "../common/EventBus";
import PropTypes from "prop-types";

import {Toast} from 'react-bootstrap';
// import { withTranslation } from "react-i18next";
import { withRouter } from 'react-router-dom';
import toast from 'react-hot-toast';



class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
   this.alerthandle=this.alerthandle.bind(this);
    this.state = {
      username: "",
      password: "",
      content:"",
      loading: false,
      name: "",
      values: {
        showPassword: false,
      },
      snackopen:false,
      loadfile:false,
      type:"success",
      progress:0,
      source:null,
      open:false
    };
  }
  alerthandle(message,type){
    this.setState({content:message,type:type,snackopen:true})
  }

  onChangeUsername(e) {
    console.log(e.target.value);
    this.setState({
      username: e.target.value,
      name: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  
   handleLogin(e) {
    e.preventDefault();

    this.setState({
      loading: true,
    });

   
    if(this.state.username==""){
      toast.error("Please enter username");
      // this.alerthandle("Username is required","error")
      this.setState({
        loading: false,
      });
      return;

    }
    if(this.state.password==""){
      toast.error("Password is required")
      // this.alerthandle("Password is required","alert")
      this.setState({
        loading: false,
      });
      return;
    }
    const { dispatch, history } = this.props;

      dispatch(login(this.state.username, this.state.password))
        .then((res) => {
          toast.success("Login Successfull");
          // this.alerthandle("Login Successful","success");
          
          history.push("/dashboard");
          window.location.reload();
        })
        .catch((err) => {
          toast.error("Login Failed");
          // this.alerthandle("Login failed ","alert")
          this.setState({
            loading: false,
          });
        });
 
  }
  handleClosesnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({snackopen:false})
  };
  handleClickShowPassword = () => {
    this.setState({
      values: {
        ...this.state.values,
        showPassword: !this.state.values.showPassword,
      },
    });
    // setValues({
    //   ...values,
    //   showPassword: !values.showPassword,
    // });
  };

  handleMouseDownPassword(event) {
    event.preventDefault();
  }

  render() {
    const { isLoggedIn, message } = this.props;
    console.log(isLoggedIn);
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
                Inventory and Gap analyses system <br />
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
                        Username
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
                        Password
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

                    <div className="form-check d-flex justify-content-center mb-4">
                      {/* <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                  <label className="form-check-label" for="form2Example33">
                    Subscribe to our newsletter
                  </label> */}
                    </div>

                    <button
                      type="submit"
                      className="btn sign btn-primary btn-block mb-4"
                    >
                      sign in
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
        <Toast
          style={{
            position: "absolute",
            top: "90vh",
            right: "18vw",
            backgroundColor:
              this.state.type == "success" ? "hsl(218, 81%, 95%)" : "#F8D7DA",
            color: "#000",
          }}
          onClose={(e) => {
            this.handleClosesnack(e);
          }}
          show={this.state.snackopen}
          delay={3000}
          autohide
          className="d-inline-block m-1"
          bg={this.state.type}
        >
          <Toast.Body>{this.state.content}</Toast.Body>
        </Toast>
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
