import React from "react";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import "../styles/table.scss";
import Spinner from "../shared/Spinner";
import { useQuery } from "react-query";
import SharedTable from "../shared/SharedTable";
import FacilitiesService from "../services/facilities.service";
import EditIcon from "../shared/EditIcon";
import MenuIcon from "../shared/MenuIcon";
import FacilityIcon from "../shared/FacilityIcon";
import { Link, useHistory } from "react-router-dom";
import { Trans } from "react-i18next";

function FacilityList() {
  const history = useHistory();
  const params = new URLSearchParams(history.location.search);
  const pid = params.get("pid");

  const { data: facilities, isLoading: isFacilityDefaultLoading } = useQuery(
    ["facility-list", pid],
    async () => {
      const res = await (pid
        ? FacilitiesService.getSubFacilities(pid)
        : FacilitiesService.getFacilities());
      return res.data;
    }
  );

  const convertDate = (date) => {
    if (date) {
      return new Date(date).toISOString().split("T")[0];
    }
  };

  if (isFacilityDefaultLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h3 className="page-title mb-3">
        <Trans>Facility list</Trans>
      </h3>
      <div className="mt-3">
        <div className="card">
          <div className="card-body">
            {pid && (
              <div className="row mt-3">
                <div className="col-sm-2 mt-2">
                  <Trans>Parent facility:</Trans>
                </div>
                <div className="col-sm-4 ">
                  <input
                    className="w-100"
                    disabled
                    defaultValue={facilities[0]?.name}
                  />
                </div>
                <Link
                  to={{
                    pathname: "/facilities/list",
                    search: `${
                      facilities[0]?.parentid
                        ? `?pid=${facilities[0]?.parentid}`
                        : ""
                    }`,
                  }}
                  className="col-sm-2 mt-2"
                >
                  up level
                </Link>
              </div>
            )}
            <div className="mt-5 table-container">
              <SharedTable>
                <TableHead>
                  <TableRow>
                    <TableCell className="col-sm-2">
                      <Trans>Facility name</Trans>
                    </TableCell>
                    <TableCell className="col-sm-1">Level</TableCell>
                    <TableCell className="col-sm-2">
                      <Trans>Number of lower level facility</Trans>
                    </TableCell>
                    <TableCell className="col-sm-1">
                      <Trans>Code</Trans>
                    </TableCell>
                    <TableCell className="col-sm-2">
                      <Trans>Type</Trans>
                    </TableCell>
                    <TableCell className="col-sm-2">
                      <Trans>Last Changes On</Trans>
                    </TableCell>
                    <TableCell className="col-sm-2">
                      <Trans>Tool box</Trans>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {facilities.map((facility, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell className="col-sm-2">
                          {pid && index > 0 && "-- "} {facility.name ?? "-"}
                        </TableCell>
                        <TableCell className="col-sm-1">
                          {facility.level ?? "-"}
                        </TableCell>
                        <TableCell className="col-sm-2">
                          {facility.loverlevelfac ?? "-"}
                        </TableCell>
                        <TableCell className="col-sm-1">
                          {facility.code ?? "-"}
                        </TableCell>
                        <TableCell className="col-sm-2">
                          {facility.type ?? "-"}
                        </TableCell>
                        <TableCell className="col-sm-2">
                          {convertDate(facility.updated_at)}
                        </TableCell>
                        <TableCell className="col-sm-2">
                          <Link to={`/facilities/info/${facility.id}`}>
                            <Tooltip title="edit">
                              <button className="edit-btn">
                                <EditIcon />
                              </button>
                            </Tooltip>
                          </Link>
                          {((pid && index > 0) || !pid) && (
                            <Tooltip title="Sub facilities">
                              <Link
                                to={{
                                  pathname: "/facilities/list",
                                  search: `?pid=${facility.id}`,
                                }}
                              >
                                <MenuIcon />
                              </Link>
                            </Tooltip>
                          )}
                          <Tooltip title="Add Facility">
                            <Link
                              to={{
                                pathname: "/facilities/info/new",
                                search: `?pid=${facility.id}`,
                              }}
                            >
                              <FacilityIcon />
                            </Link>
                          </Tooltip>
                          <Tooltip title="Item list">
                            <Link
                              to={{
                                pathname: "/items/list",
                                search: `?facility=${facility.id}`,
                              }}
                            >
                              <FacilityIcon />
                            </Link>
                          </Tooltip>
                          <Tooltip title="Add item">
                            <Link
                              to={{
                                pathname: "/items/info/new",
                                search: `?parent=${facility.id}`,
                              }}
                            >
                              <FacilityIcon />
                            </Link>
                          </Tooltip>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </SharedTable>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacilityList;
