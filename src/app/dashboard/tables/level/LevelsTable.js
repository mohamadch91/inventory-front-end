import LevelsTableRow from "./LevelsTableRow";
import React from "react";
import { Trans } from "react-i18next";

const LevelsTable = (props) => {
  return (
    <div className={"px-2 py-5"}>
      <h4 className="card-title"> 🏢 <Trans>Facilities</Trans></h4>
      <p className="card-description"> <Trans>Facilities owned separated by levels</Trans></p>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>
                <Trans>Levels</Trans>
              </th>
              <th>
                <Trans>Level Name</Trans>
              </th>
              <th>
                <Trans>Total number of facilities</Trans>
              </th>
              <th>
                <Trans>Total number of sub-facilities</Trans>
              </th>
              <th>
                <Trans>Number of Defined sub-level facilities</Trans>
              </th>
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
