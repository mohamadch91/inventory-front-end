import React from "react";
import { TableCell, TableRow } from "@mui/material";
import { QRCodeSVG } from "qrcode.react";
const QRTableRow = (props) => {
  return (
    <TableRow>
      <TableCell className="col-sm-2">{props.itemClass}</TableCell>
      <TableCell className="col-sm-2">{props.itemCategory}</TableCell>
      <TableCell className="col-sm-2">{props.code}</TableCell>
      <TableCell className="col-sm-2">{props.model}</TableCell>
      <TableCell className="col-sm-2">
        <QRCodeSVG value={"test"} />
      </TableCell>
    </TableRow>
  );
};

export default QRTableRow;
