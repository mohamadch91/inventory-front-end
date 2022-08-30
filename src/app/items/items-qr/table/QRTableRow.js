import React from "react";
import { TableCell } from "@mui/material";
import { QRCodeSVG } from "qrcode.react";
import "../../../styles/table.scss";

const QRTableRow = (props) => {
  return (
    <tr>
      <TableCell className="col-sm-2">{props?.itemClass}</TableCell>
      <TableCell className="col-sm-2">{props?.itemType}</TableCell>
      <TableCell className="col-sm-2">{props?.pqsCode}</TableCell>
      <TableCell className="col-sm-2">{props?.code}</TableCell>
      <TableCell className="qr">
        <QRCodeSVG value={props?.qr} size={128} />
      </TableCell>
    </tr>
  );
};

export default QRTableRow;
