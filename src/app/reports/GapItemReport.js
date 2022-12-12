import React, { Fragment, useState } from "react";
import { Translation,Trans} from "react-i18next";
import { useQuery } from "react-query";
import { Form } from "react-bootstrap";
import ReportService from "../services/report.service";
import "./form.scss";
import Spinner from "../shared/Spinner";
import SharedTable from "../shared/SharedTable";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import "../styles/table.scss";
import { toast } from "react-hot-toast";

import API_URL from "../services/APIURL";
import { separator } from "../helpers/separator";
import  {seperator} from "../helpers/seperator";
const defaultValues = {
  name: "",
  code: "",
  level: "-1",
  type: "-1",
  power: "-1",
  degree: "1",
  option: "1",
  year_from: "-1",
  year_to: "-1",
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
      func: (val) => val,

  },
  {
    headTitle: "Name",
    valueKey: "name",
      func: (val) => val,

  },
  {
    headTitle: "Levels",
    valueKey: "level",
      func: (val) => val,

  },
  {
    headTitle: "Code",
    valueKey: "code",
      func: (val) => val,

  },
  {
    headTitle: "Type",
    valueKey: "type",
      func: (val) => val,

  },
  {
    headTitle: "General",
    valueKey: "general",
    func: (val) => separator(val),

  },
  {
    headTitle: "Under_1",
    valueKey: "children",
    func: (val) => separator(val),

  },
];

const tableDegreeData = [
  {
    headTitle: "Required capacity (lit.)",
    valueKey: "req",
    func: (val) => 
      parseFloat(val).toFixed(2).toString().replace(".", seperator())
    ,
  },
  {
    headTitle: "All total available (lit.)",
    valueKey: "tcapacity",
    func: (val) => parseFloat(val).toFixed(2).toString().replace(".", seperator()),
  },
  {
    headTitle: "Functioning Total Available (lit)",
    valueKey: "fcapacity",
    func: (val) => parseFloat(val).toFixed(2).toString().replace(".", seperator()),
  },
  {
    headTitle: "Excess/ Shortage (lit.)",
    valueKey: "excees",
    func: (val) => parseFloat(val).toFixed(2).toString().replace(".", seperator()),
  },
  {
    headTitle: "Items Count",
    valueKey: "item_type",
    func: (val) => val,
  }
];

