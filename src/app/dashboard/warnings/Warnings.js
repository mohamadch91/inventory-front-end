import WarningItem from "./WarningItem";
import React from "react";

import classes from "./Warnings.module.css";
import { useQuery } from "react-query";

import dashboardService from "../../services/dashboard.service";

const warningsData = [
  {
    title: "Maintenance services must be done in   ",

    badge: "7 Days",
  },
  {
    title: "Maintenance services must be done in   ",

    badge: "3 Days",
  },
  {
    title: "Maintenance  services were ",
    badge: "not performed on time",
  },
];

const Warnings = () => {
  const { data, isLoading: warningData } = useQuery(
    ["warnings"],
    async () => {
      const res = await dashboardService.getAllWarningsData();
      return res.data;
    },
    {
      refetchOnMount: true,
    }
  );

  if (warningData || data.length === 0) {
    return null;
  }

  console.log(data);

  return (
    <div className={`card-body recent-activity ${classes.warnings}`}>
      <h4 className="card-title"> Warnings</h4>

      <p className="card-description">
        Warnings that need to be taken cared of
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
        </div>
      )}
    </div>
  );
};
export default Warnings;
