import React, { useEffect, useState } from "react";
import CircularChart from "./chart/CircularChart";
import ChartDropDown from "./chart/ChartDropDown";
import classes from "./Facilities.module.css";
import Card from "../../shared/UI/Card";
import useHttp from "../../shared/custom-hooks/use-http";
import { getFacilities } from "../dashboard-api";
import toast from "react-hot-toast";

const Facilities = () => {
  const [facilities, setFacilities] = useState([]);
  const [chartData, setChartData] = useState({ defined: 0, subFacilities: 0 });

  const { sendRequest, status, data, error: err } = useHttp(getFacilities);

  useEffect(() => {
    sendRequest();
  }, []);

  // Handling api response
  // TODO: add loading spinner
  if (status === "pending") {
    return (
      <div className={"centered"}>
        <h1> --PLACE LOADING SPINNER-- </h1>
      </div>
    );
  }

  // TODO: Remove error message at production
  if (err) {
    toast.error("There was a problem loading data");
    return <p>{err}</p>;
  }

  if (status === "completed" && facilities.length === 0) {
    console.log("completed");
    console.log(data);

    let tmp = [];
    data.map((el, i) => {
      tmp.push({ op: el.name, id: i, facility: el });
    });
    setFacilities(tmp);
  }

  const ddChangeHandler = (e) => {
    e.preventDefault();
    console.log(facilities);
    facilities.map((el) => {
      if (el.id === +e.target.value) {
        setChartData({
          defined: el.facility.defined,
          subFacilities: el.facility.sub_fac,
        });
      }
    });
  };

  return (
    <div className={classes.facilities}>
      <Card>
        <h3>🏢 Facilities </h3>
        <ChartDropDown onChange={ddChangeHandler} options={facilities} />
        <CircularChart
          percentage={chartData.defined}
          text={"Defined!"}
          color={"#44ce42"}
          maxOne={true}
        />
        <span>{chartData.subFacilities}</span>
        <p> Subset Facilities </p>
      </Card>
    </div>
  );
};

export default Facilities;
