import React from "react";
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";

const WarningItem = (props) => {
  return (
    <div className="d-flex mb-3">
      <div>
        <p className="activity-info bg-warning" style={{ color: "#000000" }}>
          {" "}
          ⚠{" "}
        </p>
      </div>
      <div className="activity-details" >
        <Link
          className={`p-0 btn btn-link btn-fw text-muted ${
            props.count === 0 ? "pe-none" : ""
          } `}
          style={{ fontSize: "16px", textDecorationColor: "#777" }}
          to={"dashboard/warnings-info/" + props.param}
        >
            {`(${props.count})  `}

            <Trans>{props.title}</Trans>
          <label
            className={`badge badge-danger opacity-${props.badgeOp} `}
            style={{ fontSize: "12px" }}
          >
             {"  "}
            <Trans>{props.badge}</Trans>
          </label>
          {props.maxExtended && (
            <label
              className={`badge badge-warning  `}
              style={{ fontSize: "12px" }}
            >
              <Trans>{props.maxExtended} days extended</Trans>
            </label>
          )}
        </Link>
      </div>
    </div>
  );
};

export default WarningItem;
