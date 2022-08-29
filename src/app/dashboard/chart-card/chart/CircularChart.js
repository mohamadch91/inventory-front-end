import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import ChangeProgressProvider from "./ChangeProgressProvider";

const CircularChart = (props) => {
  // props: percentage, color

  const wrapperStyle = {
    width: "40%",
    margin: "auto",
    padding: "1rem 0",
  };
  const progressbarStyle = buildStyles({
    textSize: "20px",
    pathTransitionDuration: 3,
    textColor: "#000000",
    pathColor: props.color,
  });

  return (
    <div style={wrapperStyle}>
      <ChangeProgressProvider values={[0, props.percentage]}>
        {(percentage) => (
          <CircularProgressbar
            value={props.maxOne ? percentage * 100 : percentage}
            text={props.maxOne ? `${percentage}` : `${percentage}%`}
            strokeWidth={5}
            styles={progressbarStyle}
          />
        )}
      </ChangeProgressProvider>
    </div>
  );
};

export default CircularChart;
