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
import { seperator } from "../helpers/seperator";
const table1Data = [
  {
    headTitle: "Level",
    valueKey: "id",
    func: (val) => val,
  },
  {
    headTitle: "Level Name",
    valueKey: "name",
    func: (val) => val,
  },
  {
    headTitle: "General population",
    valueKey: "general",
    func: (val) => separator(val),
  },
  {
    headTitle: "Number of under-one children",
    valueKey: "under1",
    func: (val) => separator(val),
  },
  {
    headTitle: "Cold RoomA",
    valueKey: "cold_a",
    func: (val) => val,
  },
  {
    headTitle: "Freezer Room",
    valueKey: "fr",
    func: (val) => val,
  },
  {
    headTitle: "Refrigerator",
    valueKey: "refrig",
    func: (val) => val,
  },
  {
    headTitle: "Freezer",
    valueKey: "freezer",
    func: (val) => val,
  },
  {
    headTitle: "Cold Box",
    valueKey: "cb",
    func: (val) => val,
  },
  {
    headTitle: "Vaccine Carrier",
    valueKey: "vc",
    func: (val) => val,
  },
  {
    headTitle: "Cold RoomA",
    valueKey: "nw_cold_a",
    func: (val) => val,
  },
  {
    headTitle: "Freezer Room",
    valueKey: "nw_fr",
    func: (val) => val,
  },
  {
    headTitle: "Refrigerator",
    valueKey: "nw_refrig",
    func: (val) => val,
  },
  {
    headTitle: "Freezer",
    valueKey: "nw_freezer",
    func: (val) => val,
  },

  {
    headTitle: "Cold Box",
    valueKey: "nw_cb",
    func: (val) => val,
  },
  {
    headTitle: "Vaccine Carrier",
    valueKey: "nw_vc",
    func: (val) => val,
  },
];

const table2Data = [
  {
    headTitle: "Level",
    valueKey: "id",
    func: (val) => val,
    size: "fit",
    align: "left",
  },
  {
    headTitle: "Level name",
    valueKey: "name",
    func: (val) => val,
    size: "fit",
    align: "left",
  },
  {
    headTitle: "General population",
    valueKey: "general",
    func: (val) => separator(val),
    size: "large",
    align: "right",
  },
  {
    headTitle: "Number of under-one children ",
    valueKey: "under1",
    func: (val) => separator(val),
    size: "large",
    align: "right",
  },
  {
    headTitle: "Required capacity",
    valueKey: "req",
    func: (val) => (+val).toFixed(2).toString().replace(".", seperator()),
    size: "fit",
    align: "right",
  },
  {
    headTitle: "Available capacity",
    valueKey: "available",
    func: (val) => (+val).toFixed(2).toString().replace(".", seperator()),
    size: "large",
    align: "right",
  },
  {
    headTitle:
      "The difference between available capacity and required capacity",
    valueKey: "diff",
    func: (val) => val.toFixed(2).toString().replace(".", seperator()),
    size: "large",
    align: "right",
  },
  {
    headTitle: "Required capacity per target population",
    valueKey: "require_capacity",
    func: (val) => val.toFixed(2).toString().replace(".", seperator()),
    size: "fit",
    align: "left",
  },
  {
    headTitle: "Available capacity per target population",
    valueKey: "available_capacity",
    func: (val) => val.toFixed(2).toString().replace(".", seperator()),
    size: "fit",
    align: "right",
  },
  {
    headTitle:
      "The difference between current available capacity and required capacity per target population",
    valueKey: "diff_capacity",
    func: (val) => val.toFixed(2).toString().replace(".", seperator()),
    size: "large",
    align: "right",
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

  const country = JSON.parse(localStorage.getItem("country")) || {};

  return (
    <div>
      <h3 className="page-title mb-3">
        <Trans>Profile of cold chain equipment</Trans>
      </h3>
      <div className="mt-3">
        <div className="card">
          <div className="card-body py-3">
            <h4>
              <Trans>Report</Trans> :{" "}
              <Trans>Profile of cold chain equipment</Trans> ({country?.country}
              )
            </h4>
            <h6>Date: {new Date().toLocaleDateString("en-GB")}</h6>
            <div className="mt-3 table-container">
              <SharedTable>
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="center"
                      colSpan={4}
                      sx={{
                        borderRight: "1px solid black",
                      }}
                    ></TableCell>
                    <TableCell colspan={2}></TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        borderRight: "1px solid black",
                      }}
                      colSpan={4}
                    >
                      <Trans>Existing items</Trans>
                    </TableCell>
                    <TableCell colspan={2}></TableCell>
                    <TableCell align="center" colSpan={6}>
                      <Trans>Not working items</Trans>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    {table1Data.map((cell, i) => (
                      <TableCell
                        key={cell.headTitle}
                        style={{ minWidth: i === 3 || i === 2 ? "230px" : "" }}
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
      <div className="mt-3">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-12 col-lg-6">
                <Form.Group className="row">
                  <label className="col-sm-4 mt-3">
                    <Trans>Please select</Trans> ...
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
                          textAlign: cell.align,
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
                          <TableCell
                            style={{ textAlign: data.align }}
                            key={data.valueKey}
                          >
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
