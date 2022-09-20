import { Link } from "react-router-dom";
import "../styles/inputs.scss";
import { Trans } from "react-i18next";

function Maintenance() {
  return (
    <div>
      <h3 className="page-title mb-3">
        <Trans>Maintenance settings</Trans>
      </h3>
      <div className="mt-3">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-12 col-lg-4">
                <Link to="/settings/mtns_setting1">
                  <button className="btn btn-primary w-100 py-3">
                    <Trans>Maintenance service</Trans>
                  </button>
                </Link>
              </div>
              <div className="col-sm-12 col-lg-4">
                <Link to="/settings/mtns_setting3">
                  <button className="btn btn-primary w-100 py-3">
                    <Trans>Maintenance group</Trans>
                  </button>
                </Link>
              </div>
              <div className="col-sm-12 col-lg-4">
                <Link to="/settings/mtns_setting2">
                  <button className="btn btn-primary w-100 py-3">
                    <Trans>Maintenance service group assignment</Trans>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maintenance;
