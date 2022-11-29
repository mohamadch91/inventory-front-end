import WarningItem from "./WarningItem";
import React from "react";

import classes from "./Warnings.module.css";
import { useQuery } from "react-query";

import dashboardService from "../../services/dashboard.service";
import LogBookItem from "./tables/logbook/LogBookItem";
import { Trans } from "react-i18next";

const warningsData = [
  {
    title: "Maintenance services must be done in",

    badge: "7 Days",
  },
  {
    title: "Maintenance services must be done in",

    badge: "3 Days",
  },
  {
    title: "Maintenance services were",
    badge: "not performed on time",
  },
  {
    title: "Maintenance  services were",
    badge: "not performed on time",
  },
];

const Warnings = () => {
  const { data, isLoading } = useQuery(
    ["warnings"],
    async () => {
      const res = await dashboardService.getAllWarningsData();
      return res.data;
    },
    {
      refetchOnMount: true,
    }
  );

  if (isLoading || data.length === 0) {
    return (
      <div className={"spinner-wrapper"} style={{ position: "relative" }}>
        <div className={"donut"} />
      </div>
    );
  }

  return (
    <div
      className={`card-body recent-activity ${classes.warnings}`}
    >
      <h2 className="card-title text-black text-bold">
        <Trans>Warnings</Trans>
      </h2>

      <p className="card-description text-black text-bold fs-5">
        <Trans>Warnings that need to be taken care of</Trans>
      </p>

      {data && (
        <div className="activities">
          <WarningItem
            title={warningsData[0].title}
            text={warningsData[0].text}
            badge={warningsData[0].badge}
            count={data.seven_days}
            badgeOp={50}
            param={"day=7"}
          />
          <WarningItem
            title={warningsData[1].title}
            text={warningsData[1].text}
            badge={warningsData[1].badge}
            count={data.three_days}
            badgeOp={75}
            param={"day=3"}
          />
          <WarningItem
            title={warningsData[2].title}
            text={warningsData[2].text}
            badge={warningsData[2].badge}
            count={data.extended.count}
            maxExtended={data.extended.maxExtended}
            badgeOp={100}
            param={"day=extended"}
          />
          <LogBookItem />
        </div>
      )}
     
    </div>
  );
};
export default Warnings;
