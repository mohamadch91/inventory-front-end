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
      console.log(props.QRString);
      if(props.QRString!==null){
      const res = await ItemService.getQrData("code=" + props.QRString);
      console.log(res.data)
      return res.data;
      }
      else{
        return [];
      }
    },
    {
      refetchOnMount: true,
    }
  );

  if (formDataIsLoading) {
    return <Spinner />;
  }
  if (!formDataIsLoading && data.length ===0) {
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
              <Trans>Facility</Trans>
            </h4>
          </div>
          <div className="col-6">
            <h4 className="text-black">{data?.facility}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h4 className="text-black">
              <Trans>Item class</Trans>
            </h4>
          </div>
          <div className="col-6">
            <h4 className="text-black">{data?.item_class}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h4 className="text-black">
              <Trans>Items category</Trans>
            </h4>
          </div>
          <div className="col-6">
            <h4 className="text-black">{data?.item_type}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h4 className="text-black">
              <Trans>Model</Trans>
            </h4>
          </div>
          <div className="col-6">
            <h4 className="text-black">{data?.model}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h4 className="text-black">
              <Trans>PQS code</Trans>
            </h4>
          </div>
          <div className="col-6">
            <h4 className="text-black">{data?.pqs_code}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h4 className="text-black">
              <Trans>Code</Trans>
            </h4>
          </div>
          <div className="col-6">
            <h4 className="text-black">{data?.code}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h4 className="text-black">
              <Trans>Capacity</Trans>
            </h4>
          </div>
          <div className="col-6">
            <h4 className="text-black">{data?.capacity}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h4 className="text-black">
              <Trans>Manufacturer</Trans>
            </h4>
          </div>
          <div className="col-6">
            <h4 className="text-black">{data?.manufac}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h4 className="text-black">
              <Trans>Functioning Status</Trans>
            </h4>
          </div>
          <div className="col-6">
            <h4 className="text-black">
              {data?.functioning ? (
                <Trans>Working</Trans>
              ) : (
                <Trans>Not working</Trans>
              )}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultTable;