function GapItemReport({i18n}) {
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
      if(res.data.data.length === 0){
                 toast.error(<Trans>No data found</Trans>);

      }
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
  const saveGaps =() => {
    
    ReportService.savegaps(filterValues["degree"], reports?.save).then(
      (res) => {
        console.log(res);
      }
    );

  }
    const printFilterValues = () => {
        let filter = "";
        for (const key in filterValues) {
            const filterValue = filterValues[key];
            if (filterValue.length > 0 && filterValue !== "-1") {
              if(key==='degree'){
                filter += `Storage condition:${
                  degrees.find((d) => d.id === filterValue).name
                } , `;
              }else if(key==='option'){
                filter += `Option : ${
                  options.find((d) => d.id === filterValue).name
                } , `;
              }
              else if(key==='type'){
                filter += `Type : ${
                  gapItemHelper?.type.find(
                    (d) => d.id === parseInt(filterValue)
                  ).name
                } , `;
              }else if(key==='level'){
                filter += `Level :   ${
                  gapItemHelper?.level.find(
                    (d) => d.id === parseInt(filterValue)
                  ).id
                }  - ${
                  gapItemHelper?.level.find(
                    (d) => d.id === parseInt(filterValue)
                  ).name
                } , `;
              }
              else if(key==='power'){
                filter += `Power source = ${
                  gapItemHelper?.power.find(
                    (d) => d.id === parseInt(filterValue)
                  ).name
                } , `;
              }
              else if (key === "code") {
                                filter += `Code : ${filterValue} , `;

              } else if (key === "name") {
                filter += `Facility name : ${filterValue} , `;
              } else if (key === "year_from") {
                filter += `Year from : ${filterValue} , `;
              } else if (key === "year_to") {
                filter += `Year to : ${filterValue} , `;
              } else if (key === "calculate_for") {
                filter += `Calculate for : ${filterValue} , `;
              } else {
                filter += `${key} = ${filterValue} , `;
              }}
        }
        return filter;

    }
  if (isGapItemHelperLoading || isReportsLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h3 className="page-title mb-3">
        <Trans>Item gap report</Trans>
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
                      {/* <Trans id="ui.select" render={<option value="">hi</option>}>Select something</Trans> */}

                      <Translation>
                        {(t, { i18n }) => (
                          <option i18n value="-1" selected>
                            {t("Please select")}
                          </option>
                        )}
                      </Translation>

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
                      <Trans>Storage conditions</Trans>:
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
                      <Trans>Options</Trans>:
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
                      <Trans>from</Trans>:
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
                      <option value="-1" selected>
                        select
                      </option>
                      {console.log(new Date().getUTCFullYear())}
                      {Array.from({ length: 30 }).map((_, i) => {
                        const year = new Date().getUTCFullYear() - i;
                        return (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        );
                      })}
                    </Form.Control>
                    <label className="label col-sm-1">
                      <Trans>to</Trans>:
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
                      <option value="-1" selected>
                        select
                      </option>
                      {Array.from({
                        length:
                          new Date().getUTCFullYear() -
                          filterValues.year_from +
                          1,
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
                      <Trans>Calculate for Year:</Trans>
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
                      <option value="-1" selected>
                        select
                      </option>
                      {Array.from({ length: 10 }).map((_, i) => {
                        const year = new Date().getUTCFullYear() + i;
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
                <div className="col-sm-2">
                  <button type="submit" className="btn btn-primary fs-5">
                    <Trans>Report</Trans>
                  </button>
                </div>
                <div className="col-sm-3 ">
                  <button
                    type="button"
                    className="btn btn-secondary fs-5"
                    onClick={() => {setFilterValues(defaultValues);
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
              <Trans>Report</Trans> : <Trans>Item gap report</Trans>
              <Trans> ({country?.country})</Trans>
            </h4>
            <h6>
              <Trans>Filter</Trans> : {""} {printFilterValues()}
            </h6>

            <h6><Trans>Date</Trans>: {new Date().toLocaleDateString('en-GB')}</h6>
            <div className="mt-3 table-container ">
              <SharedTable>
                <TableHead>
                  <TableRow>
                    <TableCell align="center" colSpan={5}>
                      <Trans>Facility information</Trans>
                    </TableCell>
                    <TableCell align="center" colSpan={2}>
                      <Trans>Population</Trans>
                    </TableCell>
                    {selectedDegree === "6" ? (
                      Array.from({ length: 5 }).map((_, i) => (
                        <TableCell
                          key={i}
                          align="center"
                          colSpan={6}
                          style={{ textAlign: "center" }}
                        >
                          {degrees[i].name}
                        </TableCell>
                      ))
                    ) : (
                      <TableCell
                        align="center"
                        colSpan={6}
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
                            <TableCell colSpan={td.valueKey=== "item_type" ? 2 : 1} key={`${td.valueKey}${i + 1}`}>
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
                            {data.func(report[data.valueKey]) ?? "-"}
                          </TableCell>
                        ))}
                        {Array.from({
                          length: selectedDegree === "6" ? 5 : 1,
                        }).map((_, i) => (
                          <Fragment key={i}>
                            {tableDegreeData.map((td) => (
                              <>
                                {td.valueKey === "item_type" ? (
                                  <TableCell
                                    colSpan={2}
                                    key={`${td.valueKey}${i + 1}`}
                                  >
                                    <>
                                      {selectedDegree !== "2" &&
                                        selectedDegree !== "3" &&
                                        selectedDegree !== "6" && (
                                          <>
                                            {report["item_type"]["name"]}:
                                            {report["item_type"]["count"]}
                                            <br />
                                            {
                                              report["item_type"]["name1"]
                                            }:{report["item_type"]["count1"]}
                                            <br />
                                            {
                                              report["item_type"]["name2"]
                                            }:{report["item_type"]["count2"]}
                                          </>
                                        )}
                                    </>
                                    <>
                                      {selectedDegree === "2" && (
                                        <>
                                          {report["item_type"]["name"]} :{" "}
                                          {report["item_type"]["count"]}
                                          <br />
                                          {report["item_type"]["name1"]} :{" "}
                                          {report["item_type"]["count1"]}
                                        </>
                                      )}
                                    </>
                                    <>
                                      {selectedDegree === "3" && (
                                        <>
                                          {report["item_type"]["name"]}:
                                          {report["item_type"]["count"]}
                                        </>
                                      )}
                                    </>
                                    <>
                                      {selectedDegree === "6" && (
                                        <>
                                          {console.log(i)}
                                          {i !== 1 && i !== 2 && (
                                            <>
                                              {report["item_type"]["name"]}:
                                              {report["item_type"]["count"]}
                                              <br />
                                              {
                                                report["item_type"]["name1"]
                                              }:
                                              {report["item_type"]["count1"]}
                                              <br />
                                              {
                                                report["item_type"]["name2"]
                                              }:
                                              {report["item_type"]["count2"]}
                                            </>
                                          )}
                                          {i == 1 && (
                                            <>
                                              {report["item_type"]["name5"]}:
                                              {report["item_type"]["count5"]}
                                              <br />
                                              {
                                                report["item_type"]["name4"]
                                              } :
                                              {report["item_type"]["count4"]}
                                            </>
                                          )}
                                          {i == 2 && (
                                            <>
                                              {report["item_type"]["name3"]}:
                                              {report["item_type"]["count3"]}
                                            </>
                                          )}
                                        </>
                                      )}
                                    </>
                                  </TableCell>
                                ) : (
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
                                    {td.func(
                                      report[`${td.valueKey}${i + 1}`]
                                    ) ?? "-"}
                                  </TableCell>
                                )}
                              </>
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
                <div className="col-sm-2">
                  <button onClick={saveGaps} className="btn btn-primary">
                    <Trans>Save Reports</Trans>
                  </button>
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
