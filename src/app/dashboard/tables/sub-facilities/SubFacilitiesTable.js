import React from "react";
import SubFacilitiesTableRow from "./SubFacilitiesTableRow";
import { Trans } from "react-i18next";

const SubFacilitiesTable = (props) => {
  const generateRows = () => {
    let rows = [];
    for (let i = 0; i < props.data.length; i++) {
      const variant = i % 2 === 0 ? "success" : "warning";

      rows.push(
        <SubFacilitiesTableRow
          key={i + 1}
          num={props.data[i].id}
          name={props.data[i].name}
          level={props.data[i].level_id}
          levelName={props.data[i].level_name}
          registered={+props.data[i].defined * 100}
          updatedOn={props.data[i].update}
          variant={variant}
        />
      );
    }
    return rows;
  };
  return (
    <div className={"py-2 px-2"}>
      <h4 className="card-title">
        {" "}
        <Trans>Sub Facilities</Trans>
      </h4>
      <p className="card-description">
        <Trans>list of all sub facilities </Trans>
      </p>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>
                <Trans>#</Trans>
              </th>
              <th>
                <Trans>Facility Name</Trans>
              </th>
              <th>
                <Trans>Levels</Trans>
              </th>
              <th>
                <Trans>Level Name</Trans>
              </th>
              <th>
                <Trans>Registered</Trans>
              </th>
              <th>
                <Trans>Last Update</Trans>
              </th>
            </tr>
          </thead>

          <tbody>{generateRows()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default SubFacilitiesTable;
