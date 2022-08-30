import Card from "../../shared/UI/Card";
import ChartDropDown from "./chart/ChartDropDown";
import CircularChart from "./chart/CircularChart";
import React, { useEffect, useState } from "react";

import { getItemsAndTypes } from "../dashboard-api";
import useHttp from "../../shared/custom-hooks/use-http";

import classes from "./ItemCard.module.css";
import toast from "react-hot-toast";
import Spinner from "../../shared/Spinner";
import GaugeChart from "react-gauge-chart";

const ItemsCard = () => {
  const [itemClasses, setItemClasses] = useState([]);
  const [items, setItems] = useState([]);
  const [chartData, setChartData] = useState({ workings: 0, totalItems: 0 });

  // api call to get items and types
  const { sendRequest, status, data, error: err } = useHttp(getItemsAndTypes);

  useEffect(() => {
    sendRequest();
  }, []);

  // Handling api response

  if (status === "pending") {
    return (
      <div className={"centered"}>
        <Spinner />
      </div>
    );
  }
  // TODO: Remove error message at production
  if (err) {
    toast.error("There was a problem loading data");
    return <p>{err}</p>;
  }

  // ----------- Feeding to app
  // creating first dropdown available options
  if (status === "completed" && itemClasses.length === 0) {
    // Setting item classes
    let tmp = [];
    data.map((el, i) => {
      tmp.push({ op: el.item_class, id: i });
    });
    setItemClasses(tmp);

    tmp = [];
  }
  // after selecting first dropdown option, create second dropdown options based in first ID.
  const itemClassChangeHandler = (e) => {
    e.preventDefault();
    let tmp = [];
    const classId = e.target.value;

    data.map((el, i) => {
      if (i === +classId) {
        el.items.map((el, j) => {
          tmp.push({
            id: j,
            classId: i,
            op: el.item_type,
            working: el.working,
            totalItems: el.total_items,
          });
        });
      }
    });

    setItems(tmp);
  };
  // like before, find desired result based on ID found in onChange event.
  const itemChangeHandler = (e) => {
    const itemId = e.target.value;
    items.map((el) => {
      if (el.id === +itemId) {
        setChartData({ working: el.working, totalItems: el.totalItems });
      }
    });
  };

  return (
    <div className={classes.item}>
      <Card>
        <h3>🏢 Items </h3>

        <ChartDropDown
          onChange={itemClassChangeHandler}
          options={itemClasses}
        />

        <ChartDropDown onChange={itemChangeHandler} options={items} />
        <GaugeChart
          className="pt-3"
          id="gauge-chart6"
          animate={true}
          nrOfLevels={10}
          percent={chartData.working || 0}
          needleColor="#345243"
          colors={[ "#EA4228","#F5CD19", "#5BE12C"]}
          textColor={"#000000"}
          animDelay={100}
        />

        <span>{chartData.totalItems}</span>
        <p>Items</p>
      </Card>
    </div>
  );
};
export default ItemsCard;
