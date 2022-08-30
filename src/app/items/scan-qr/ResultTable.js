import React from "react";
import { useQuery } from "react-query";
import ItemService from "../../services/item.service";
import { Spinner } from "react-bootstrap";

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
  console.log("data is");
  console.log(data);

  return (
    <div className="table-responsive mt-3">
      <table className="table">
        <thead>
          <tr>
            <th>Item Class</th>
            <th>Item Type</th>
            <th>PQS code</th>
            <th>code</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data[0].item_class}</td>
            <td>{data[0].item_type}</td>
            <td>{data[0].pqs_code}</td>
            <td>{data[0].code}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
