import LevelsTableRow from "./LevelsTableRow";
import React from "react";

const LevelsTable = (props) => {
  console.log("here");
  console.log(props.data);
  return (
    <div>
      <h4 className="card-title"> 🏢 Facilities</h4>
      <p className="card-description"> Facilities owned separated by levels</p>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Level</th>
              <th>Level Name</th>
              <th>Total number of facilities</th>
              <th>Total number of sub-facilities</th>
              <th>Number of Defined sub-level facilities</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((item, i) => {
              return (
                <LevelsTableRow
                  key={i}
                  level={item.level_id}
                  levelName={item.level_name}
                  facilitiesNum={item.total}
                  subFacilitiesNum={item.sub}
                  defSubFacilitiesNum={item.def}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default LevelsTable;
