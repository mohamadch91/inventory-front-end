import React from "react";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import "../styles/table.scss";
import Spinner from "../shared/Spinner";
import { useMutation, useQuery } from "react-query";
import SharedTable from "../shared/SharedTable";
import FacilitiesService from "../services/facilities.service";
import EditIcon from "../shared/EditIcon";
import TrashIcon from "../shared/TrashIcon";
import { FcFlowChart } from "react-icons/fc";
import { FcList } from "react-icons/fc";

import { FaClinicMedical } from "react-icons/fa";
import { FaFileMedical } from "react-icons/fa";

import InformationIcon from "../shared/InformationIcon";
import { Link, useHistory } from "react-router-dom";
import { Translation,Trans } from "react-i18next";
import { Form } from "react-bootstrap";
import ReportService from "../services/report.service";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import Modal from "react-bootstrap/Modal";
import "../styles/inputs.scss";
const defaultValues = {
  name: "",
  code: "",
  level: "-1",
  type: "-1",
  power: "-1",
  func: "-1",
  gfrom: "",
  gto: "",
  underfrom: "",
  underto: "",
  is_deleted: false,
};

function FacilityList() {
  const history = useHistory();
  const params = new URLSearchParams(history.location.search);
  const pid = params.get("pid");
  const [openModal, setOpenModal] = React.useState(false);
  const [facilityId, setFacilityId] = React.useState(null);
  const [resons, setResons] = React.useState([]);
  const [reasonsLoding, setReasonsLoding] = React.useState(false);
  const [reason, setReason] = React.useState("");
  const [filterValues, setFilterValues] = React.useState(defaultValues);
  const [facModals, setFacModals] = React.useState(false);
  const [facMod, setFacMod] = React.useState(null);
const [is_deleted, setIsDeleted] = React.useState(false);

  const {
    data: facilities,
    isLoading: isFacilityDefaultLoading,
    refetch: refetchFacilities,
  } = useQuery(["facility-list", pid], async () => {
    const params = {
    };
    setFacModals(false);
    setFacMod(null);
    for (const key in filterValues) {
      const filter = filterValues[key];
      if (filter.length > 0 && filter !== "-1") {
        params[key] = filter;
      }
    }
    const res = await (pid
      ? FacilitiesService.getSubFacilities(pid)
      : FacilitiesService.getFacilities(params));
    return res.data;
  });
  const { data: facSegHelper, isLoading: isFacSegHelperLoading } = useQuery(
    ["fac-seg-helper"],
    async () => {
      const res = await ReportService.getFacSeg({ help: true });
      return res.data;
    }
  );
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
     const printFilterValues = () => {
       let filter = "";
       for (const key in filterValues) {
         const value = filterValues[key];
         if (value.length > 0 && value !== "-1") {
           if (key === "power") {
             // find power whith value=id
             const power = facSegHelper.power.find(
               (p) => p.id === parseInt(value)
             );
             filter += `Power source: ${power.name}, `;
           } else if (key === "func") {
             // find func whith value=id
             console.log(value);
             if (value === "true") {
               filter += `Function: Working, `;
             } else {
               filter += `Function: Not working, `;
             }
           } else if (key === "type") {
             // find type whith value=id
             const type = facSegHelper.type.find(
               (t) => t.id === parseInt(value)
             );
             filter += `Type: ${type.name}, `;
           } else if (key === "level") {
             // find level whith value=id
             const level = facSegHelper.level.find(
               (l) => l.id === parseInt(value)
             );
             filter += `Level: ${level.id} - ${level.name} , `;
           } else if (key === "gfrom") {
             filter += `General population from: ${value}, `;
           } else if (key === "gto") {
             filter += `General population to: ${value}, `;
           } else if (key === "underfrom") {
             filter += `Under 1 population from: ${value}, `;
           } else if (key === "underto") {
             filter += `Under 1 population to: ${value}, `;
           }
            else if (key === "is_deleted") {
              if(value){
              filter += `Deleted: Yes, `;
              }
              else{
                filter += `Deleted: No, `;
              }
              
            }
            else {
             filter += `${key}=${value}, `;
           }
         }
       }
       return filter;
     };
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
        <div className="card">
          <div className="card-body py-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                refetchFacilities();
              }}
            >
              <h4>
                <Trans>Filter</Trans>
              </h4>
              <div className="row mt-5">
                <div className="col-sm-12 col-lg-6">
                  <Form.Group className="row">
                    <label className="label col-sm-4 d-flex justify-content-center mt-1  align-items-center">
                      <Trans>Facility Name</Trans>:
                    </label>
                    <Form.Control
                      className="form-control  col-sm-8"
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          name: value,
                        }));
                      }}
                      value={filterValues.name}
                    />
                  </Form.Group>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <Form.Group className="row">
                    <label className="label col-sm-4 d-flex justify-content-center mt-1  align-items-center">
                      <Trans>Code</Trans>:
                    </label>
                    <Form.Control
                      className="form-control col-sm-8"
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          code: value,
                        }));
                      }}
                      value={filterValues.code}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-sm-12 col-lg-6">
                  <Form.Group className="row">
                    <label className="label col-sm-4 d-flex justify-content-center mt-1  align-items-center">
                      <Trans>Levels</Trans>:
                    </label>
                    <Form.Control
                      className="form-select col-sm-8"
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          level: value,
                        }));
                      }}
                      value={filterValues.level}
                      as="select"
                    >
                      <Translation>
                        {(t, { i18n }) => (
                          <option i18n value="-1" selected>
                            {t("Please select")}
                          </option>
                        )}
                      </Translation>
                      {facSegHelper?.level.map((lev) => (
                        <option key={lev.id} value={lev.id}>
                          {`${lev.id} - ${lev.name}`}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <Form.Group className="row">
                    <label className="label col-sm-4 d-flex justify-content-center mt-1  align-items-center">
                      <Trans>Type</Trans>:
                    </label>
                    <Form.Control
                      className="form-select col-sm-8"
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          type: value,
                        }));
                      }}
                      value={filterValues.type}
                      as="select"
                    >
                      <Translation>
                        {(t, { i18n }) => (
                          <option i18n value="-1" selected>
                            {t("Please select")}
                          </option>
                        )}
                      </Translation>
                      {facSegHelper?.type.map((ty) => (
                        <option key={ty.id} value={ty.id}>
                          {ty.name}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-sm-12 col-lg-6">
                  <Form.Group className="row">
                    <label className="label col-sm-4 d-flex justify-content-center mt-1  align-items-center">
                      <Trans>Power source</Trans>:
                    </label>
                    <Form.Control
                      className="form-select col-sm-8"
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          power: value,
                        }));
                      }}
                      value={filterValues.power}
                      as="select"
                    >
                      <Translation>
                        {(t, { i18n }) => (
                          <option i18n value="-1" selected>
                            {t("Please select")}
                          </option>
                        )}
                      </Translation>
                      {facSegHelper?.power.map((pow) => (
                        <option key={pow.id} value={pow.id}>
                          {pow.name}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <Form.Group className="row">
                    <label className="label col-sm-4 d-flex justify-content-center mt-1  align-items-center">
                      <Trans>Functioning Status</Trans>:
                    </label>
                    <Form.Control
                      className="form-select col-sm-8"
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          func: value,
                        }));
                      }}
                      value={filterValues.func}
                      as="select"
                    >
                      <Translation>
                        {(t, { i18n }) => (
                          <option i18n value="-1" selected>
                            {t("Please select")}
                          </option>
                        )}
                      </Translation>
                      <option value={true}>Working</option>
                      <option value={false}>Not working</option>
                    </Form.Control>
                  </Form.Group>
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-sm-12">
                  <Form.Group className="row">
                    <label className="label col-sm-2 mt-3">
                      <Trans>General populations</Trans>:
                    </label>
                    <label className="label col-sm-1 mt-3">
                      <Trans>from</Trans>:
                    </label>
                    <Form.Control
                      className="form-control col-sm-4"
                      type="number"
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          gfrom: value,
                        }));
                      }}
                      value={filterValues.gfrom}
                    />
                    <label className="label col-sm-1 mt-3">
                      <Trans>to</Trans>:
                    </label>
                    <Form.Control
                      className="form-control col-sm-4"
                      type="number"
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          gto: value,
                        }));
                      }}
                      value={filterValues.gto}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-sm-12">
                  <Form.Group className="row">
                    <label className="label col-sm-2 mt-3">
                      <Trans>Under-1 Populations</Trans>:
                    </label>
                    <label className="label col-sm-1 mt-3">
                      <Trans>from</Trans>:
                    </label>
                    <Form.Control
                      className="form-control col-sm-4"
                      type="number"
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          underfrom: value,
                        }));
                      }}
                      value={filterValues.underfrom}
                    />
                    <label className="label col-sm-1 mt-3">
                      <Trans>to</Trans>:
                    </label>
                    <Form.Control
                      className="form-control col-sm-4"
                      type="number"
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          underto: value,
                        }));
                      }}
                      value={filterValues.underto}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-sm-6">
                  <Form.Group className="row">
                    <label className="label col-sm-4 d-flex justify-content-center mt-1  align-items-center">
                      <Trans>Deleted</Trans>
                    </label>
                    <Form.Control
                      className="form-select col-sm-8"
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          is_deleted: value,
                        }));
                      }}
                      value={filterValues.is_deleted}
                      as="select"
                    >
                      <Translation>
                        {(t, { i18n }) => (
                          <>
                            <option i18n value="-1" selected>
                              {t("Please select")}
                            </option>
                            <option value={true}>{t("Yes")}</option>
                            <option value={false} selected>
                              {t("No")}
                            </option>
                          </>
                        )}
                      </Translation>
                    </Form.Control>
                  </Form.Group>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-sm-2 ">
                  <button type="submit" className="btn btn-primary fs-5">
                    <Trans>Filter</Trans>
                  </button>
                </div>
                <div className="col-sm-3">
                  <button
                    type="button"
                    className="btn btn-primary fs-5 mt-1 "
                    onClick={() => {
                      setFilterValues(defaultValues);
                      refetchFacilities();
                    }}
                  >
                    <Trans>Clear Filter</Trans>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div className="card">
          <div className="card-body">
            <h6>
              <Trans>Filters</Trans> : {""} {printFilterValues()}
            </h6>
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
            {isBrowser ? (
              <div className="mt-5 table-container">
                <SharedTable>
                  <TableHead>
                    <TableRow>
                      <TableCell className="col-sm-2">
                        <Trans>Facility Name</Trans>
                      </TableCell>
                      <TableCell className="col-sm-1">
                        <Trans>Levels</Trans>
                      </TableCell>
                      <TableCell className="col-sm-2">
                        <Trans>Number of lower level facility</Trans>
                      </TableCell>
                      <TableCell className="col-sm-1">
                        <Trans>Code</Trans>
                      </TableCell>
                      <TableCell className="col-sm-1">
                        <Trans>Type</Trans>
                      </TableCell>
                      <TableCell className="col-sm-1">
                        <Trans>Last Changed on</Trans>
                      </TableCell>
                      <TableCell className="col-sm-3">
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
                          <TableCell className="col-sm-1">
                            {facility.type ?? "-"}
                          </TableCell>
                          <TableCell className="col-sm-2">
                            {convertDate(facility.updated_at)}
                          </TableCell>
                          <TableCell className="col-sm-2">
                            <Tooltip title={<Trans>Edit</Trans>}>
                              <Link to={`/facilities/info/${facility.id}`}>
                                <EditIcon />
                              </Link>
                            </Tooltip>

                            {((pid && index > 0) || !pid) && (
                              <Tooltip title={<Trans>Sub Facilities</Trans>}>
                                <Link
                                  to={{
                                    pathname: "/facilities/list",
                                    search: `?pid=${facility.id}`,
                                  }}
                                >
                                  <FcFlowChart size={30} />
                                </Link>
                              </Tooltip>
                            )}
                            <Tooltip title={<Trans>Add Sub Facility</Trans>}>
                              <Link
                                to={{
                                  pathname: "/facilities/info/new",
                                  search: `?pid=${facility.id}`,
                                }}
                              >
                                <FaClinicMedical size={30} />
                              </Link>
                            </Tooltip>
                            <Tooltip title={<Trans>Item list</Trans>}>
                              <Link
                                to={{
                                  pathname: "/items/list",
                                  search: `?facility=${facility.id}`,
                                }}
                              >
                                <FcList size={30} />
                              </Link>
                            </Tooltip>
                            <Tooltip title={<Trans>Add item</Trans>}>
                              <Link
                                to={{
                                  pathname: "/items/info/new",
                                  search: `?parent=${facility.id}`,
                                }}
                              >
                                <FaFileMedical size={30} />
                              </Link>
                            </Tooltip>
                            <Tooltip title={<Trans>Delete facility</Trans>}>
                              <button
                                className="delete-btn"
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
                        <Translation>
                          {(t, { i18n }) => (
                            <option i18n value="-1" selected disabled>
                              {t("Please select")}
                            </option>
                          )}
                        </Translation>
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
                      <Trans>Delete facility</Trans>
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
            ) : (
              <div className="mt-5 table-container">
                <SharedTable>
                  <TableHead>
                    <TableRow>
                      <TableCell className="col-sm-2">
                        <Trans>Facility Name</Trans>
                      </TableCell>
                      <TableCell className="col-sm-1">
                        <Trans>Code</Trans>
                      </TableCell>
                      <TableCell className="col-sm-1">
                        <Trans>Information</Trans>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {facilities.map((facility, index) => {
                      return (
                        <>
                          <TableRow key={index}>
                            <TableCell className="col-sm-2">
                              {pid && index > 0 && "-- "} {facility.name ?? "-"}
                            </TableCell>

                            <TableCell className="col-sm-1">
                              {facility.code ?? "-"}
                            </TableCell>

                            <TableCell className="col-sm-2">
                              <button
                                className="edit-btn"
                                style={{ marginLeft: "24%" }}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setFacModals(true);
                                  setFacMod(facility);
                                }}
                              >
                                <InformationIcon />
                              </button>
                            </TableCell>
                          </TableRow>
                        </>
                      );
                    })}
                  </TableBody>
                </SharedTable>
                <Modal
                  id={`facility-modal`}
                  show={facModals}
                  onHide={() => {
                    setFacModals(false);
                    setFacMod(null);
                  }}
                >
                  <div className="column">
                    <div className="row">
                      <div className="col-6">
                        <h4 className="text-center text-black">
                          <Trans>Levels</Trans>
                        </h4>
                      </div>
                      <div className="col-6">
                        <h4 className="text-center text-black">
                          {facMod?.level ?? "-"}
                        </h4>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <h5 className="text-center text-black">
                          <Trans>Number of lower level facility</Trans>
                        </h5>
                      </div>
                      <div className="col-6 align-items-center d-flex justify-content-center">
                        <h4 className="text-center align-center text-black">
                          {facMod?.loverlevelfac ?? "-"}
                        </h4>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <h4 className="text-center text-black">
                          <Trans>Type</Trans>
                        </h4>
                      </div>
                      <div className="col-6 ">
                        <h4 className="text-center text-black">
                          {facMod?.type ?? "-"}
                        </h4>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <h4 className="text-center text-black">
                          <Trans>Last Changed on</Trans>
                        </h4>
                      </div>
                      <div className="col-6">
                        <h4 className="text-center text-black">
                          {convertDate(facMod?.updated_at)}
                        </h4>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <h4 className="text-center text-black">
                          <Trans>Tool box</Trans>
                        </h4>
                      </div>
                      <div className="col-6">
                        <h4 className="text-center text-black">
                          <Link to={`/facilities/info/${facMod?.id}`}>
                            <Tooltip title={<Trans>Edit</Trans>}>
                              <button className="edit-btn">
                                <EditIcon />
                              </button>
                            </Tooltip>
                          </Link>
                          {((pid && facMod?.id !== pid > 0) || !pid) && (
                            <Tooltip title={<Trans>Sub Facilities</Trans>}>
                              <Link
                                to={{
                                  pathname: "/facilities/list",
                                  search: `?pid=${facMod?.id}`,
                                }}
                              >
                                <FcFlowChart size={30} />
                              </Link>
                            </Tooltip>
                          )}
                          <Tooltip title={<Trans>Add Sub Facility</Trans>}>
                            <Link
                              to={{
                                pathname: "/facilities/info/new",
                                search: `?pid=${facMod?.id}`,
                              }}
                            >
                              <FaClinicMedical size={30} />
                            </Link>
                          </Tooltip>
                          <Tooltip title={<Trans>Item list</Trans>}>
                            <Link
                              to={{
                                pathname: "/items/list",
                                search: `?facility=${facMod?.id}`,
                              }}
                            >
                              <FcList size={30} />
                            </Link>
                          </Tooltip>
                          <Tooltip title={<Trans>Add item</Trans>}>
                            <Link
                              to={{
                                pathname: "/items/info/new",
                                search: `?parent=${facMod?.id}`,
                              }}
                            >
                              <FaFileMedical size={30} />
                            </Link>
                          </Tooltip>
                          <Tooltip title={<Trans>Delete facility</Trans>}>
                            <button
                              className="edit-btn"
                              disabled={isDeleteLoading}
                              onClick={() => {
                                setFacModals(false);
                                setFacMod(null);
                                openDeleteModal(facMod?.id);
                              }}
                            >
                              <TrashIcon />
                            </button>
                          </Tooltip>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="text-right ">
                    <button
                      className="btn btn-danger text-dark w-50 mt-4 mb-2   "
                      style={{ marginLeft: "24%" }}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setFacModals(false);
                        setFacMod(null);
                      }}
                    >
                      <Trans>Close</Trans>
                    </button>
                  </div>
                </Modal>
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
                        <Translation>
                          {(t, { i18n }) => (
                            <option i18n value="-1" selected disabled>
                              {t("Please select")}
                            </option>
                          )}
                        </Translation>
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
                      <Trans>Delete facility</Trans>
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacilityList;
