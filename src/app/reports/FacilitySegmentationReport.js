import React, { useState } from "react";
import { Translation, Trans } from "react-i18next";
import { useQuery } from "react-query";
import { Form } from "react-bootstrap";
import ReportService from "../services/report.service";
import "./form.scss";
import Spinner from "../shared/Spinner";
import SharedTable from "../shared/SharedTable";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import "../styles/table.scss";
import { toast } from "react-hot-toast";

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
};

function FacilitySegmentationReport() {
  const [filterValues, setFilterValues] = useState(defaultValues);

  const country = JSON.parse(localStorage.getItem("country")) || {};

  const { data: facSegHelper, isLoading: isFacSegHelperLoading } = useQuery(
    ["fac-seg-helper"],
    async () => {
      const res = await ReportService.getFacSeg({ help: true });
      return res.data;
    }
  );

  const {
    data: reports,
    isLoading: isReportsLoading,
    refetch: fetchReports,
  } = useQuery(
    ["fac-seg-report"],
    async () => {
      const params = {
        help: false,
      };
      for (const key in filterValues) {
        const filter = filterValues[key];
        if (filter.length > 0) {
          params[key] = filter;
        }
      }
      const res = await ReportService.getFacSeg(params);
        if (res.data.length === 0) {
                   toast.error(<Trans>No data found</Trans>);

        }
      return res.data;
    },
    {
      refetchOnMount: false,
      enabled: false,
    }
  );
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
          const type = facSegHelper.type.find((t) => t.id === parseInt(value));
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
        } else {
          filter += `${key}=${value} , `;
        }
      }
    }
    return filter;
  };
  if (isFacSegHelperLoading || isReportsLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h3 className="page-title mb-3">
        <Trans>Facility segmentation</Trans>
      </h3>
      <div className="mt-3">
        <div className="card">
          <div className="card-body py-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                fetchReports();
              }}
            >
              <h4>
                <Trans>Filter</Trans>
              </h4>
              <div className="row mt-5">
                <div className="col-sm-12 col-lg-6">
                  <Form.Group className="row">
                    <label className="label col-sm-4">
                      <Trans>Facility Name</Trans>:
                    </label>
                    <Form.Control
                      className="form-control col-sm-8"
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
                    <label className="label col-sm-4">
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
                    <label className="label col-sm-4">
                      <Trans>Level</Trans>:
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
                    <label className="label col-sm-4">
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
                    <label className="label col-sm-4">
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
                    <label className="label col-sm-4">
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
                    <label className="label col-sm-2">
                      <Trans>General population</Trans>:
                    </label>
                    <label className="label col-sm-1">
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
                    <label className="label col-sm-1">
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
                    <label className="label col-sm-2">
                      <Trans>Under-1 populations</Trans>:
                    </label>
                    <label className="label col-sm-1">
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
                    <label className="label col-sm-1">
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
              <div className="row mt-4">
                <div className="col-sm-2">
                  <button type="submit" className="btn fs-5 btn-primary">
                    <Trans>Reports</Trans>
                  </button>
                </div>
                <div className="col-sm-2">
                  <button
                    type="button"
                    className="btn btn-primary fs-5"
                    onClick={() => {
                      setFilterValues(defaultValues);
                      window.location.reload();
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
          <div className="card-body py-3">
            <h4>
              <Trans>Report</Trans>: <Trans>Facility segmentation</Trans> (
              {country?.country})
            </h4>
            <h6>
              <Trans>Filter</Trans> : {""} {printFilterValues()}
            </h6>

            <h6>
              <Trans>Date</Trans>: {new Date().toISOString().split("T")[0]}
            </h6>
            <div className="mt-3 table-container">
              <SharedTable>
                <TableHead>
                  <TableRow>
                    <TableCell className="col-sm-2">
                      <Trans>Facility Name</Trans>
                    </TableCell>
                    <TableCell className="col-sm-2">
                      <Trans>Facility parent</Trans>
                    </TableCell>
                    <TableCell className="col-sm-1">
                      <Trans>Level</Trans>
                    </TableCell>
                    <TableCell className="col-sm-2">
                      <Trans>Code</Trans>
                    </TableCell>
                    <TableCell className="col-sm-1">
                      <Trans>Type</Trans>
                    </TableCell>
                    <TableCell className="col-sm-1">
                      <Trans>Power</Trans>
                    </TableCell>
                    <TableCell className="col-sm-1">
                      <Trans>Owner</Trans>
                    </TableCell>
                    <TableCell className="col-sm-2">
                      <Trans>Functioning Status</Trans>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {reports?.map((report, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell className="col-sm-2">
                          {report.name ?? "-"}
                        </TableCell>
                        <TableCell className="col-sm-2">
                          {report.parent ?? "-"}
                        </TableCell>
                        <TableCell className="col-sm-1">
                          {report.level ?? "-"}
                        </TableCell>
                        <TableCell className="col-sm-2">
                          {report.code ?? "-"}
                        </TableCell>
                        <TableCell className="col-sm-1">
                          {report.type ?? "-"}
                        </TableCell>
                        <TableCell className="col-sm-1">
                          {report.power ?? "-"}
                        </TableCell>
                        <TableCell className="col-sm-1">
                          {report.owner ?? "-"}
                        </TableCell>
                        <TableCell className="col-sm-2">
                          {report.func ? "working" : "not working"}
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

export default FacilitySegmentationReport;
