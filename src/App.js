import React from "react";
import {csv} from "d3-fetch";
import { useState, useEffect } from "react";
import { useFetch } from "./hooks/useFetch";

const App = () => {

  const [data, loading] = useFetch(
    "https://raw.githubusercontent.com/AlexanderHoneycutt/react-parcel-example-1/main/data/country_vaccinations%20-%20Copy.csv"
  );

  console.log("from hook", loading, data);

  const chartSize = 500;
  const margin = 20;

  return (
    <div>
      <h1>Exploratory Data Analysis Assignment #2 Info 474, Spring 2021</h1>
      <p>{loading && "Loading data!"}</p>
      <h3>Rendering Circles :) This shows a distribution of Daily Vaccinations</h3>
      <svg width={chartSize} height={chartSize} style={{ border: "1px solid black" }}>
        {data.slice(0, 300).map((measurement, index) => {
          const highlight = measurement.country === "Afghanistan";
          return (
            <circle
              key={index}
              cx={highlight ? chartSize / 2 : chartSize / 2 - 20}
              cy={chartSize - margin - measurement.daily_vaccinations}
              r="3"
              fill="none"
              stroke={highlight ? "red" : "steelblue"}
              strokeOpacity="0.2"
            />
          );
        })}
      </svg>

      <h3>Rendering Lines :) This shows a distribution of Daily Vaccinations</h3>
      
      <svg width={chartSize} height={chartSize} style={{ border: "1px solid black" }}>
        {data.slice(0, 300).map((measurement, index) => {
          const highlight = measurement.country === "Afghanistan";
          return (
            <line
              key={index}
              x1={chartSize / 2}
              y1={chartSize - margin - measurement.daily_vaccinations}
              x2={chartSize / 2 + 20}
              y2={chartSize - margin - measurement.daily_vaccinations}
              stroke={highlight ? "red" : "steelblue"}
              strokeOpacity={highlight ? 1 : 0.1}
            />
          );
        })}
      </svg>

    </div>
  );
};

export default App;