import React, { Fragment, useState } from "react";
import { Trans } from "react-i18next";
import { useQuery } from "react-query";
import { Form } from "react-bootstrap";
import ReportService from "../services/report.service";
import "./form.scss";
import Spinner from "../shared/Spinner";
import SharedTable from "../shared/SharedTable";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import "../styles/table.scss";
import API_URL from "../services/APIURL";

const defaultValues = {
  name: "",
  code: "",
  level: "-1",
  type: "-1",
  power: "-1",
  degree: "1",
  option: "1",
  year_to: "-1",
  year_from: "-1",
  calculate_for: "-1",
};

const degrees = [
  { id: "1", name: "2-8 C" },
  { id: "2", name: "-20 C" },
  { id: "3", name: "-70 C" },
  { id: "4", name: "+25 C" },
  { id: "5", name: "Dry store" },
  { id: "6", name: "All" },
];

const options = [
  { id: "1", name: "All Equipment" },
  { id: "2", name: "Only equipment from PQS/PIS" },
  { id: "3", name: "Only equipment with installation date" },
];

const tableData = [
  {
    headTitle: "Parent",
    valueKey: "parent",
  },
  {
    headTitle: "Name",
    valueKey: "name",
  },
  {
    headTitle: "Level",
    valueKey: "level",
  },
  {
    headTitle: "Code",
    valueKey: "code",
  },
  {
    headTitle: "Type",
    valueKey: "type",
  },
  {
    headTitle: "General",
    valueKey: "general",
  },
  {
    headTitle: "Under_1",
    valueKey: "children",
  },
];

const tableDegreeData = [
  {
    headTitle: "Required Capacity(lit)",
    valueKey: "req",
  },
  {
    headTitle: "All Total Available (lit)",
    valueKey: "tcapacity",
  },
  {
    headTitle: "Functioning Total Available (lit)",
    valueKey: "fcapacity",
  },
  {
    headTitle: "Excess/ Shortage (lit)",
    valueKey: "excees",
  },
];

