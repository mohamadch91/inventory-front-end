import React from "react";
import SharedTable from "../../../shared/SharedTable";
import "../../../styles/table.scss";
import { TableCell, TableHead, TableRow } from "@mui/material";
import { Trans } from "react-i18next";

const QRTable = () => {
  return (
    <div>
      <div className="card mt-4">
        <div className="card-body">
          <div className="table-container">
            <SharedTable>
              <TableHead>
                <TableRow>
                  <TableCell className="col-sm-2">
                    <Trans>Item class</Trans>
                  </TableCell>
                  <TableCell className="col-sm-2">
                    <Trans>Item category</Trans>
                  </TableCell>
                  <TableCell className="col-sm-2">
                    <Trans>Code</Trans>
                  </TableCell>
                  <TableCell className="col-sm-2">
                    <Trans>Model</Trans>
                  </TableCell>
                  <TableCell className="col-sm-2">
                    <Trans>QR Code</Trans>
                  </TableCell>
                </TableRow>
              </TableHead>
            </SharedTable>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QRTable;
