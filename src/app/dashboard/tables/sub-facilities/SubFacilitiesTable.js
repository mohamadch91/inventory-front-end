import React from "react";
import SubFacilitiesTableRow from "./SubFacilitiesTableRow";
import { Trans } from "react-i18next";
/**
 * @param  {JOSN} props
 * component for show sub facility table in dashboard
 */
const SubFacilitiesTable = (props) => {
  const generateRows = () => {
    let rows = [];
    for (let i = 0; i < props.data.length; i++) {
      let variant = "";
      let def = props.data[i].defined * 100;
      if (def < 20) {
        variant = "danger";
      } else if (def < 50) {
        variant = "warning";
      } else if (def < 80) {
        variant = "info";
      } else {
        variant = "success";
      }

      rows.push(
        <SubFacilitiesTableRow
          key={i + 1}
          num={props.data[i].code}
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
      <h2 className="card-title  text-black text-bold">
        {" "}
        <Trans>Sub Facilities</Trans>
      </h2>
      <p className="card-description  text-black text-bold fs-5">
        <Trans>List of all sub-facilities</Trans>
      </p>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>
                <Trans>Code</Trans>
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
                <Trans>Sub facilities registered</Trans>
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
