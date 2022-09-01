import React from "react";
import { Link } from "react-router-dom";

const LogBookItem = () => {
  return (
    <div className="d-flex mb-3">
      <div>
        <p className="activity-info bg-info" style={{ color: "#000000" }}>
          i
        </p>
      </div>
      <div className="activity-details">
        <Link
          className={`p-0 btn btn-link btn-fw text-muted `}
          style={{ fontSize: "16px", textDecorationColor: "#777" }}
          to={"dashboard/maintenanceLog"}
        >
          Item Maintenance Logbook
        </Link>
      </div>
    </div>
  );
};

export default LogBookItem;
