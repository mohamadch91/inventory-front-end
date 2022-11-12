import React from "react";
/**
 * @param  {OBJECT} props
 * component for show each row in level table
 */
const LevelsTableRow = (props) => {
  return (
    <tr>
      <td key={"A"}>
        <label className="badge badge-info"> {props.level} </label>{" "}
      </td>
      <td key={"B"}>{props.levelName}</td>
      <td key={"C"}>{props.facilitiesNum}</td>
      <td key={"D"}>{props.subFacilitiesNum}</td>
      <td key={"E"}>{props.defSubFacilitiesNum}</td>
    </tr>
  );
};

export default LevelsTableRow;
