import React from "react";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import "../styles/table.scss";
import Spinner from "../shared/Spinner";
import { useMutation, useQuery } from "react-query";
import SharedTable from "../shared/SharedTable";
import FacilitiesService from "../services/facilities.service";
import EditIcon from "../shared/EditIcon";
import MenuIcon from "../shared/MenuIcon";
import AddItemIcon from "../shared/AddItemIcon";
import TrashIcon from "../shared/TrashIcon";
import AddFacilityIcon from "../shared/AddFacilityIcon";
import FacilityIcon from "../shared/FacilityIcon";
import { Link, useHistory } from "react-router-dom";
import { Trans } from "react-i18next";
import Modal from "react-bootstrap/Modal";
import "../styles/inputs.scss";

function FacilityList() {
  const history = useHistory();
  const params = new URLSearchParams(history.location.search);
  const pid = params.get("pid");
  const [openModal, setOpenModal] = React.useState(false);
  const [facilityId, setFacilityId] = React.useState(null);
  const [resons, setResons] = React.useState([]);
  const [reasonsLoding, setReasonsLoding] = React.useState(false);
  const [reason, setReason] = React.useState("");
const [is_deleted, setIsDeleted] = React.useState(false);

  const {
    data: facilities,
    isLoading: isFacilityDefaultLoading,
    refetch: refetchFacilities,
  } = useQuery(["facility-list", pid], async () => {
    const res = await (pid
      ? FacilitiesService.getSubFacilities(pid)
      : FacilitiesService.getFacilities(undefined,is_deleted));
    return res.data;
  });

  const { isLoading: isDeleteLoading, mutateAsync: deleteFacility } =
    useMutation({
      mutationFn: async (id) => {
        const res = await FacilitiesService.deleteFacility(id);
        return res;
      },
      onSuccess() {
        refetchFacilities();
      },
    });

  const convertDate = (date) => {
    if (date) {
      return new Date(date).toISOString().split("T")[0];
    }
  };

  if (isFacilityDefaultLoading) {
    return <Spinner />;
  }
  const openDeleteModal = (id) => {
    setReasonsLoding(true);
    FacilitiesService.deletefacilityparam(id).then((res) => {
      setResons(res.data);
      setReasonsLoding(false);
    });
   
    setFacilityId(id);
    setOpenModal(true);
    setReasonsLoding(false);

  }
  const deletefac = () => {
    const data={
      "id":facilityId,
      "delete_reason":reason,
      "is_deleted":true
    }
    const res = FacilitiesService.deleteFacility(data);
    setOpenModal(false);
    refetchFacilities();
  }
   const handledeletChange = () => {
     setIsDeleted(!is_deleted);
   };
  if(reasonsLoding){
    return <Spinner />;
  }
  return (
    <div>
      <h3 className="page-title mb-3">
        <Trans>Facility list</Trans>
      </h3>
      <div className="mt-3">
        <div className="">
          <label className="mr-2  "> Deleted </label>
          <input
            type="checkbox"
            checked={is_deleted}
            onChange={handledeletChange}
            className="mt-1"
          />
          <button
            className="btn btn-success text-dark w-25  mb-2   "
            onClick={() => refetchFacilities()}
            style={{ marginLeft: "5%" }}
            type="submit"
          >
            <Trans>filter</Trans>
          </button>
        </div>

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
                      <Trans>Last Changed on</Trans>
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
                                <FacilityIcon />
                              </Link>
                            </Tooltip>
                          )}
                          <Tooltip title="Add Sub Facility">
                            <Link
                              to={{
                                pathname: "/facilities/info/new",
                                search: `?pid=${facility.id}`,
                              }}
                            >
                              <AddFacilityIcon />
                            </Link>
                          </Tooltip>
                          <Tooltip title="Item list">
                            <Link
                              to={{
                                pathname: "/items/list",
                                search: `?facility=${facility.id}`,
                              }}
                            >
                              <MenuIcon />
                            </Link>
                          </Tooltip>
                          <Tooltip title="Add item">
                            <Link
                              to={{
                                pathname: "/items/info/new",
                                search: `?parent=${facility.id}`,
                              }}
                            >
                              <AddItemIcon />
                            </Link>
                          </Tooltip>
                          <Tooltip title="Delete facility">
                            <button
                              className="edit-btn"
                              disabled={isDeleteLoading}
                              onClick={() => openDeleteModal(facility.id)}
                            >
                              <TrashIcon />
                            </button>
                          </Tooltip>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </SharedTable>
              <Modal show={openModal} onHide={() => setOpenModal(false)}>
                <form onSubmit={deletefac}>
                  <h1
                    className="mb-1 mr-3  mt-5 mb-5 text-black"
                    style={{ marginLeft: "33%" }}
                  >
                    <Trans>Delete facility</Trans>
                  </h1>
                  <div className="d-flex flex-column align-items-center"></div>
                  <div className="d-flex flex-column align-items-center"></div>
                  <div className="d-flex flex-column align-items-center"></div>
                  <div className="d-flex flex-column align-items-center"></div>

                  <div className="d-flex flex-column align-items-center w-100">
                    <label>
                      <Trans>Delete reasons</Trans>
                    </label>
                    <select
                      name="Delete reasons"
                      onChange={(event) => {
                        setReason(event.target.value);
                      }}
                      // value={editFormData?.facility}
                    >
                      <option value="-1" selected disabled>
                        Please select
                      </option>
                      {resons?.map((item, index) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    className="btn btn-success text-dark w-50 mt-4 mb-2   "
                    style={{ marginLeft: "24%" }}
                    type="submit"
                  >
                    <Trans>Delete</Trans>
                  </button>

                  <button
                    className="btn btn-danger text-dark w-50 mt-4 mb-2   "
                    style={{ marginLeft: "24%" }}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setOpenModal(false);
                    }}
                  >
                    <Trans>Cancel</Trans>
                  </button>
                </form>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacilityList;
