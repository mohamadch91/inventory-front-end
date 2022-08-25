import React from "react";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import "../styles/table.scss";
import Spinner from "../shared/Spinner";
import { useQuery } from "react-query";
import SharedTable from "../shared/SharedTable";
import FacilitiesService from "../services/facilities.service";
import EditIcon from "../shared/EditIcon";
import { Link } from "react-router-dom";

function FacilityList() {
  const { data: Facilities, isLoading: isFacilityDefaultLoading } = useQuery(
    ["facility-default-value"],
    async () => {
      const res = await FacilitiesService.getFacilities();
      return res.data;
    },
    {
      refetchOnMount: true,
    }
  );

  const convertDate = (date) => {
    return new Date(date).toISOString().split("T")[0];
  };

  if (isFacilityDefaultLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h3 className="page-title mb-3">Facility list</h3>
      <div className="mt-3">
        <div className="card">
          <div className="card-body">
            <div className="mt-5 table-container">
              <SharedTable>
                <TableHead>
                  <TableRow>
                    <TableCell className="col-sm-2">Facility name</TableCell>
                    <TableCell className="col-sm-1">Level</TableCell>
                    <TableCell className="col-sm-2">
                      Number of lower level facility
                    </TableCell>
                    <TableCell className="col-sm-1">Code</TableCell>
                    <TableCell className="col-sm-2">Type</TableCell>
                    <TableCell className="col-sm-2">Last Changes On</TableCell>
                    <TableCell className="col-sm-2">Tool box</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Facilities.map((facility) => {
                    return (
                      <TableRow key={facility.id}>
                        <TableCell className="col-sm-2">
                          {facility.name ?? "-"}
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
                            <div style={{ width: "20px", height: "20px" }}>
                              <EditIcon />
                            </div>
                          </Link>
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
