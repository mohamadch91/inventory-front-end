import React from "react";
import { Trans } from "react-i18next";
import { useQuery } from "react-query";
import ReportService from "../services/report.service";
import Spinner from "../shared/Spinner";
import SharedTable from "../shared/SharedTable";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import "../styles/table.scss";

const allTableData = {
  by_type: [
    {
      headTitle: "Level",
      valueKey: "level",
    },
    {
      headTitle: "Level Name",
      valueKey: "name",
    },
    {
      headTitle: "Facility type",
      valueKey: "type",
    },
    {
      headTitle: "Total number of facilities",
      valueKey: "count",
    },
  ],
  by_owner: [
    {
      headTitle: "Level",
      valueKey: "level",
    },
    {
      headTitle: "Level Name",
      valueKey: "name",
    },
    {
      headTitle: "Ownership",
      valueKey: "owner",
    },
    {
      headTitle: "Total number of facilities",
      valueKey: "count",
    },
  ],
  by_power: [
    {
      headTitle: "Level",
      valueKey: "level",
    },
    {
      headTitle: "Level Name",
      valueKey: "name",
    },
    {
      headTitle: "Power source",
      valueKey: "power",
    },
    {
      headTitle: "Total number of facilities",
      valueKey: "count",
    },
  ],
  general: [
    {
      headTitle: "Level",
      valueKey: "level",
    },
    {
      headTitle: "Level Name",
      valueKey: "name",
    },
    {
      headTitle: "Total",
      valueKey: "total",
    },
    {
      headTitle: "Average population",
      valueKey: "avg",
    },
    {
      headTitle: "Minimum population",
      valueKey: "min",
    },
    {
      headTitle: "Maximum population",
      valueKey: "max",
    },
  ],
  under_1: [
    {
      headTitle: "Level",
      valueKey: "level",
    },
    {
      headTitle: "Level Name",
      valueKey: "name",
    },
    {
      headTitle: "Total",
      valueKey: "total",
    },
    {
      headTitle: "Average population",
      valueKey: "avg",
    },
    {
      headTitle: "Minimum population",
      valueKey: "min",
    },
    {
      headTitle: "Maximum population",
      valueKey: "max",
    },
  ],
};

const ReportTable = (props) => {
  const { reports, tableData, title } = props;

  return (
    <div className="mt-3">
      <div className="card">
        <div className="card-body py-3">
          {title.length > 0 && <h4 className="mt-2">{title}</h4>}
          <div className="mt-3 table-container">
            <SharedTable>
              <TableHead>
                <TableRow>
                  {tableData.map((data) => (
                    <TableCell key={data.headTitle}>
                      <Trans>{data.headTitle}</Trans>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {reports?.map((report, index) => {
                  return (
                    <TableRow key={index}>
                      {tableData.map((data) => (
                        <TableCell key={data.valueKey}>
                          {report[data.valueKey] ?? "-"}
                        </TableCell>
                      ))}
                    </TableRow>
                  );
                })}
              </TableBody>
            </SharedTable>
          </div>
        </div>
      </div>
    </div>
  );
};

function ProfileOfFacility() {
  const { data: reports, isLoading: isReportsLoading } = useQuery(
    ["profile-of-facility-reports"],
    async () => {
      const res = await ReportService.getProfOfFac();
      return res.data;
    }
  );

  if (isReportsLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h3 className="page-title mb-3">
        <Trans>Profile of facility</Trans>
      </h3>
      {reports &&
        Object.keys(reports).map((key) => {
          const title =
            key === "general"
              ? "General population"
              : key === "under_1"
              ? "Under-1 Population"
              : "";
          return (
            <ReportTable
              reports={reports[key]}
              tableData={allTableData[key]}
              title={title}
            />
          );
        })}
    </div>
  );
}

export default ProfileOfFacility;
