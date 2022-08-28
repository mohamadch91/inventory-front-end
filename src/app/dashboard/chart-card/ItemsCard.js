import Card from "../../shared/UI/Card";
import ChartDropDown from "./chart/ChartDropDown";
import CircularChart from "./chart/CircularChart";
import React, { useState } from "react";

import classes from "./ItemCard.module.css";

const DUMMY_DATA = [
  {
    label: "lorem ipsum 1",
    value: "v1",
  },
  {
    label: "lorem ipsum 2 ",
    value: "v2",
  },
];
const ItemsCard = () => {
  const [ddValue, setDdValue] = useState("Items");

  const ddChangeHandler = (e) => {
    e.preventDefault();
    setDdValue(e.target.value);
  };

  return (
    <div className={classes.item}>
      <Card>
        <h3>🏢 Items </h3>
        <ChartDropDown onChange={ddChangeHandler} options={DUMMY_DATA} />
        <ChartDropDown onChange={ddChangeHandler} options={DUMMY_DATA} />
        <CircularChart percentage={45} text={"Defined!"} color={"#ffc542"} />
        <span>{22}</span>
        <p>Items</p>
      </Card>
    </div>
  );
};
export default ItemsCard;
