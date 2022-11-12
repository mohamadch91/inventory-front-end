import LevelsTableRow from "./LevelsTableRow";
import React from "react";
import { Trans } from "react-i18next";
/**
 * @param  {JSON} props
 * level table for show level facility datas
 */
const LevelsTable = (props) => {
  return (
    <div className={"px-2 py-5"}>
      <h2 className="card-title  text-black text-bold">
        {" "}
        🏢 <Trans>Facilities</Trans>
      </h2>
      <p className="card-description  text-black text-bold fs-5">
        {" "}
        <Trans>Facilities owned separated by levels</Trans>
      </p>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="text-bold fs-5">
                <Trans>Levels</Trans>
              </th>
              <th className="text-bold ">
                <Trans>Level Name</Trans>
              </th>
              <th className="text-bold ">
                <Trans>Total number of facilities</Trans>
              </th>
              <th className="text-bold ">
                <Trans>Total number of sub-facilities</Trans>
              </th>
              <th className="text-bold ">
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
