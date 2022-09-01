import React, { useState } from "react";
import { Trans } from "react-i18next";
import { useQuery } from "react-query";
import ReportService from "../services/report.service";
import Spinner from "../shared/Spinner";
import SharedTable from "../shared/SharedTable";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import "../styles/table.scss";
import { Form } from "react-bootstrap";
import "./form.scss";
import { separator } from "../helpers/separator";

const table1Data = [
  {
    headTitle: "Level",
    valueKey: "id",
  },
  {
    headTitle: "Level name",
    valueKey: "name",
  },
  {
    headTitle: "General population",
    valueKey: "general",
  },
  {
    headTitle: "Number of under-one children served by this facility",
    valueKey: "under1",
  },
  {
    headTitle: "Cold RoomA",
    valueKey: "cold_a",
  },
  {
    headTitle: "Freezer Room",
    valueKey: "fr",
  },
  {
    headTitle: "Refrigerator",
    valueKey: "refrig",
  },
  {
    headTitle: "Freezer",
    valueKey: "freezer",
  },
  {
    headTitle: "Cold Box",
    valueKey: "cb",
  },
  {
    headTitle: "Vaccine Carrier",
    valueKey: "vc",
  },
  {
    headTitle: "Cold RoomA",
    valueKey: "nw_cold_a",
  },
  {
    headTitle: "Freezer Room",
    valueKey: "nw_fr",
  },
  {
    headTitle: "Refrigerator",
    valueKey: "nw_refrig",
  },
  {
    headTitle: "Freezer",
    valueKey: "nw_freezer",
  },
  {
    headTitle: "Cold Box",
    valueKey: "nw_cb",
  },
  {
    headTitle: "Vaccine Carrier",
    valueKey: "nw_vc",
  },
];

const table2Data = [
  {
    headTitle: "Level",
    valueKey: "id",
    func: (val) => val,
    size: "fit",
  },
  {
    headTitle: "Level name",
    valueKey: "name",
    func: (val) => val,
    size: "fit",
  },
  {
    headTitle: "General population",
    valueKey: "general",
    func: (val) => separator(val),
    size: "fit",
  },
  {
    headTitle: "Number of under-one children served by this facility",
    valueKey: "under1",
    func: (val) => separator(val),
    size: "large",
  },
  {
    headTitle: "Require capacity per target population (cm3)",
    valueKey: "req",
    func: (val) => (+val).toFixed(2),
    size: "large",
  },
  {
    headTitle: "Available capacity per target population (cm3)",
    valueKey: "available",
    func: (val) => (+val).toFixed(2),
    size: "large",
  },
  {
    headTitle:
      "The difference between available capacity and require capacity per target population (cm3)",
    valueKey: "diff",
    func: (val) => (+val).toFixed(2),
    size: "large",
  },
  {
    headTitle: "Require capacity",
    valueKey: "require_capacity",
    func: (val) => (+separator(val)).toFixed(2),
    size: "fit",
  },
  {
    headTitle: "Available capacity (lit.)",
    valueKey: "available_capacity",
    func: (val) => (+separator(val)).toFixed(2),
    size: "fit",
  },
  {
    headTitle:
      "The difference between current available capacity and require capacity (lit.)",
    valueKey: "diff_capacity",
    func: (val) => (+separator(val)).toFixed(2),
    size: "large",
  },
];

const degrees = [
  {
    id: 1,
    name: "2-8 C",
  },
  {
    id: 2,
    name: "-20 C",
  },
  {
    id: 3,
    name: "-70 C",
  },
  {
    id: 4,
    name: "+25 C",
  },
];

function ProfileOfColdChain() {
  const [selectedDegree, setSelectedDegree] = useState(1);

  const { data: reports, isLoading: isReportsLoading } = useQuery(
    ["profile-of-cold-chain", selectedDegree],
    async () => {
      const res = await ReportService.getColdProf(selectedDegree);
      return res.data;
    }
  );

  if (isReportsLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h3 className="page-title mb-3">
        <Trans>Profile of Cold Chain</Trans>
      </h3>
      <div className="mt-3">
        <div className="card">
          <div className="card-body py-3">
            <div className="mt-3 table-container">
              <SharedTable>
                <TableHead>
                  <TableRow>
                    <TableCell align="center" colSpan={4}></TableCell>
                    <TableCell align="center" colSpan={6}>
                      Exist Items
                    </TableCell>
                    <TableCell align="center" colSpan={6}>
                      Not Work Items
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    {table1Data.map((cell, i) => (
                      <TableCell
                        key={cell.headTitle}
                        style={{ minWidth: i === 3 ? "230px" : "" }}
                      >
                        <Trans>{cell.headTitle}</Trans>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {reports?.table_1.map((report, index) => {
                    return (
                      <TableRow key={index}>
                        {table1Data.map((data) => (
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
      <div className="mt-3">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-12 col-lg-6">
                <Form.Group className="row">
                  <label className="col-sm-4 mt-3">
                    <Trans>Please select ...</Trans>
                  </label>
                  <Form.Control
                    className="form-select col-sm-3"
                    onChange={(e) => {
                      const value = e.target.value;
                      setSelectedDegree(value);
                    }}
                    value={selectedDegree}
                    as="select"
                  >
                    {degrees.map((i) => (
                      <option key={i.id} value={i.id}>
                        {i.name}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </div>
            </div>
            <div className="mt-3 table-container">
              <SharedTable>
                <TableHead>
                  <TableRow>
                    {table2Data.map((cell) => (
                      <TableCell
                        key={cell.headTitle}
                        style={{
                          minWidth: cell.size === "large" ? "230px" : "auto",
                        }}
                      >
                        <Trans>{cell.headTitle}</Trans>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {reports?.table_2.map((report, index) => {
                    return (
                      <TableRow key={index}>
                        {table2Data.map((data) => (
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
    </div>
  );
}

export default ProfileOfColdChain;
