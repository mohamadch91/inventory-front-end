import React, { useEffect, useState } from "react";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import "../styles/table.scss";
import Spinner from "../shared/Spinner";
import { useQuery } from "react-query";
import SharedTable from "../shared/SharedTable";
import FacilitiesService from "../services/facilities.service";
import EditIcon from "../shared/EditIcon";
import MenuIcon from "../shared/MenuIcon";
import { Link } from "react-router-dom";

function FacilityList() {
  const [selectedParentId, setSelectedParentId] = useState(null);
  const [allFacility, setAllFacility] = useState([]);

  const { isLoading: isFacilityDefaultLoading, refetch: refetchFacilities } =
    useQuery(
      ["facility-default-value", selectedParentId],
      async () => {
        const res = await FacilitiesService.getFacilities();
        return res.data;
      },
      {
        enabled: false,
        onSuccess(data) {
          setAllFacility(data);
        },
      }
    );

  console.log(selectedParentId);

  const { isLoading: isGetSubFacilityLoading, refetch: fetchSubFacilities } =
    useQuery(
      ["sub-facilities", selectedParentId],
      async () => {
        const res = await FacilitiesService.getSubFacilities(selectedParentId);
        return res.data;
      },
      {
        refetchOnMount: false,
        enabled: false,
        onSuccess(data) {
          const _allFacility = [...allFacility];
          const parentIndex = _allFacility.findIndex(
            (fac) => fac.id === selectedParentId
          );
          for (let i = 0; i < data.length; i++) {
            const element = data[i];
            if (!_allFacility.find((fac) => fac.id === element.id)) {
              _allFacility.splice(parentIndex + i + 1, 0, element);
            }
          }
          setAllFacility(_allFacility);
        },
      }
    );

  useEffect(() => {
    refetchFacilities();
  }, []);

  useEffect(() => {
    if (selectedParentId) {
      fetchSubFacilities();
    }
  }, [selectedParentId]);

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
                  {allFacility.map((facility, index) => {
                    return (
                      <TableRow key={index}>
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
                            <button className="edit-btn">
                              <EditIcon />
                            </button>
                          </Link>
                          {facility.parentid && (
                            <button
                              className="edit-btn"
                              disabled={
                                isGetSubFacilityLoading &&
                                facility.parentid === selectedParentId
                              }
                              onClick={() =>
                                setSelectedParentId(facility.parentid)
                              }
                            >
                              <MenuIcon />
                            </button>
                          )}
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
