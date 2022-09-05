import React from "react";
import SharedTable from "../../../shared/SharedTable";
import "../../../styles/table.scss";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { Trans } from "react-i18next";
import { useQuery } from "react-query";
import ItemService from "../../../services/item.service";
import Spinner from "../../../shared/Spinner";
import QRTableRow from "./QRTableRow";

const QRTable = React.forwardRef((props, refToPrint) => {
  const { data, isLoading } = useQuery(
    ["filter", props.queryString],
    async () => {
      const res = await ItemService.getQrTableData(props.queryString);
      console.log(res.data);
      return res?.data;
    },
    {
      refetchOnMount: true,
    }
  );

  if (isLoading) {
    return <Spinner />;
  }
  if (data.length === 0) {
    return (
      <div className="alert alert-danger w-50 text-center m-auto" role="alert">
        <p className="display-4">
          <Trans>
            Could not find any data with the information provided 😟
          </Trans>
        </p>
      </div>
    );
  }

  const tableRows = data.map((el, i) => {
    return (
      <QRTableRow
        key={i}
        itemClass={el?.item_class}
        itemType={el?.item_type}
        pqsCode={el?.pqs_code}
        code={el?.code}
        qr={el?.qr}
      />
    );
  });

  return (
    <div ref={refToPrint} className={"mt-5 "} style={{ color: "#000" }}>
      <div className={"text-center"}>
        <div>
          <h4>
            <Trans>Inventory and Gap Analysis System (IGA)</Trans>
          </h4>
        </div>
        <div>
          <h4>{JSON.parse(localStorage.getItem("country"))?.country}</h4>
        </div>
      </div>

      <div className="card mt-4">
        <div className="card-body p-3 ">
          <div className="table-container-to-print">
            <SharedTable>
              <TableHead>
                <TableRow>
                  <TableCell className="col-sm-2">
                    <Trans>
                      <Trans>Item class</Trans>
                    </Trans>
                  </TableCell>
                  <TableCell className="col-sm-2">
                    <Trans>
                      <Trans>Item category</Trans>
                    </Trans>
                  </TableCell>
                  <TableCell className="col-sm-2">
                    <Trans>
                      <Trans>Model</Trans>
                    </Trans>
                  </TableCell>
                  <TableCell className="col-sm-2">
                    <Trans>
                      <Trans>code</Trans>
                    </Trans>
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
});
export default QRTable;
