import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Error403 extends Component {
  render() {
    return (
      <div>
        <div className="d-flex align-items-center text-center error-page bg-primary pt-5 pb-4 h-100">
          <div className="row flex-grow">
            <div className="col-lg-8 mx-auto text-white">
              <div className="row align-items-center d-flex flex-row">
                {/* 
                  Maximum sub facilityies has been reached!!!!!
                  
                  2-

               */}
                <div className="col-lg-6 error-page-divider text-lg-left pl-lg-4">
                  <h2>SORRY!</h2>
                  <h3 className="font-weight-light">
                    you cant't delete a facility which has sub facilities and
                    items!!!!!!!!!
                  </h3>
                  <h3 className="font-weight-light">
                    Please change values and try again!
                  </h3>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-12 text-center mt-xl-2">
                  <Link
                    className="text-white font-weight-medium"
                    to="/dashboard"
                  >
                    Back to home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Error403;