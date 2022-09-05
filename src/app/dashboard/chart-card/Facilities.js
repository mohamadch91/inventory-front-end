import React, { useEffect, useState } from "react";

import ChartDropDown from "./chart/ChartDropDown";
import classes from "./Facilities.module.css";
import Card from "../../shared/UI/Card";
import useHttp from "../../shared/custom-hooks/use-http";
import { getFacilities } from "../dashboard-api";
import toast from "react-hot-toast";
import Spinner from "../../shared/Spinner";
import GaugeChart from "react-gauge-chart";
import { Trans } from "react-i18next";
const Facilities = () => {
  const [facilities, setFacilities] = useState([]);
  const [chartData, setChartData] = useState();

  const { sendRequest, status, data, error: err } = useHttp(getFacilities);

  useEffect(() => {
    sendRequest();
  }, []);

  // Handling api response
  if (status === "pending") {
    return <Spinner />;
  }

  // TODO: Remove error message at production
  if (err) {
    toast.error("There was a problem loading data");
    return <p>{err}</p>;
  }

  if (status === "completed" && facilities.length === 0) {
    let tmp = [];
    data.map((el, i) => {
      tmp.push({ op: el.name, id: i, facility: el });
    });
    setFacilities(tmp);
  }

  const ddChangeHandler = (e) => {
    e.preventDefault();
    facilities.map((el) => {
      if (el.id === +e.target.value) {
        const definedNum = +el.facility.defined;
        setChartData({
          defined: definedNum.toFixed(2),
          subFacilities: el.facility.sub_fac,
        });
      }
    });
  };

  return (
    <div className={classes.facilities}>
      <Card className="w-50">
        <h3>
          🏢 <Trans>Facilities</Trans>{" "}
        </h3>
        <ChartDropDown onChange={ddChangeHandler} options={facilities} text="Select facility"/>
        <GaugeChart
          id="gauge-chart6"
          animate={true}
          nrOfLevels={15}
          percent={chartData ? chartData.defined : ""}
          needleColor="#345243"
          colors={["#EA4228", "#F5CD19", "#5BE12C"]}
          textColor={"#000000"}
          animDelay={100}
        />
        {chartData && (
          <div>
            <span>{chartData.subFacilities}</span>
            <p>
              {" "}
              <Trans>Subset Facilities</Trans>{" "}
            </p>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Facilities;
