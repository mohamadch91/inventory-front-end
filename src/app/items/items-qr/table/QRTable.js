import React from "react";
import SharedTable from "../../../shared/SharedTable";
import "../../../styles/table.scss";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { Trans } from "react-i18next";
import { useQuery } from "react-query";
import ItemService from "../../../services/item.service";
import Spinner from "../../../shared/Spinner";
import QRTableRow from "./QRTableRow";

const QRTable = (props) => {
  const { data, isLoading } = useQuery(
    ["filter"],
    async () => {
      const res = await ItemService.getQrTableData(props.query);
      console.log("res.data is");
      console.log(res.data);
      return res.data;
    },
    {
      refetchOnMount: true,
    }
  );

  if (isLoading) {
    return <Spinner />;
  }

  const tableRows = data.map((el, i) => {
    return (
      <QRTableRow
        key={i}
        itemClass={el.item_class}
        itemType={el.item_type}
        pqsCode={el.pqs_code}
        code={el.code}
        qr={el.qr}
      />
    );
  });
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
                    <Trans> PQS code</Trans>
                  </TableCell>
                  <TableCell className="col-sm-2">
                    <Trans>code</Trans>
                  </TableCell>
                  <TableCell className="col-sm-2">
                    <Trans>QR Code</Trans>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{tableRows}</TableBody>
            </SharedTable>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QRTable;
