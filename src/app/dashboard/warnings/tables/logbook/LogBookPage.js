import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import DashboardService from "../../../../services/dashboard.service";
import { Spinner } from "react-bootstrap";

const LogBookPage = () => {
  const { data, isLoading } = useQuery(
    [],
    async () => {
      const res = await DashboardService.getMaintenanceLog();
      return res.data;
    },
    {
      refetchOnMount: true,
    }
  );

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="d-flex mb-3">
      <div className="col-lg-12 stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Warnings Info</h4>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th className={"col-3"}> # </th>
                    <th className={"col-3"}> Code </th>
                    <th className={"col-3"}> Maintenance group </th>
                    <th className={"col-3"}> Details </th>
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
                            Click for details️
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
