import React, { useState } from "react";
import { Translation,Trans } from "react-i18next";
import { useQuery } from "react-query";
import { Form } from "react-bootstrap";
import ReportService from "../services/report.service";
import Spinner from "../shared/Spinner";
import SharedTable from "../shared/SharedTable";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import "../styles/table.scss";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const defaultValues = {
  name: "",
  level: "-1",
  type: "-1",
  power: "-1",
  code: "",
  degree: "-1",
  general_from: "",
  general_to: "",
  under_1_from: "",
  under_1_to: "",
  req_cap_from: "",
  req_cap_to: "",
  available_from: "",
  available_to: "",
  func_cap_from: "",
  func_cap_to: "",
  excees_from: "",
  excees_to: "",
};

const degrees = [
  { id: "1", name: "2-8 C" },
  { id: "2", name: "-20 C" },
  { id: "3", name: "-70 C" },
  { id: "4", name: "+25 C" },
  { id: "5", name: "Dry store" },
];

function PlanningReport() {
  const [filterValues, setFilterValues] = useState(defaultValues);

  const { data: planningReportHelper, isLoading: planningReportHelperLoading } =
    useQuery(["planning-report-helper"], async () => {
      const res = await ReportService.getPlanningReport({ help: true });
      return res.data;
    });

  const {
    data: reports,
    isLoading: isReportsLoading,
    refetch: fetchReports,
  } = useQuery(
    ["planning-report"],
    async () => {
      const params = {
        help: false,
      };
      for (const key in filterValues) {
        const filter = filterValues[key];
        if (filter.length > 0 && filter !== "-1") {
          params[key] = filter;
        }
      }
      const res = await ReportService.getPlanningReport(params);
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

  if (planningReportHelperLoading || isReportsLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h3 className="page-title mb-3">
        <Trans>Planning Report</Trans>
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
                    <label className="label col-sm-4 mt-3 ">
                      <Trans>Facility Name</Trans>;
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
                    <label className="label col-sm-4 mt-3">
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
                    <label className="label col-sm-4 mt-3">
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
                          <option i18n value="-1" selected disabled>
                            {t("Please select")}
                          </option>
                        )}
                      </Translation>
                      {planningReportHelper?.level.map((lev) => (
                        <option key={lev.id} value={lev.id}>
                          {`${lev.id} - ${lev.name}`}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <Form.Group className="row">
                    <label className="label col-sm-4 mt-3">
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
                          <option i18n value="-1" selected disabled>
                            {t("Please select")}
                          </option>
                        )}
                      </Translation>
                      {planningReportHelper?.type.map((ty) => (
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
                    <label className="label col-sm-4 mt-3">
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
                          <option i18n value="-1" selected disabled>
                            {t("Please select")}
                          </option>
                        )}
                      </Translation>
                      {planningReportHelper?.power.map((pow) => (
                        <option key={pow.id} value={pow.id}>
                          {pow.name}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-sm-12 col-lg-6">
                  <Form.Group className="row">
                    <label className="label col-sm-4 mt-2">
                      <Trans>Storage Condition For Planning</Trans>:
                    </label>
                    <Form.Control
                      className="form-select col-sm-8"
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          degree: value,
                        }));
                      }}
                      value={filterValues.degree}
                      as="select"
                    >
                      <Translation>
                        {(t, { i18n }) => (
                          <option i18n value="-1" selected disabled>
                            {t("Please select")}
                          </option>
                        )}
                      </Translation>
                      {degrees.map((i) => (
                        <option key={i.id} value={i.id}>
                          {i.name}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </div>
              </div>
              <Form.Group className="row mt-1">
                <label className="label col-sm-2 mt-3">
                  <Trans>General populations</Trans>
                </label>
                <label className="label-center col-sm-1 mt-3">
                  <Trans>from</Trans>:
                </label>
                <Form.Control
                  className="form-control col-sm-3"
                  onChange={(e) => {
                    const value = e.target.value;
                    setFilterValues((preValues) => ({
                      ...preValues,
                      general_from: value,
                    }));
                  }}
                  value={filterValues.general_from}
                />
                <label className="label-center col-sm-1 mt-3">
                  <Trans>to</Trans>:
                </label>
                <Form.Control
                  className="form-control col-sm-3"
                  onChange={(e) => {
                    const value = e.target.value;
                    setFilterValues((preValues) => ({
                      ...preValues,
                      general_to: value,
                    }));
                  }}
                  value={filterValues.general_to}
                />
              </Form.Group>
              <Form.Group className="row mt-1">
                <label className="label col-sm-2 mt-3">
                  <Trans>Under-1 Population</Trans>
                </label>
                <label className="label-center col-sm-1 mt-3">
                  <Trans>from</Trans>:
                </label>
                <Form.Control
                  className="form-control col-sm-3"
                  onChange={(e) => {
                    const value = e.target.value;
                    setFilterValues((preValues) => ({
                      ...preValues,
                      under_1_from: value,
                    }));
                  }}
                  value={filterValues.under_1_from}
                />
                <label className="label-center col-sm-1 mt-3">
                  <Trans>to</Trans>:
                </label>
                <Form.Control
                  className="form-control col-sm-3"
                  onChange={(e) => {
                    const value = e.target.value;
                    setFilterValues((preValues) => ({
                      ...preValues,
                      under_1_to: value,
                    }));
                  }}
                  value={filterValues.under_1_to}
                />
              </Form.Group>
              <Form.Group className="row mt-1">
                <label className="label col-sm-2 mt-3">
                  <Trans>Require Capacity</Trans>
                </label>
                <label className="label-center col-sm-1 mt-3">
                  <Trans>from</Trans>:
                </label>
                <Form.Control
                  className="form-control col-sm-3"
                  onChange={(e) => {
                    const value = e.target.value;
                    setFilterValues((preValues) => ({
                      ...preValues,
                      req_cap_from: value,
                    }));
                  }}
                  value={filterValues.req_cap_from}
                />
                <label className="label-center col-sm-1 mt-3">
                  <Trans>to</Trans>:
                </label>
                <Form.Control
                  className="form-control col-sm-3"
                  onChange={(e) => {
                    const value = e.target.value;
                    setFilterValues((preValues) => ({
                      ...preValues,
                      req_cap_to: value,
                    }));
                  }}
                  value={filterValues.req_cap_to}
                />
              </Form.Group>
              <Form.Group className="row mt-1">
                <label className="label col-sm-2 mt-3">
                  <Trans>Available capacity (lit.)</Trans>
                </label>
                <label className="label-center col-sm-1 mt-3">
                  <Trans>from</Trans>:
                </label>
                <Form.Control
                  className="form-control col-sm-3"
                  onChange={(e) => {
                    const value = e.target.value;
                    setFilterValues((preValues) => ({
                      ...preValues,
                      available_from: value,
                    }));
                  }}
                  value={filterValues.available_from}
                />
                <label className="label-center col-sm-1 mt-3">
                  <Trans>to</Trans>:
                </label>
                <Form.Control
                  className="form-control col-sm-3"
                  onChange={(e) => {
                    const value = e.target.value;
                    setFilterValues((preValues) => ({
                      ...preValues,
                      available_to: value,
                    }));
                  }}
                  value={filterValues.available_to}
                />
              </Form.Group>
              <Form.Group className="row mt-1">
                <label className="label col-sm-2 mt-3">
                  <Trans>Functional Capacity</Trans>
                </label>
                <label className="label-center col-sm-1 mt-3">
                  <Trans>from</Trans>:
                </label>
                <Form.Control
                  className="form-control col-sm-3"
                  onChange={(e) => {
                    const value = e.target.value;
                    setFilterValues((preValues) => ({
                      ...preValues,
                      func_cap_from: value,
                    }));
                  }}
                  value={filterValues.func_cap_from}
                />
                <label className="label-center col-sm-1 mt-3">
                  <Trans>to</Trans>:
                </label>
                <Form.Control
                  className="form-control col-sm-3"
                  onChange={(e) => {
                    const value = e.target.value;
                    setFilterValues((preValues) => ({
                      ...preValues,
                      func_cap_to: value,
                    }));
                  }}
                  value={filterValues.func_cap_to}
                />
              </Form.Group>
              <Form.Group className="row mt-1">
                <label className="label col-sm-2 mt-3">
                  <Trans>Shortage/Exces Capacity</Trans>
                </label>
                <label className="label-center col-sm-1 mt-3">
                  <Trans>from</Trans>:
                </label>
                <Form.Control
                  className="form-control col-sm-3"
                  onChange={(e) => {
                    const value = e.target.value;
                    setFilterValues((preValues) => ({
                      ...preValues,
                      excees_from: value,
                    }));
                  }}
                  value={filterValues.excees_from}
                />
                <label className="label-center col-sm-1 mt-3">
                  <Trans>to</Trans>:
                </label>
                <Form.Control
                  className="form-control col-sm-3"
                  onChange={(e) => {
                    const value = e.target.value;
                    setFilterValues((preValues) => ({
                      ...preValues,
                      excees_to: value,
                    }));
                  }}
                  value={filterValues.excees_to}
                />
              </Form.Group>

              <div className="row mt-4">
                <div className="col-sm-2  ">
                  <button type="submit" className="btn btn-primary fs-5">
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
              <Trans>Reports</Trans>
            </h4>
            <div className="mt-3 table-container">
              <SharedTable>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Trans>Facility Name</Trans>
                    </TableCell>
                    <TableCell>
                      <Trans>PQS/PIS Code</Trans>
                    </TableCell>
                    <TableCell>
                      <Trans>PQS/PIS type</Trans>
                    </TableCell>
                    <TableCell>
                      <Trans>Net vaccine storage capacity (lit.)</Trans>
                    </TableCell>
                    <TableCell>
                      <Trans>Freezer Net Capacity</Trans> (lit.)
                    </TableCell>
                    <TableCell>
                      <Trans>Assign</Trans>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {reports?.map((report, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell>{report.facility ?? "-"}</TableCell>
                        <TableCell>{report.code ?? "-"}</TableCell>
                        <TableCell>{report.type ?? "-"}</TableCell>
                        <TableCell>{report.vac_cap ?? "-"}</TableCell>
                        <TableCell>{report.freez_cap ?? "-"}</TableCell>
                        <TableCell>
                          <div class="form-check form-check-primary mt-3">
                            <label className="form-check-label">
                              <input
                                type="checkbox"
                                disabled
                                defaultChecked={report.assigned}
                              />
                              <i className="input-helper mt-3"></i>
                            </label>
                          </div>
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

export default PlanningReport;
