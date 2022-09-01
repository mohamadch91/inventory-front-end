import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import DashboardService from "../../../../services/dashboard.service";
import { Spinner } from "react-bootstrap";

const LogBookDetailsPage = () => {
  const param = useParams();

  const { data: detailsData, isLoading } = useQuery(
    ["log-details"],
    async () => {
      const res = await DashboardService.getLogDetails("?item=" + param.id);

      return res.data;
    },
    {
      refetchOnMount: true,
    }
  );

  if (isLoading) {
    return <Spinner />;
  }

  const data = detailsData.maintanances;

  console.log(data);
  return (
    <div className="d-flex mb-3">
      <div className="col-lg-12 stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">
              Details of <i>{`${detailsData.type}`}</i> maintenance performed by{" "}
              {`${detailsData.gp}`}: #{`${detailsData.code}`}
            </h4>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th> # </th>
                    <th> Name </th>
                    <th> Code </th>
                    <th> interval </th>
                    <th> interval in location </th>
                    <th> Deadline </th>
                    <th> Deadline in location </th>
                    <th> Status </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((el, i) => {
                    return (
                      <tr key={el.id} className="table-info">
                        <td key={el.id + i}> {i + 1} </td>
                        <td key={i + el.name}> {el.name} </td>
                        <td key={i + el.code}> {el.code} </td>
                        <td key={i + el.interval}> {el.interval} </td>

                        <td key={i + el.loc_interval}> {el.loc_interval} </td>
                        <td key={i + el.deadline}> {el.deadline} </td>
                        <td key={i + el.deadline_in_loc}>
                          {el.deadline_in_loc}
                        </td>
                        <td key={i + "A"}>
                          <label
                            className={`badge badge-${
                              el.done ? "success" : "warning"
                            }  `}
                            style={{ fontSize: "12px" }}
                          >
                            {el.done ? "Done" : "Pending"}
                          </label>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogBookDetailsPage;
