import React from "react";
import {csv} from "d3-fetch";

const App = () => {

  csv("https://raw.githubusercontent.com/AlexanderHoneycutt/react-parcel-example-1/main/data/country_vaccinations%20-%20Copy.csv")
  .then(data => console.log(data));

  return (
    <div>
      <h1>Exploratory Data Analysis Assignment #2 Info 474, Spring 2021</h1>

    </div>
  );
};

export default App;