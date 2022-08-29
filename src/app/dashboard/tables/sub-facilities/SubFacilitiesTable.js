import React from "react";
import SubFacilitiesTableRow from "./SubFacilitiesTableRow";

import Card from "../../../shared/UI/Card";

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
    <Card>
      <h4 className="card-title"> Sub Facilities</h4>
      <p className="card-description">
        {" "}
        list of all sub facilities contained in the organizaion{" "}
      </p>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th> # </th>
              <th> Facility Name </th>
              <th> Level </th>
              <th> Level name </th>
              <th> Registered </th>
              <th> Last Update </th>
            </tr>
          </thead>

          <tbody>{generateRows()}</tbody>
        </table>
      </div>
    </Card>
  );
};

export default SubFacilitiesTable;
