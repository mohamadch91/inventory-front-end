import React, { useState } from "react";
import { Trans } from "react-i18next";
import { useQuery } from "react-query";
import { Form } from "react-bootstrap";
import ReportService from "../services/report.service";
import "./form.scss";
import Spinner from "../shared/Spinner";
import SharedMap from "../shared/sharedMap";

const defaultValues = {
  level: "",
  type: "",
  power: "",
  func: "",
};

function FacilityMapBasedReport() {
  const [filterValues, setFilterValues] = useState(defaultValues);

  const { data: facMapHelper, isLoading: isFacMapHelperLoading } = useQuery(
    ["fac-map-based-helper"],
    async () => {
      const res = await ReportService.getFacMap({ help: true });
      return res.data;
    }
  );

  const {
    data: reports,
    isLoading: isReportsLoading,
    refetch: fetchReports,
  } = useQuery(
    ["fac-map-report"],
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
      const res = await ReportService.getFacMap(params);
      return res.data;
    },
    {
      refetchOnMount: false,
      enabled: false,
    }
  );

  if (isFacMapHelperLoading || isReportsLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <h3 className="page-title mb-3">
        <Trans>Facility Map-Based Report</Trans>
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
                      as="select"
                    >
                      <option value="-1" selected disabled>
                        Please select
                      </option>
                      {facMapHelper?.level.map((lev) => (
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
                      as="select"
                    >
                      <option value="-1" selected disabled>
                        Please select
                      </option>
                      {facMapHelper?.type.map((ty) => (
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
                      as="select"
                    >
                      <option value="-1" selected disabled>
                        Please select
                      </option>
                      {facMapHelper?.power.map((pow) => (
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
      <div className="p-3">
        <SharedMap locations={reports} />
      </div>
    </div>
  );
}

export default FacilityMapBasedReport;
