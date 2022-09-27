import React, { useState } from "react";
import { Trans } from "react-i18next";
import { useMutation, useQuery } from "react-query";
import { Form } from "react-bootstrap";
import ReportService from "../services/report.service";
import Spinner from "../shared/Spinner";
import SharedTable from "../shared/SharedTable";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import "../styles/table.scss";
import { Link, useParams } from "react-router-dom";
import Select from "react-select";

const defaultValues = {
  pqs: null,
  count: "",
};

function FacilityGapInformation() {
  const [values, setValues] = useState(defaultValues);

  const { id: pageId } = useParams();

  const { data: pageData, isLoading: isPageDataLoading } = useQuery(
    ["fac-gap-info-helper"],
    async () => {
      const res = await ReportService.getGapCCEPlan({
        id: pageId,
      });
      return res.data;
    }
  );

  const {
    data: pqsData,
    isLoading: isPQSDataLoading,
    refetch: fetchPQSData,
  } = useQuery(
    ["pqs-data", pageId, values.pqs?.id, values.pqs?.pqs],
    async () => {
      const params = {
        id: pageId,
        type: values.pqs?.pqs,
        pqs_id: values.pqs?.id,
      };
      const res = await ReportService.getGapCCEPlan(params);
      return res.data;
    },
    { enabled: false }
  );

  const { mutate: addToPlan, isLoading: isAddToPlanLoading } = useMutation({
    mutationKey: ["post-plan"],
    mutationFn: async () => {
      const payload = {
        id: pageId,
        type: values.pqs?.pqs,
        pqs_id: values.pqs?.id,
        count: values.count,
      };
      const res = await ReportService.postGapCCEPlan(payload);
      fetchPQSData();

      return res.data;
    },
    onSuccess() {
      fetchPQSData();
    },
  });

  const { mutate: deletePlan } = useMutation({
    mutationKey: ["plan-delete"],
    mutationFn: async (id) => {
      const res = await ReportService.deleteGapCCEPlan({ id });
      fetchPQSData();

      return res.data;
    },
    onSuccess() {
      fetchPQSData();
    },
  });

  const { mutate: providedPlan } = useMutation({
    mutationKey: ["plan-provided"],
    mutationFn: async (id) => {
      const res = await ReportService.putGapCCEPlan({ id });
      fetchPQSData();

      return res.data;
    },
    onSuccess() {
      fetchPQSData();
    },
  });

  if (isPageDataLoading || isPQSDataLoading) {
    return <Spinner />;
  }

  const tableData = pqsData ? pqsData.table : pageData?.table;

  return (
    <div>
      <h3 className="page-title mb-3">
        <Trans>Facility Gap Information</Trans>
      </h3>
      <div className="mt-3">
        <div className="card">
          <div className="card-body py-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                addToPlan();
              }}
            >
              <h4>
                <Trans>Filters</Trans>
              </h4>
              <div className="row mt-5">
                <div className="col-sm-12 col-lg-6">
                  <div className="row">
                    <p className="label col-sm-4">
                      <Trans>Facility name:</Trans>
                    </p>
                    <p className=" col-sm-8">{pageData?.data.facility}</p>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <div className="row">
                    <p className="label col-sm-4">
                      <Trans>Storage condition:</Trans>
                    </p>
                    <p className=" col-sm-8">{pageData?.data.condition}</p>
                  </div>
                </div>
              </div>
              <hr className="mt-0" />
              <div className="row mt-1">
                <div className="col-sm-12 col-lg-6">
                  <div className="row">
                    <p className="label col-sm-4">
                      <Trans>Require Capacity:</Trans>
                    </p>
                    <p className=" col-sm-8">{pageData?.data.req_capacity}</p>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <div className="row">
                    <p className="label col-sm-4">
                      <Trans>Available capacity (lit.):</Trans>
                    </p>
                    <p className=" col-sm-8">{pageData?.data.available}</p>
                  </div>
                </div>
              </div>
              <hr className="mt-0" />
              <div className="row mt-1">
                <div className="col-sm-12 col-lg-6">
                  <div className="row">
                    <p className="label col-sm-4">
                      <Trans>Functional Capacity:</Trans>
                    </p>
                    <p className=" col-sm-8">{pageData?.data.func_cap}</p>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <div className="row">
                    <p className="label col-sm-4">
                      <Trans>Shortage/Exces Capacity:</Trans>
                    </p>
                    <p className=" col-sm-8">{pageData?.data.exces}</p>
                  </div>
                </div>
              </div>
              <hr className="mt-0" />
              <Form.Group className="row mt-1">
                <label className="label col-sm-2">
                  <Trans>PQS/PIS Code:</Trans>
                </label>
                <Select
                  options={pageData?.pqs.map((pqs) => ({
                    label: pqs.name,
                    value: pqs,
                  }))}
                  onChange={(e) => {
                    setValues((pre) => ({ ...pre, pqs: e.value }));
                  }}
                  value={{
                    label: values.pqs?.name,
                    value: values.pqs,
                  }}
                  className="col-sm-6"
                />
                <div className="col-sm-1">
                  <button
                    className="btn btn-primary w-100 h-100"
                    onClick={fetchPQSData}
                    type="button"
                    disabled={isPQSDataLoading}
                  >
                    <Trans>Load</Trans>
                  </button>
                </div>
              </Form.Group>
              <hr className="mt-0" />
              <div className="row mt-1">
                <div className="col-sm-12 col-lg-6">
                  <div className="row">
                    <p className="label col-sm-4">
                      <Trans>Model:</Trans>
                    </p>
                    <p className=" col-sm-8">{pqsData?.data.model ?? "-"}</p>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <div className="row">
                    <p className="label col-sm-4">
                      <Trans>PQS/PIS-Type:</Trans>
                    </p>
                    <p className=" col-sm-8">
                      {(values.pqs?.pqs === 4
                        ? pqsData?.data.type
                        : pqsData?.data.description) ?? "-"}
                    </p>
                  </div>
                </div>
              </div>
              <hr className="mt-0" />
              <div className="row mt-1">
                <div className="col-sm-12 col-lg-6">
                  <div className="row">
                    <p className="label col-sm-4">
                      <Trans>PQS/PIS-Manufacturer:</Trans>
                    </p>
                    <p className=" col-sm-8">
                      {(values.pqs?.pqs === 4
                        ? pqsData?.data.manufacturer
                        : pqsData?.data.make) ?? "-"}
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <div className="row">
                    <p className="label col-sm-4">
                      <Trans>PQS/PIS-Refrigerant gas</Trans>
                    </p>
                    <p className=" col-sm-8">
                      {(values.pqs?.pqs === 3
                        ? pqsData?.data.refrigerant
                        : "-") ?? "-"}
                    </p>
                  </div>
                </div>
              </div>
              <hr className="mt-0" />
              <div className="row mt-1">
                <div className="col-sm-12 col-lg-6">
                  <div className="row">
                    <p className="label col-sm-4">
                      <Trans>PQS/PIS-Temperature Zone:</Trans>
                    </p>
                    <p className=" col-sm-8">{"-"}</p>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <div className="row">
                    <p className="label col-sm-4">
                      <Trans>Net vaccine storage capacity (lit.):</Trans>
                    </p>
                    <p className=" col-sm-8">
                      {(values.pqs?.pqs === 3
                        ? pqsData?.data.refrigeratorcapacity
                        : pqsData?.data.vaccinenetstoragecapacity) ?? "-"}
                    </p>
                  </div>
                </div>
              </div>
              <hr className="mt-0" />
              <div className="row mt-1">
                <div className="col-sm-12 col-lg-6">
                  <div className="row">
                    <p className="label col-sm-4">
                      <Trans>Freezer Net Capacity (lit.):</Trans>
                    </p>
                    <p className=" col-sm-8">
                      {(values.pqs?.pqs === 3
                        ? pqsData?.data.freezercapacity
                        : pqsData?.data.coolantpacknominalcapacity) ?? "-"}
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <div className="row">
                    <p className="label col-sm-4">
                      <Trans>Ice making capacity (Kg/24 hours):</Trans>
                    </p>
                    <p className=" col-sm-8">{"-"}</p>
                  </div>
                </div>
              </div>
              <hr className="mt-0" />
              <div className="row mt-1">
                <div className="col-sm-12 col-lg-6">
                  <div className="row">
                    <p className="label col-sm-4">
                      <Trans>
                        Cool-water pack production capacity (Kg/24 hours):
                      </Trans>
                    </p>
                    <p className=" col-sm-8">
                      {(values.pqs?.pqs === 3
                        ? pqsData?.data.kg_24_hrs
                        : pqsData?.data.numbercoolantpacks) ?? "-"}
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <div className="row">
                    <p className="label col-sm-4">
                      <Trans>Original cost:</Trans>
                    </p>
                    <p className=" col-sm-8">{"-"}</p>
                  </div>
                </div>
              </div>
              <hr className="mt-0" />
              <div className="row mt-1">
                <div className="col-sm-12 col-lg-6">
                  <div className="row">
                    <p className="label col-sm-4">
                      <Trans>Net shipping volume (m3):</Trans>
                    </p>
                    <p className=" col-sm-8">
                      {(values.pqs?.pqs === 3
                        ? pqsData?.data.h.toFixed(2)
                        : pqsData?.data.externalvolume.toFixed(2)) ?? "-"}
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <div className="row">
                    <p className="label col-sm-4">
                      <Trans>Weight (kg):</Trans>
                    </p>
                    <p className=" col-sm-8">{"-"}</p>
                  </div>
                </div>
              </div>
              <hr className="mt-0" />
              <Form.Group className="row mt-1">
                <label className="label col-sm-2">
                  <Trans>Count:</Trans>
                </label>
                <Form.Control
                  className="form-control col-sm-6"
                  onChange={(e) => {
                    const value = e.target.value;
                    setValues((preValues) => ({
                      ...preValues,
                      count: value,
                    }));
                  }}
                  type="number"
                  value={values.count}
                />
              </Form.Group>

              <div
                className="row mt-4 text-center"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div className="col-sm-2">
                  <button
                    type="submit"
                    disabled={values.count.length === 0 || isAddToPlanLoading}
                    className="btn btn-primary"
                  >
                    <Trans>Add To Plan</Trans>
                  </button>
                </div>
                <Link to="/settings/planning-cce-gap" className="col-sm-2">
                  <button type="button" className="btn btn-info">
                    <Trans>Back To Plan</Trans>
                  </button>
                </Link>
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
                      <Trans>PQS/PIS-Type</Trans>
                    </TableCell>
                    <TableCell>
                      <Trans>Net vaccine storage capacity (lit.)</Trans>
                    </TableCell>
                    <TableCell>
                      <Trans>Freezer Net Capacity (lit.)</Trans>
                    </TableCell>
                    <TableCell>
                      <Trans>Assign</Trans>
                    </TableCell>
                    <TableCell>
                      <Trans>Delete</Trans>
                    </TableCell>
                    <TableCell>
                      <Trans>Provided</Trans>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableData?.map((report, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell>{report.facility ?? "-"}</TableCell>
                        <TableCell>{report.code ?? "-"}</TableCell>
                        <TableCell>{report.type ?? "-"}</TableCell>
                        <TableCell>{report.vac_cap ?? "-"}</TableCell>
                        <TableCell>{report.freez_cap ?? "-"}</TableCell>
                        <TableCell>
                          <input
                            type="checkbox"
                            disabled
                            defaultChecked={report.assigned}
                          />
                        </TableCell>
                        <TableCell
                          style={{ cursor: "pointer", color: "red" }}
                          onClick={() => deletePlan(report.id)}
                        >
                          <Trans>Delete</Trans>
                        </TableCell>
                        <TableCell
                          style={{ cursor: "pointer", color: "green" }}
                          onClick={() => providedPlan(report.id)}
                        >
                          <Trans>Provided</Trans>
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

export default FacilityGapInformation;
