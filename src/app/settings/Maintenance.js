import { Link } from "react-router-dom";
import "../styles/inputs.scss";

function Maintenance() {
  return (
    <div>
      <h3 className="page-title mb-3">Maintenance settings</h3>
      <div className="mt-3">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-12 col-lg-6">
                <Link to="/settings/mtns_setting1">
                  <button className="btn btn-primary w-100 py-3">
                    Maintenance Service
                  </button>
                </Link>
              </div>
              <div className="col-sm-12 col-lg-6">
                <Link to="/settings/mtns_setting2">
                  <button className="btn btn-primary w-100 py-3">
                    Maintenance Service Group
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
