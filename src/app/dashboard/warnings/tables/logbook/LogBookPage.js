import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import DashboardService from "../../../../services/dashboard.service";
import { Trans } from "react-i18next";
import EmptyDataBaseMessage from "../../../../shared/UI/EmptyDataBaseMessage";

const LogBookPage = () => {
  const { data, isLoading } = useQuery(
    ["logbook-data"],
    async () => {
      const res = await DashboardService.getMaintenanceLog();
      return res.data;
    },
    {
      refetchOnMount: true,
    }
  );

  if (isLoading) {
    return <div> Loading ... </div>;
  }

  if (!isLoading && data.length === 0) {
    return <EmptyDataBaseMessage />;
  }

  return (
    <div className="d-flex mb-3">
      <div className="col-lg-12 stretch-card">
        <div className="card">
          <div className="card-body p-2">
            <h4 className="card-title">Warnings Info</h4>
            <div className="table-responsive">
              <table className="table table-bordered p-2 m-2">
                <thead>
                  <tr>
                    <th className={"col-3"}>
                      {" "}
                      <Trans>#</Trans>{" "}
                    </th>
                    <th className={"col-3"}>
                      {" "}
                      <Trans>Code</Trans>{" "}
                    </th>
                    <th className={"col-3"}>
                      <Trans>Maintenance group</Trans>{" "}
                    </th>
                    <th className={"col-3"}>
                      <Trans>Details</Trans>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((el, i) => {
                    return (
                      <tr key={el.id} className="table-info">
                        <td key={el.id + i}> {i + 1} </td>
                        <td key={i + el.code}> {el.code} </td>
                        <td key={i + el.gp}>{el.gp}</td>
                        <td key={i + "A"}>
                          <Link
                            to={`/dashboard/maintenanceLog/${el.id}`}
                            className="btn btn-info btn-fw "
                          >
                            <Trans>Click for details</Trans>
                          </Link>
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

export default LogBookPage;
