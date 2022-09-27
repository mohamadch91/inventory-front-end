import React, { Component } from 'react';
// import { span } from 'react-i18next';

class Footer extends Component {
  render () {
    return (
      <footer className="footer">
        <div className="container-fluid">
          <div className="d-sm-flex justify-content-center justify-content-sm-between py-2 text-black w-100">
            <span className=" text-center text-sm-left d-block d-sm-inline-block text-black">
              Supported by wVSSM Team © 2022
            </span>
            {/* <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"><span>Free</span> <a href="https://www.bootstrapdash.com/react-admin-templates/" target="_blank" rel="noopener noreferrer"> <span>react admin</span> </a> <span>templates from BootstrapDash.com.</span>  </span> */}
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;