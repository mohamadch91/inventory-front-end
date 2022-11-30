import React, { useEffect, useState } from "react";
import { Translation,Trans } from "react-i18next";
import { useQuery } from "react-query";
import { Form } from "react-bootstrap";
import ReportService from "../services/report.service";
import "./form.scss";
import Spinner from "../shared/Spinner";
import SharedTable from "../shared/SharedTable";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import "../styles/table.scss";
import { separator } from "../helpers/separator";
import { SubFacilityReportChart } from "../charts/SubFacilityReportChart";

function SubFacilityPopulationDataReport() {
  const [selectedLevel, setSelectedLevel] = useState(-1);

  const { data: subFacHelper, isLoading: isSubFacHelperLoading } = useQuery(
    ["sub-fac-pop-data-helper"],
    async () => {
      const res = await ReportService.getSubFacPop({ help: true });
      return res.data;
    }
  );

  const {
    data: reports,
    isLoading: isReportsLoading,
    refetch: fetchReports,
  } = useQuery(["sub-fac-pop-report"], async () => {
    const params = {
      help: false,
    };
    if (selectedLevel !== -1) {
      params["level"] = selectedLevel;
    }
    const res = await ReportService.getSubFacPop(params);
    return res.data;
  });

  useEffect(() => {
    if (selectedLevel) {
      fetchReports();
    }
  }, [selectedLevel]);

  const country = JSON.parse(localStorage.getItem("country"));

  if (isSubFacHelperLoading || isReportsLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h3 className="page-title mb-3">
        <Trans>Sub-facility populations data</Trans>
      </h3>
      <SubFacilityReportChart
        isGeneral={country?.poptarget === "General population"}
        rows={reports}
      />
      <div className="mt-3">
        <div className="card">
          <div className="card-body py-3">
            <Form.Group className="row">
              <label className="col-sm-4 mt-4">
                <Trans>Levels</Trans>:
              </label>
              <Form.Control
                className="form-select col-sm-4 mt-1"
                onChange={(e) => {
                  const value = e.target.value;
                  setSelectedLevel(value);
                }}
                as="select"
              >
                <Translation>
                  {(t, { i18n }) => (
                    <option i18n value="-1" selected>
                      {t("Please select")}
                    </option>
                  )}
                </Translation>
                {subFacHelper?.map((lev) => (
                  <option key={lev.id} value={lev.id}>
                    {`${lev.id} - ${lev.name}`}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
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
                    <TableCell className="col-sm-2">
                      <Trans>Facility Name</Trans>
                    </TableCell>
                    <TableCell className="col-sm-2">
                      <Trans>Facility parent</Trans>
                    </TableCell>
                    <TableCell className="col-sm-2">
                      <Trans>Level</Trans>
                    </TableCell>
                    <TableCell className="col-sm-2">
                      <Trans>Code</Trans>
                    </TableCell>
                    <TableCell className="col-sm-1">
                      <Trans>Type</Trans>
                    </TableCell>
                    <TableCell className="col-sm-1">
                      <Trans>Under 1</Trans>
                    </TableCell>
                    <TableCell className="col-sm-2">
                      <Trans>General populations</Trans>
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
                        <TableCell className="col-sm-2">
                          {report.level ?? "-"}
                        </TableCell>
                        <TableCell className="col-sm-2">
                          {report.code ?? "-"}
                        </TableCell>
                        <TableCell className="col-sm-1">
                          {report.type ?? "-"}
                        </TableCell>
                        <TableCell className="col-sm-1">
                          {separator(report.underage) ?? "-"}
                        </TableCell>
                        <TableCell className="col-sm-2">
                          {separator(report.generalpopulation) ?? "-"}
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

export default SubFacilityPopulationDataReport;
