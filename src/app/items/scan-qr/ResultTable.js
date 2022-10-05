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
      <div className="column">
        <div className="row">
          <div className="col-6">
            <h4 className="text-black">
              <Trans>Item class</Trans>
            </h4>
          </div>
          <div className="col-6">
            <h4 className="text-black">{data[0]?.item_class}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h4 className="text-black">
              <Trans>Items category</Trans>
            </h4>
          </div>
          <div className="col-6">
            <h4 className="text-black">{data[0]?.item_type}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h4 className="text-black">
              <Trans>PQS code</Trans>
            </h4>
          </div>
          <div className="col-6">
            <h4 className="text-black">{data[0]?.pqs_code}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h4 className="text-black">
              <Trans>Code</Trans>
            </h4>
          </div>
          <div className="col-6">
            <h4 className="text-black">{data[0]?.code}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultTable;
