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
  level: "-1",
  type: "-1",
  power: "-1",
  func: "-1",
};

function FacilityMapBasedReport() {
  const [filterValues, setFilterValues] = useState(defaultValues);

  const country = JSON.parse(localStorage.getItem("country")) || {};

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
        if (filter.length > 0 && filter !== "-1") {
          params[key] = filter;
        }
      }
      const res = await ReportService.getFacMap(params);
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
                          <option value="-1" selected disabled>
                            {t("Please select")}
                          </option>
                        )}
                      </Translation>

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
                          <option value="-1" selected disabled>
                            {t("Please select")}
                          </option>
                        )}
                      </Translation>
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
                          <option value="-1" selected disabled>
                            {t("Please select")}
                          </option>
                        )}
                      </Translation>
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
                          <option value="-1" selected disabled>
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
              <div className="row mt-4">
                <div className="col-sm-2">
                  <button type="submit" className="btn fs-5  btn-primary">
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
        <h2 className="text-dark fs-5">
          <Trans>Report</Trans> : <Trans>Facility Map-Based</Trans> (
          {country?.country})
        </h2>
        <h5 className="text-dark fs-5">
          <Trans>Date</Trans>: {new Date().toISOString().split("T")[0]}
        </h5>
        <SharedMap locations={reports} />
      </div>
    </div>
  );
}

export default FacilityMapBasedReport;
