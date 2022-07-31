import Header from  '../components/header.js'
import PersistentDrawerLeft from '../components/drawer.js'
import { styled, useTheme } from '@mui/material/styles';
import React from 'react';
import './css/home.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
  } from 'react-router-dom';
  
function Home() {

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <section className="home" id="home">
        <div id="home_main" className=" ">
          <div id="navbar d-flex">
            <div className="d-flex justify-content-between mb-3">
              {/* {this.state.currentUser ? (
                <div className="w-50">
                  <button onClick={(event)=>{
                    // EventBus.dispatch("logout");
                    window.location.reload();
                  }} className="signup-button">Log out</button>
                  <button onClick={(event)=>{
                    // history.push("/profile");
                  }} className="normal-button">Profile</button>
                  <button className="normal-button">About </button>
                  <button className="normal-button">Service</button>
                  <button className="normal-button">Contact</button>
                </div>
              ) : ( */}
                <div  className="w-75">
                  <button   className=" signup-button">
                  
          <Link to="login">Sign in</Link>
      </button>
                  <button className="signup-button">Sign up</button>
                  <button className="normal-button">About </button>
                  <button className="normal-button">Service</button>
                  <button className="normal-button">Contact</button>
                </div>
              {/* )} */}
            </div>
          </div>
          <div id="main_content_home" className="d-flex flex-row  justify-content-between  ">
           
            <div>
              <img id="home-img" src={require("../assets/images/who-emblem.png")}></img>
            </div>
            <div id="home_content" style={{marginLeft: "20%"}}>
                <div className="home_text">
              <h1 className=" text-primary font-weight-bold">Inventory</h1>
              <h2>and </h2>
              <h2> Gap analyses </h2>
              <button>get started</button>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Home;
