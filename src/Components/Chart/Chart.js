import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
function Chart(props) {
  return (
    <div className="chart">
      <ChartBar />
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.lable}
          value={dataPoint.value}
          maxValue={null}
          lable={dataPoint.lable}
        />
      ))}
    </div>
  );
}

export default Chart;
