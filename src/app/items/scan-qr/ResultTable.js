import React from "react";
import { useQuery } from "react-query";
import ItemService from "../../services/item.service";
import { Spinner } from "react-bootstrap";
import { Trans } from "react-i18next";
import EmptyDataBaseMessage from "../../shared/UI/EmptyDataBaseMessage";

const ResultTable = (props) => {
  const { data, isLoading: formDataIsLoading } = useQuery(
    ["result-table"],
    async () => {
      const res = await ItemService.getQrData("code=" + props.QRString);
      return res.data;
    },
    {
      refetchOnMount: true,
    }
  );

  if (formDataIsLoading) {
    return <Spinner />;
  }
  if (!formDataIsLoading && data.length === 0) {
    return (
      <EmptyDataBaseMessage
        message={"No data was found with the desired QR code"}
      />
    );
  }

  return (
    <div className="table-responsive mt-3">
      <table className="table">
        <thead>
          <tr>
            <th>
              <Trans>Item Class</Trans>
            </th>
            <th>
              <Trans>Item Category</Trans>
            </th>
            <th>
              <Trans>PQS code</Trans>
            </th>
            <th>
              <Trans>Code</Trans>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data[0]?.item_class}</td>
            <td>{data[0]?.item_type}</td>
            <td>{data[0]?.pqs_code}</td>
            <td>{data[0]?.code}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
