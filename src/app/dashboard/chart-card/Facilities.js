import React, { useEffect, useState } from "react";

import ChartDropDown from "./chart/ChartDropDown";
import classes from "./Facilities.module.css";
import Card from "../../shared/UI/Card";
import toast from "react-hot-toast";
import Spinner from "../../shared/Spinner";
import GaugeChart from "react-gauge-chart";
import { Trans } from "react-i18next";
import DashboardService from "../../services/dashboard.service";
import { useQuery } from "react-query";
/**
 * Component for facility card on dashboard
 */
const Facilities = () => {
  const [facilities, setFacilities] = useState([]);
  const [chartData, setChartData] = useState();
  // use query for get all facility servies
  const { data, isLoading, isFetched } = useQuery(
    ["charts-facilities"],
    async () => {
      const res = await DashboardService.getAllFacilities();
      
      return res.data;
    },
    {
      refetchOnMount: true,
    }
  );

  if (!isFetched) {
    return (
      <div className={"spinner-wrapper"} style={{ position: "relative" }}>
        <div className={"donut"} />
      </div>
    );
  }

  if (!isLoading && facilities.length === 0) {
    let tmp = [];
    data.map((el, i) => {
      tmp.push({ op: el.name, id: i, facility: el });
    });
    setFacilities(tmp);
    console.log(facilities);
  }

  const ddChangeHandler = (e) => {
    e.preventDefault();
    facilities.map((el) => {
      if (el.id === +e.target.value) {
        const definedNum = +el.facility.defined;
        setChartData({
          defined: definedNum.toFixed(2),
          subFacilities: el.facility.sub_fac,
          lower: el.facility.lower,
        });
      }
    });
  };

  return (
    <div className={classes.facilities}>
      <Card className="w-50  ">
        <h3>
          🏢 <Trans>Facilities</Trans>{" "}
        </h3>
        <ChartDropDown
          onChange={ddChangeHandler}
          options={facilities}
          text="Select facility"
        />
        <GaugeChart
          id="gauge-chart6"
          animate={true}
          nrOfLevels={15}
          percent={chartData ? chartData.defined : 0}
          needleColor="#345243"
          colors={["#EA4228", "#F5CD19", "#5BE12C"]}
          textColor={"#000000"}
          animDelay={100}
        />
        {chartData && (
          <>
            <div>
              <span>{chartData.subFacilities}</span>
              <p>
                {" "}
                <Trans>Sub-Facilities defined</Trans>{" "}
              </p>
            </div>
            <div>
              <span>{chartData.lower}</span>
              <p>
                {" "}
                <Trans>Can be defined</Trans>{" "}
              </p>
              <br></br>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};

export default Facilities;
