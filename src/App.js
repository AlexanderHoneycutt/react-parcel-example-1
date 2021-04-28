import React from "react";
import { useFetch } from "./hooks/useFetch";
import { scaleLinear } from "d3-scale";
import { extent, max, min, bin } from "d3-array";
import { scale } from "vega";
import * as topojson from "topojson-client";
import world from "../land-50m";



const App = () => {

  const [data, loading] = useFetch(
    "https://raw.githubusercontent.com/AlexanderHoneycutt/react-parcel-example-1/main/data/country_vaccinations%20-%20Copy.csv"
  );


  const dataSmallSample = data.slice(0, 5000);

  const TMAXextent = extent(dataSmallSample, (d) => {
    return +d.daily_vaccinations;
  });

  const land = topojson.feature(world, world.objects.land);
  const projection = d3.geoNaturalEarth1();
  const path = d3.geoPath(projection);
  const mapPathString = path(land);

  const size = 500;
  const margin = 20;
  const axisTextAlignmentFactor = 3;
  const yScale = scaleLinear()
    .domain(TMAXextent) // unit: num vaccinations
    .range([size - margin, size - 1000]); // unit: pixels

  _bins = bin().thresholds(30);
  dailyVaccinationsBins = _bins(
    data.map((d) => {
      return +d.daily_vaccinations;
    })
  );

  totalVaccinationsBins = _bins(
    data.map((d) => {
      return +d.total_vaccinations;
    })
  );

  const histogramLeftPadding = 20;

  return (
    <div>
      <h1>Exploratory Data Analysis, Assignment 2, INFO 474 SP 2021</h1>
      <p>{loading && "Loading data!"}</p>

      <h3> Working with geo data </h3>
      <svg width={1000} height={600} style={{ border: "1px solid black" }}>
        <path d={mapPathString} fill="rgb(200, 200, 200)" />
        {dataSmallSample.map((measurement) => {
          return (
            <circle
              transform={`translate(
                ${projection([measurement.longitude, measurement.latitude])})`}
              r="1.5"
            />
          );
        })}
      </svg>

      <h3> Daily Vaccination Binning </h3>
      <svg width={size} height={size} style={{ border: "1px solid black" }}>
        {dailyVaccinationsBins.map((bin, i) => {
          return (
            <rect
              y={size - 50 - bin.length}
              width="10"
              height={bin.length}
              x={histogramLeftPadding + i * 11}
            />
          );
        })}
      </svg>


      <h3> Total Vaccinations Binning </h3>
      <svg width={size} height={size} style={{ border: "1px solid black" }}>
        {totalVaccinationsBins.map((bin, i) => {
          return (
            <rect
              y={size - 50 - bin.length}
              width="10"
              height={bin.length}
              x={histogramLeftPadding + i * 11}
            />
          );
        })}
      </svg>


      <h3>Daily Vaccinations Grouped</h3>
      <svg width={size} height={size} style={{ border: "1px solid black" }}>
        <text
          x={size / 2 - 12}
          y={yScale(0) + axisTextAlignmentFactor}
          textAnchor="end"
          style={{ fontSize: 10, fontFamily: "Gill Sans, sans serif" }}
        >
          0
        </text>
        <text
          x={size / 2 - 12}
          y={yScale(1000) + axisTextAlignmentFactor}
          textAnchor="end"
          style={{ fontSize: 10, fontFamily: "Gill Sans, sans serif" }}
        >
          1000
        </text>
        <line
          x1={size / 2 - 10}
          y1={yScale(100)}
          x2={size / 2 - 5}
          y2={yScale(100)}
          stroke={"black"}
        />
        <line
          x1={size / 2 - 10}
          y1={yScale(0)}
          x2={size / 2 - 5}
          y2={yScale(0)}
          stroke={"black"}
        />

        {dataSmallSample.map((measurement, index) => {
          const highlight = measurement.country === "Afghanistan";
          return (
            <line
              key={index}
              x1={size / 2}
              y1={yScale(measurement.daily_vaccinations)}
              x2={size / 2 + 20}
              y2={yScale(measurement.daily_vaccinations)}
              stroke={highlight ? "red" : "steelblue"}
              strokeOpacity={highlight ? 1 : 0.1}
            />
          );
        })}
      </svg>
      <h3>Scatterplot</h3>
      <svg width={size} height={size} style={{ border: "1px solid black" }}>
        {dataSmallSample.map((measurement, index) => {
          const highlight = measurement.country === "Afghanistan";
          return (
            <circle
              key={index}
              cx={100 - measurement.daily_vaccinations} //TMIN
              cy={size - margin - measurement.daily_vaccinations} //TMAX
              r="3"
              fill="none"
              stroke={highlight ? "red" : "steelblue"}
              strokeOpacity="0.2"
            />
          );
        })}
      </svg>
      <h3>
        Barcode plot Daily Vaccinations in Afghanistan
      </h3>
      <svg width={size} height={size} style={{ border: "1px solid black" }}>
        <text
          x={size / 2 - 12}
          textAnchor="end"
          y={size - margin + axisTextAlignmentFactor}
          style={{ fontSize: 10, fontFamily: "Gill Sans, sans serif" }}
        >
          0
        </text>
        <text
          x={size / 2 - 12}
          textAnchor="end"
          y={size - margin - 100 + axisTextAlignmentFactor}
          style={{ fontSize: 10, fontFamily: "Gill Sans, sans serif" }}
        >
          100
        </text>
        <line
          x1={size / 2 - 10}
          y1={size - margin - 100}
          x2={size / 2 - 5}
          y2={size - margin - 100}
          stroke={"black"}
        />
        <line
          x1={size / 2 - 10}
          y1={size - margin}
          x2={size / 2 - 5}
          y2={size - margin}
          stroke={"black"}
        />

        {data.slice(0, 1000).map((measurement, index) => {
          const highlight = measurement.country === "Afghanistan";
          return (
            <line
              key={index}
              x1={size / 2}
              y1={size - margin - measurement.daily_vaccinations} //TMAX
              x2={size / 2 + 20}
              y2={size - margin - measurement.daily_vaccinations}
              stroke={highlight ? "red" : "steelblue"} //TMAX
              strokeOpacity={highlight ? 1 : 0.1}
            />
          );
        })}
      </svg>
      <h3>
        Daily Vaccinations in Afghanistan
      </h3>
      <svg width={size} height={size} style={{ border: "1px solid black" }}>
        {data.slice(0, 300).map((measurement, index) => {
          const highlight = measurement.country === "Afghanistan";
          return (
            <circle
              key={index}
              cx={highlight ? size / 2 : size / 2 - 20}
              cy={size - margin - measurement.daily_vaccinations} //TMAX
              r="3"
              fill="none"
              stroke={highlight ? "red" : "steelblue"}
              strokeOpacity="0.2"
            />
          );
        })}
      </svg>
      <h3>Rendering circles :) this shows a distribution of Daily Vaccinations in Afghanistan</h3>
      <svg width={size} height={size} style={{ border: "1px solid black" }}>
        {data.slice(0, 300).map((measurement, index) => {
          return (
            <circle
              key={index}
              cx={size / 2}
              cy={size - margin - measurement.daily_vaccinations} //TMAX
              r="3"
              fill="none"
              stroke={"steelblue"}
              strokeOpacity="0.2"
            />
          );
        })}
      </svg>
      

    </div>
  );
};

export default App;