function GapItemReport() {
  const [filterValues, setFilterValues] = useState(defaultValues);
  const [selectedDegree, setSelectedDegree] = useState("1");

  const country = JSON.parse(localStorage.getItem("country")) || {};

  const { data: gapItemHelper, isLoading: isGapItemHelperLoading } = useQuery(
    ["gap-item-helper"],
    async () => {
      const res = await ReportService.getGapItem({ help: true });
      return res.data;
    }
  );

  const {
    data: reports,
    isLoading: isReportsLoading,
    refetch: fetchReports,
  } = useQuery(
    ["gap-item-report"],
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
      const res = await ReportService.getGapItem(params);
      return res.data;
    },
    {
      refetchOnMount: false,
      enabled: false,
      onSuccess() {
        setSelectedDegree(filterValues.degree);
      },
    }
  );

  if (isGapItemHelperLoading || isReportsLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h3 className="page-title mb-3">
        <Trans>Gap Item Report</Trans>
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
                <Trans>Filters</Trans>
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
                      {gapItemHelper?.level.map((lev) => (
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
                      {gapItemHelper?.type.map((ty) => (
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
                      {gapItemHelper?.power.map((pow) => (
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
                    <label className="label col-sm-4">
                      <Trans>Storage condition:</Trans>
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
                      value={filterValues.item_class}
                      as="select"
                    >
                      {degrees?.map((i) => (
                        <option key={i.id} value={i.id}>
                          {i.name}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </div>
              </div>
              <div className="row mt-5">
                <h4>
                  <Trans>Item Options</Trans>
                </h4>
              </div>
              <div className="row mt-1">
                <div className="col-sm-12 col-lg-6">
                  <Form.Group className="row">
                    <label className="label col-sm-4">
                      <Trans>Options:</Trans>
                    </label>
                    <Form.Control
                      className="form-select col-sm-8"
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          option: value,
                        }));
                      }}
                      value={filterValues.item_class}
                      as="select"
                    >
                      {options?.map((i) => (
                        <option key={i.id} value={i.id}>
                          {i.name}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <Form.Group className="row">
                    <label className="label col-sm-2">
                      <Trans>from:</Trans>
                    </label>
                    <Form.Control
                      className="form-select col-sm-2"
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          year_from: value,
                        }));
                      }}
                      value={filterValues.year_from}
                      as="select"
                    >
                      <option value="-1" selected disabled>
                        select
                      </option>
                      {Array.from({ length: 30 }).map((_, i) => {
                        const year =
                          (filterValues.year_to ||
                            new Date().getUTCFullYear()) - i;
                        return (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        );
                      })}
                    </Form.Control>
                    <label className="label col-sm-1">
                      <Trans>to:</Trans>
                    </label>
                    <Form.Control
                      className="form-select col-sm-2"
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          year_to: value,
                        }));
                      }}
                      value={filterValues.year_to}
                      as="select"
                    >
                      <option value="-1" selected disabled>
                        select
                      </option>
                      {Array.from({
                        length:
                          new Date().getUTCFullYear() - filterValues.year_from,
                      }).map((_, i) => {
                        const year = new Date().getUTCFullYear() - i;
                        return (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        );
                      })}
                    </Form.Control>
                    <label className="label col-sm-3">
                      <Trans>Calculate for year:</Trans>
                    </label>
                    <Form.Control
                      className="form-select col-sm-2"
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          calculate_for: value,
                        }));
                      }}
                      value={filterValues.calculate_for}
                      as="select"
                    >
                      <option value="-1" selected disabled>
                        select
                      </option>
                      {Array.from({ length: 30 }).map((_, i) => {
                        const year = new Date().getUTCFullYear() - i;
                        return (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        );
                      })}
                    </Form.Control>
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
              <Trans>Report Number: Gap Item Report ({country?.country})</Trans>
            </h4>
            <h6>Date: {new Date().toISOString().split("T")[0]}</h6>
            <div className="mt-3 table-container ">
              <SharedTable>
                <TableHead>
                  <TableRow>
                    <TableCell align="center" colSpan={5}>
                      Facility information
                    </TableCell>
                    <TableCell align="center" colSpan={2}>
                      Populations
                    </TableCell>
                    {selectedDegree === "6" ? (
                      Array.from({ length: 5 }).map((_, i) => (
                        <TableCell
                          key={i}
                          align="center"
                          colSpan={4}
                          style={{ textAlign: "center" }}
                        >
                          {degrees[i].name}
                        </TableCell>
                      ))
                    ) : (
                      <TableCell
                        align="center"
                        colSpan={4}
                        style={{ textAlign: "center" }}
                      >
                        {degrees[+selectedDegree - 1].name}
                      </TableCell>
                    )}
                  </TableRow>
                  <TableRow>
                    {tableData.map((data) => (
                      <TableCell key={data.headTitle}>
                        <Trans>{data.headTitle}</Trans>
                      </TableCell>
                    ))}
                    {Array.from({ length: selectedDegree === "6" ? 5 : 1 }).map(
                      (_, i) => (
                        <Fragment key={i}>
                          {tableDegreeData.map((td) => (
                            <TableCell key={`${td.valueKey}${i + 1}`}>
                              <Trans>{td.headTitle}</Trans>
                            </TableCell>
                          ))}
                        </Fragment>
                      )
                    )}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {reports?.data.map((report, index) => {
                    return (
                      <TableRow key={index}>
                        {tableData.map((data) => (
                          <TableCell key={data.valueKey}>
                            {report[data.valueKey] ?? "-"}
                          </TableCell>
                        ))}
                        {Array.from({
                          length: selectedDegree === "6" ? 5 : 1,
                        }).map((_, i) => (
                          <Fragment key={i}>
                            {tableDegreeData.map((td) => (
                              <TableCell
                                key={`${td.valueKey}${i + 1}`}
                                style={{
                                  color:
                                    td.valueKey === "excees"
                                      ? report[`exceed${i + 1}`]
                                        ? "blue"
                                        : "red"
                                      : "unset",
                                }}
                              >
                                {report[`${td.valueKey}${i + 1}`]}
                              </TableCell>
                            ))}
                          </Fragment>
                        ))}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </SharedTable>
            </div>
            {reports?.excel && (
              <div className="row mt-4">
                <div className="col-sm-2">
                  <a href={API_URL + reports.excel} download>
                    <button className="btn btn-primary">
                      <Trans>Export to MS Excel</Trans>
                    </button>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GapItemReport;
