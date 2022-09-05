import React, { useState } from "react";
import { Trans } from "react-i18next";
import { useQuery } from "react-query";
import { Form } from "react-bootstrap";
import ReportService from "../services/report.service";
import "./form.scss";
import Spinner from "../shared/Spinner";
import SharedTable from "../shared/SharedTable";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import "../styles/table.scss";

const defaultValues = {
  name: "",
  code: "",
  level: "",
  type: "",
  power: "",
  func: "",
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
      return res.data;
    },
    {
      refetchOnMount: false,
      enabled: false,
    }
  );

  if (isFacSegHelperLoading || isReportsLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h3 className="page-title mb-3">
        <Trans>Facility Segmentation</Trans>
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
                      <Trans>Facility name:</Trans>
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
                      <Trans>Code:</Trans>
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
                      <Trans>Level:</Trans>
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
                      <option value="-1" selected disabled>
                        Please select
                      </option>
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
                      <Trans>Type:</Trans>
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
                      <option value="-1" selected disabled>
                        Please select
                      </option>
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
                      <Trans>Power source:</Trans>
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
                      <option value="-1" selected disabled>
                        Please select
                      </option>
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
                      <Trans>Functioning Status:</Trans>
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
                      <option value="-1" selected disabled>
                        Please select
                      </option>
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
                      <Trans>General population:</Trans>
                    </label>
                    <label className="label col-sm-1">
                      <Trans>From:</Trans>
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
                      <Trans>To:</Trans>
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
                      <Trans>Under-1 Population:</Trans>
                    </label>
                    <label className="label col-sm-1">
                      <Trans>From:</Trans>
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
                      <Trans>To:</Trans>
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
                <div className="col-sm-1">
                  <button type="submit" className="btn btn-primary">
                    Reports
                  </button>
                </div>
                <div className="col-sm-1">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setFilterValues(defaultValues)}
                  >
                    Clear
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
              <Trans>
                Report Number: Facility Segmentation ({country?.country})
              </Trans>
            </h4>
            <h6>Date: {new Date().toISOString().split("T")[0]}</h6>
            <div className="mt-3 table-container">
              <SharedTable>
                <TableHead>
                  <TableRow>
                    <TableCell className="col-sm-2">
                      <Trans>Facility name</Trans>
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
                      <Trans>owner</Trans>
                    </TableCell>
                    <TableCell className="col-sm-2">
                      <Trans>Functioning status</Trans>
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
