import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import DashboardService from "../../../../services/dashboard.service";
import { Spinner } from "react-bootstrap";
import { Trans } from "react-i18next";
import EmptyDataBaseMessage from "../../../../shared/UI/EmptyDataBaseMessage";

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
  if (!isLoading && detailsData.length === 0) {
    return <EmptyDataBaseMessage />;
  }

  const data = detailsData.maintanances;

  return (
    <div className="d-flex mb-3">
      <div className="col-lg-12 stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">
              <Trans>
                Details of <i>{`${detailsData.type}`}</i> maintenance performed
                by {`${detailsData.gp}`}: #{`${detailsData.code}`}
              </Trans>
            </h4>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>
                      {" "}
                      <Trans>#</Trans>{" "}
                    </th>
                    <th>
                      {" "}
                      <Trans>Name</Trans>{" "}
                    </th>
                    <th>
                      {" "}
                      <Trans>Code</Trans>{" "}
                    </th>
                    <th>
                      {" "}
                      <Trans>interval</Trans>{" "}
                    </th>
                    <th>
                      {" "}
                      <Trans>interval in location</Trans>{" "}
                    </th>
                    <th>
                      {" "}
                      <Trans>Deadline</Trans>{" "}
                    </th>
                    <th>
                      {" "}
                      <Trans> Deadline in location</Trans>{" "}
                    </th>
                    <th>
                      {" "}
                      <Trans>Status</Trans>{" "}
                    </th>
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
