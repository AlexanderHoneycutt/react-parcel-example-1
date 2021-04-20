import React from "react";
import {csv} from "d3-fetch";
import { useState, useEffect } from "react";
import { useFetch } from "./hooks/useFetch";

const App = () => {

  const [data, loading] = useFetch(
    "https://raw.githubusercontent.com/AlexanderHoneycutt/react-parcel-example-1/main/data/country_vaccinations%20-%20Copy.csv"
  );

  console.log("from hook", loading, data);

  return (
    <div>
      <h1>Exploratory Data Analysis Assignment #2 Info 474, Spring 2021</h1>
      <p>{loading && "Loading data!"}</p> 
    </div>
  );
};

export default App;