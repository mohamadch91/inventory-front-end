import React from "react";

const LevelsTableRow = (props) => {
  return (
    <tr>
      <td>
        <label className="badge badge-info"> {props.level} </label>{" "}
      </td>
      <td>{props.levelName}</td>
      <td>{props.facilitiesNum}</td>
      <td>{props.subFacilitiesNum}</td>
      <td>{props.defSubFacilitiesNum}</td>
    </tr>
  );
};

export default LevelsTableRow;
