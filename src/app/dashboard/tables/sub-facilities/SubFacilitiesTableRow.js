import React from "react";
import { ProgressBar } from "react-bootstrap";
/**
 * @param  {JSONOBJECT} props
 * for show each row in subfac table in dashbaord
 * 
 */
const SubFacilitiesTableRow = (props) => {
  const updatedOn = props.updatedOn.split("T")[0].replace(/-/g, " / ");

  return (
    <tr>
      <td key={"E"}> {props.num} </td>

      <td key={"F"} className="py-1">
        {props.name}
      </td>

      <td key={"G"}>
        <label className="badge badge-info"> {props.level} </label>
      </td>
      <td key={"Z"} className="py-1">
        {` ${props.levelName}`}
      </td>

      <td key={"H"}>
        <ProgressBar variant={props.variant} now={props.registered} />
      </td>
      <td key={"J"}> {updatedOn} </td>
    </tr>
  );
};
export default SubFacilitiesTableRow;
