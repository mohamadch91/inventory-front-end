import Card from "../../shared/UI/Card";
import ChartDropDown from "./chart/ChartDropDown";
import React, { useEffect, useState } from "react";

import { getItemsAndTypes } from "../dashboard-api";
import useHttp from "../../shared/custom-hooks/use-http";

import classes from "./ItemCard.module.css";
import toast from "react-hot-toast";
import GaugeChart from "react-gauge-chart";
import { Trans } from "react-i18next";
/**
 * component for item card in dashboard
 */

const ItemsCard = () => {
  const [itemClasses, setItemClasses] = useState([]);
  const [items, setItems] = useState([]);
  const [chartData, setChartData] = useState();

  // api call to get items and types
  const { sendRequest, status, data, error: err } = useHttp(getItemsAndTypes);

  useEffect(() => {
    sendRequest();
  }, []);

  // Handling api response

  if (status === "pending") {
    return (
      <div className={"spinner-wrapper"} style={{ position: "relative" }}>
        <div className={"donut"} />
      </div>
    );
  }
  // TODO: Remove error message at production
  if (err) {
    toast.error(<Trans>There was a problem loading data</Trans>);
    return <p>{err}</p>;
  }

  // ----------- Feeding to app
  // creating first dropdown available options
  if (status === "completed" && itemClasses.length === 0) {
    // Setting item classes
    let tmp = [];
    console.log(data)
    data?.map((el, i) => {
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

    data?.map((el, i) => {
      if (i === +classId) {
        el.items.map((el, j) => {
          tmp.push({
            id: j,
            classId: i,
            op: el.item_type,
            working: el.working,
            notWorking: el.not_working,
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
    items?.map((el) => {
      if (el.id === +itemId) {
        setChartData({
          notWorking: el.notWorking,
          working: el.working.toFixed(2),
          totalItems: el.totalItems,
        });
      }
    });
  };

  return (
    <div className={classes?.item}>
      <Card>
        <h3>
          🏢 <Trans>Items</Trans>{" "}
        </h3>
        <ChartDropDown
          onChange={itemClassChangeHandler}
          options={itemClasses}
          text="Select item Class"
        />
        <ChartDropDown
          onChange={itemChangeHandler}
          options={items}
          text="Select items Category"
        />
        <GaugeChart
          className="pt-3"
          id="gauge-chart6"
          animate={true}
          nrOfLevels={15}
          percent={chartData ? chartData.working : 0}
          needleColor="#345243"
          colors={["#EA4228", "#F5CD19", "#5BE12C"]}
          textColor={"#000000"}
          animDelay={100}
        />
        {chartData && (
          <div>
            <span>{chartData?.totalItems}</span>
            <p>
              <Trans>Items</Trans>
            </p>
            <p >
              <Trans>Working</Trans>: {chartData?.working * 100}%
            </p>
            <p  >
              <Trans>Not working</Trans>: {chartData?.notWorking}
            </p>
          </div>
        )}
      </Card>
    </div>
  );
};
export default ItemsCard;
