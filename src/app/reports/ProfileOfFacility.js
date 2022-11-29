import React from "react";
import { Trans } from "react-i18next";
import { useQuery } from "react-query";
import ReportService from "../services/report.service";
import Spinner from "../shared/Spinner";
import SharedTable from "../shared/SharedTable";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import "../styles/table.scss";
import { separator } from "../helpers/separator";
const allTableData = {
  by_type: [
    {
      headTitle: "Level",
      valueKey: "level",
      func: (val) => val,
    },
    {
      headTitle: "Level Name",
      valueKey: "name",
      func: (val) => val,
    },
    {
      headTitle: "Facility types",
      valueKey: "type",
      func: (val) => val,
    },
    {
      headTitle: "Total number of facilities",
      valueKey: "count",
    func: (val) => separator(val),

    },
  ],
  func: (val) => val,

  by_owner: [
    {
      headTitle: "Level",
      valueKey: "level",
      func: (val) => val,
    },
    {
      headTitle: "Level Name",
      valueKey: "name",
      func: (val) => val,
    },
    {
      headTitle: "Ownership",
      valueKey: "owner",
      func: (val) => val,
    },
    {
      headTitle: "Total number of facilities",
      valueKey: "count",
    func: (val) => separator(val),

    },
  ],
  by_power: [
    {
      headTitle: "Level",
      valueKey: "level",
      func: (val) => val,
    },
    {
      headTitle: "Level Name",
      valueKey: "name",
      func: (val) => val,
    },
    {
      headTitle: "Power source",
      valueKey: "power",
      func: (val) => val,
    },
    {
      headTitle: "Total number of facilities",
      valueKey: "count",
    func: (val) => separator(val),

    },
  ],
  general: [
    {
      headTitle: "Level",
      valueKey: "level",
      func: (val) => val,
    },
    {
      headTitle: "Level Name",
      valueKey: "name",
      func: (val) => val,
    },
    {
      headTitle: "Total",
      valueKey: "total",
    func: (val) => separator(val),

    },
    {
      headTitle: "Average populations",
      valueKey: "avg",
    func: (val) => separator(val),

    },
    {
      headTitle: "Minimum populations",
      valueKey: "min",
    func: (val) => separator(val),

    },
    {
      headTitle: "Maximum populations",
      valueKey: "max",
    func: (val) => separator(val),

    },
  ],
  under_1: [
    {
      headTitle: "Level",
      valueKey: "level",
      func: (val) => val,
    },
    {
      headTitle: "Level Name",
      valueKey: "name",
      func: (val) => val,
    },
    {
      headTitle: "Total",
      valueKey: "total",
    func: (val) => separator(val),

    },
    {
      headTitle: "Average populations",
      valueKey: "avg",
    func: (val) => separator(val),

    },
    {
      headTitle: "Minimum populations",
      valueKey: "min",
    func: (val) => separator(val),

    },
    {
      headTitle: "Maximum populations",
      valueKey: "max",
    func: (val) => separator(val),

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
                          {data.func(report[data.valueKey]) ?? "-"}
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
  const country = JSON.parse(localStorage.getItem("country")) || {};
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
      <h3 className="text-black">
        <Trans>Report</Trans>:<Trans>Profile of facilities</Trans> (
        {country?.country})
      </h3>
      <h5 className="text-black">
        <Trans>Date</Trans>: {new Date().toLocaleDateString("en-GB")}
      </h5>
      {reports &&
        Object.keys(reports).map((key) => {
          const title =
            key === "general" ? (
              <Trans>General populations</Trans>
            ) : key === "under_1" ? (
              <Trans>Under-1 Population</Trans>
            ) : (
              ""
            );
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
