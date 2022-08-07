import React, { Component } from 'react';
// import { p } from 'react-i18next';

class Footer extends Component {
  render () {
    return (
      <footer className="footer">
        <div className="container-fluid">
          <div className="d-sm-flex justify-content-center justify-content-sm-between py-2 w-100">
            <span className="text-muted text-center text-sm-left d-block d-sm-inline-block"><p>Copyright</p> © <a href="https://www.bootstrapdash.com/" target="_blank" rel="noopener noreferrer"><p>bootstrapdash.com</p> </a>2020</span>
            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"><p>Free</p> <a href="https://www.bootstrapdash.com/react-admin-templates/" target="_blank" rel="noopener noreferrer"> <p>react admin</p> </a> <p>templates from BootstrapDash.com.</p>  </span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;