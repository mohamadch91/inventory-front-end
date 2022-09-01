import React from "react";
import { Link } from "react-router-dom";

const WarningItem = (props) => {
  return (
    <div className="d-flex mb-3">
      <div>
        <p className="activity-info bg-warning" style={{ color: "#000000" }}>
          {" "}
          ⚠{" "}
        </p>
      </div>
      <div className="activity-details">
        <Link
          className={`p-0 btn btn-link btn-fw text-muted ${
            props.count === 0 ? "pe-none" : ""
          } `}
          style={{ fontSize: "16px", textDecorationColor: "#777" }}
          to={"dashboard/warnings-info/" + props.param}
        >
          {`(${props.count})  `}
          {props.title}
          <label
            className={`badge badge-danger opacity-${props.badgeOp} `}
            style={{ fontSize: "12px" }}
          >
            {props.badge}
          </label>
          {props.maxExtended && (
            <label
              className={`badge badge-warning  `}
              style={{ fontSize: "12px" }}
            >
              {" "}
              {props.maxExtended} days extended
            </label>
          )}
        </Link>
      </div>
    </div>
  );
};

export default WarningItem;
