
import React from 'react'
import {ProgressBar} from "react-bootstrap";
const SubFacilitiesTableRow = (props)=>{

    return(
        <tr>
            <td> {props.num} </td>

            <td className="py-1">
                {props.name}
            </td>

            <td>
                <label className="badge badge-info"> {props.level} </label> {`   ${props.levelName}`} </td>
            <td>
                <ProgressBar variant={props.variant} now={props.registered} />
            </td>
            <td> {props.total} </td>
            <td> {props.lastChangesOn} </td>
            <td> {props.lastLogin} </td>

        </tr>
    )
}
export default SubFacilitiesTableRow;