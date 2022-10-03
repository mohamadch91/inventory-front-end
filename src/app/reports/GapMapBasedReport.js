import React, { useState } from "react";
import { Translation,Trans } from "react-i18next";
import { useQuery } from "react-query";
import { Form } from "react-bootstrap";
import ReportService from "../services/report.service";
import "./form.scss";
import Spinner from "../shared/Spinner";
import SharedMap from "../shared/sharedMap";
import { toast } from "react-hot-toast";

const defaultValues = {
  degree: "1",
  status: "1",
};

const degrees = [
  { id: "1", name: "2-8 C" },
  { id: "2", name: "-20 C" },
  { id: "3", name: "-70 C" },
  { id: "4", name: "+25 C" },
  { id: "5", name: "Dry store" },
];

const statuses = [
  { id: "1", name: "Gap Ok" },
  { id: "2", name: "Gap Excess" },
  { id: "3", name: "Gap Shortage" },
];

function GapMapBasedReport() {
  const [filterValues, setFilterValues] = useState(defaultValues);

  const country = JSON.parse(localStorage.getItem("country")) || {};

  const {
    data: reports,
    isLoading: isReportsLoading,
    refetch: fetchReports,
  } = useQuery(
    ["gap-map-report"],
    async () => {
      const params = {};
      for (const key in filterValues) {
        const filter = filterValues[key];
        if (filter.length > 0) {
          params[key] = filter;
        }
      }
      const res = await ReportService.getGapMap(params);
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

  if (isReportsLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <h3 className="page-title mb-3">
        <Trans>Gap map report</Trans>
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
                      <Trans>Storage conditions:</Trans>
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
                      {degrees.map((deg) => (
                        <option key={deg.id} value={deg.id}>
                          {deg.name}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <Form.Group className="row">
                    <label className="label col-sm-4">
                      <Trans>Gap Status</Trans>:
                    </label>
                    <Form.Control
                      className="form-select col-sm-8"
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          status: value,
                        }));
                      }}
                      value={filterValues.status}
                      as="select"
                    >
                      {statuses.map((st) => (
                        <option key={st.id} value={st.id}>
                          {st.name}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-sm-2">
                  <button type="submit" className="btn btn-primary fs-5">
                    <Trans>Reports</Trans>
                  </button>
                </div>
                <div className="col-sm-3">
                  <button
                    type="button"
                    className="btn btn-primary fs-5"
                    onClick={() => setFilterValues(defaultValues)}
                  >
                    <Trans>Clear Filter</Trans>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="p-3">
        <h3 className="text-black">
          <Trans>Report</Trans>: <Trans>Gap map report</Trans> (
          {country?.country})
        </h3>
        <h5 className="text-black">
          <Trans>Date</Trans>: {new Date().toLocaleDateString("en-GB")}
        </h5>
        <SharedMap locations={reports} />
      </div>
    </div>
  );
}

export default GapMapBasedReport;
