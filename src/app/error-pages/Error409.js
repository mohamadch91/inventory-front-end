import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";

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
                  <h2><Trans>SORRY</Trans>!</h2>
                  <h3 className="font-weight-light">
                    <Trans>you can't delete a facility which has sub facilities and
                    items</Trans>!!!!!!!!!
                  </h3>
                  <h3 className="font-weight-light">
                    <Trans>Please change values and try again</Trans>!
                  </h3>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-12 text-center mt-xl-2">
                  <Link
                    className="text-white font-weight-medium"
                    to="/dashboard"
                  >
                    <Trans>Back to home</Trans>
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
