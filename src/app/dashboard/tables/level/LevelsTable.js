import LevelsTableRow from "./LevelsTableRow";
import React from "react";
const DUMMY = [
  {
    level: 1,
    levelName: "Central 1",
    facilitiesNum: 11,
    subFacilitiesNum: 21,
    defSubFacilitiesNum: 141,
  },
  {
    level: 2,
    levelName: "Directorare",
    facilitiesNum: 21,
    subFacilitiesNum: 321,
    defSubFacilitiesNum: 221,
  },
  {
    level: 2,
    levelName: "Directorare",
    facilitiesNum: 21,
    subFacilitiesNum: 321,
    defSubFacilitiesNum: 221,
  },
  {
    level: 2,
    levelName: "Directorare",
    facilitiesNum: 21,
    subFacilitiesNum: 321,
    defSubFacilitiesNum: 221,
  },
];
const FacilitiesTable = () => {
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
            {DUMMY.map((item) => {
              return (
                <LevelsTableRow
                  level={item.level}
                  levelName={item.levelName}
                  facilitiesNum={item.facilitiesNum}
                  subFacilitiesNum={item.subFacilitiesNum}
                  defSubFacilitiesNum={item.defSubFacilitiesNum}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default FacilitiesTable;
