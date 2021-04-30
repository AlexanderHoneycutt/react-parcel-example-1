import React from "react";
import { useFetch } from "./hooks/useFetch";


const App = () => {

  const [data, loading] = useFetch(
    "https://raw.githubusercontent.com/AlexanderHoneycutt/react-parcel-example-1/main/data/country_vaccinations%20-%20Copy.csv"
  );

  return (
    <div>

      <h1>Exploratory Data Analysis, Assignment 2, INFO 474 SP 2021</h1>
      <p>{loading && "Loading data!"}</p>

      <h2>Question 1: What are the average daily vaccination rates for all countries?</h2>

      <h3>Country Map for Average Daily Vaccinations</h3>
      <svg width="955" height="955" style={{ border: "1px solid black", marginBottom: "25px" }}>
        <foreignObject width="100%" height="100%">
          <iframe src="https://public.tableau.com/views/Assignment2-AverageDailyVacc/AverageDailyVaccinations?:language=en&:display_count=y&:origin=viz_share_link:showVizHome=no&:embed=true"
          width="955" height="955"></iframe>
        </foreignObject>
      </svg>

      <h3><b><i>Insights</i></b></h3>
      <p>
         For this visualization we see how the countries
         with the largest populations have the largest
         Daily Vaccination Rates. 
      </p>
      <p>
        What was interesting to me was that countries like the UK,
        Canada, Australia, and South Korea were not at the same
        level of vaccination as the U.S., India, and China.
      </p>

      <p style={{ marginBottom: "100px" }}>
        The unfortunate part about this data is that many countries
        in Africa haven't reported any statistics, therefore giving
        us an incomplete look at the world's daily vaccination rates.
      </p>

      

      <h3>Average Daily Vaccinations Per Million</h3>
      <svg width="955" height="955" style={{ border: "1px solid black", marginBottom: "25px" }}>
        <foreignObject width="100%" height="100%">
          <iframe src="https://public.tableau.com/views/Assignment2-BarChartVaccMill/BarChartVaccMill?:language=en&:display_count=y&publish=yes&:origin=viz_share_link:showVizHome=no&:embed=true"
          width="955" height="955"></iframe>
        </foreignObject>
      </svg>

      <h3><b><i>Insights</i></b></h3>
      <p>
        Initially, I chose to map this data onto a world map,
        but all of the data appeared to be too similar
        to draw any real conclusions from it according to my classmates.
      </p>
      <p>
        Additionally, another piece of feedback I received from my classmates
        was that the colors I initially had for this visualization were
        unnecessary, so I made it mono-chromatic
      </p>
      <p>
        When I turned it into a bar chart though, I found that
        a lot of the smaller countries, like Bhutan, Gibraltar,
        and the Bahamas actually had higher average daily vaccinations per million people.
      </p>
      <p>
        This is in stark contrast to what I saw in the previous visualization.
        I would have though that because a country had a higher average daily vaccination
        rate, they would also have a higher rate per million people. I was wrong.
      </p>
      <p>
        The country of Bhutan especially surprised me because of how
        much of a difference there is between it and the next closest country.
        This required me to do a sanity check on the data and sure enough, it was correct.
      </p>
      <p>
        Bhutan has a total population of 763,092 people as of 2019
        and has vaccinated 459,752 of their people. Additionally, 
        those people were all vaccinated within the span of eight days.
      </p>
      <p style={{ marginBottom: "100px" }}>
        With this context, and with other, smaller population
        countries being in a similar situation, it makes sense
        that they would have higher rates in the visualization.
      </p>


      <h3>Daily Vaccine Trend</h3>
      <svg width="955" height="955" style={{ border: "1px solid black", marginBottom: "25px" }}>
        <foreignObject width="100%" height="100%">
          <iframe src="https://public.tableau.com/views/Assignment2-DailyVaccTrend/DailyVaccineTrend?:language=en&:retry=yes&:display_count=y&:origin=viz_share_link:showVizHome=no&:embed=true"
          width="955" height="955"></iframe>
        </foreignObject>
      </svg>

      <h3><b><i>Insights</i></b></h3>
      <p>
        The purpose of this third visualization was to see how the
        rate of daily vaccinations changed across the world. What I
        expected was to see it continuously increase, but instead, I got a surprise.
      </p>
      <p>
        As you can see between February 7th and February 21st, there was
        a slight decrease in the average rate of daily vaccinations.
        My guess toward why this occured would be that vaccinations supply may have dipped to many countries.
      </p>
      <p style={{ marginBottom: "100px" }}>
        With this being said, if I had more data in this sheet,
        it would be easier to investigate the cause of the decrease.
      </p>


      <h2>Question 2: Which countries have the highest number of people full vaccinated?</h2>

      <h3>Number of People Fully Vaccinated By Country</h3>
      <svg width="955" height="955" style={{ border: "1px solid black", marginBottom: "25px" }}>
        <foreignObject width="100%" height="100%">
          <iframe src="https://public.tableau.com/views/Assignment2-PeopleFullyVacc/PeopleFullyVaccinated?:language=en&:display_count=y&:origin=viz_share_link:showVizHome=no&:embed=true"
          width="955" height="955"></iframe>
        </foreignObject>
      </svg>

      <h3><b><i>Insights</i></b></h3>
      <p>
        As a sanity check to my previous question, I decided to see
        if the countries with higher average daily vaccination rates
        also had higher numbers of people fully vaccinated.
      </p>
      <p>
        While this mostly followed the trend I expected, I did run into
        a snag with my data set. Unfortunately, some of the major countries,
        like China, Australia, and Bhutan, did not give data for fully vaccinated people.
      </p>
      <p style={{ marginBottom: "100px" }}>
        Because of these missing elements, it's nearly impossible to
        draw a clear conclusion about the relationship between average
        daily vaccination rates and total people vaccinated.
      </p>

      <h3>Trend of Fully Vaccinated People</h3>
      <svg width="955" height="955" style={{ border: "1px solid black", marginBottom: "25px" }}>
        <foreignObject width="100%" height="100%">
          <iframe src="https://public.tableau.com/views/Assignment2-FullyVaccTrend/FullyVaccinatedTrend?:language=en&:display_count=y&:origin=viz_share_link:showVizHome=no&:embed=true"
          width="955" height="955"></iframe>
        </foreignObject>
      </svg>

      <h3><b><i>Insights</i></b></h3>
      <p>
        Given that I couldn't make any clear conclusions from the previous
        visualization, I decided to look at the rate at which people were
        becoming fully vaccinated.
      </p>
      <p>
        As expected, the graph started increasing exponentially, but 
        what caught my eye was that between January 31st and February 21st,
        there were two increases to the rate of full vaccination.
      </p>
      <p>
        This surprised me because in the 3rd visualization, we actually
        saw a decrease in the average rate of daily vaccinations. I would
        have therefore believed that there would have been a decrease here within the same time frame as well.
      </p>
      <p style={{ marginBottom: "100px" }}>
        The only explanation I can come up with without more data is that the countries
        that are missing data on fully vaccinated people are the same countries
        that also had a decrease in average daily vaccination rates.
      </p>

      <h3>Fully Vaccinated Per Hundred</h3>
      <svg width="955" height="955" style={{ border: "1px solid black", marginBottom: "25px" }}>
        <foreignObject width="100%" height="100%">
          <iframe src="https://public.tableau.com/views/Assignment2-FullyVaccPerHundred/PeopleFullyVaccinatedPerHundred?:language=en&:retry=yes&:display_count=y&:origin=viz_share_link:showVizHome=no&:embed=true"
          width="955" height="955"></iframe>
        </foreignObject>
      </svg>

      <h3><b><i>Insights</i></b></h3>
      <p>
        As a sanity check to this question, I created this visualization
        and found a similar one on ourworldindata.org. This allowed me
        to check if my database was accurate in how countries reported their fully vaccinated statistics.
      </p>
      <p>
        Besides the countries that I was missing data for, the trend I had found
        seemed to match the external sites visualization. Countries like Chile,
        United Arab Emirates, and Israel had high numbers on both visualizations.
      </p>
      <p>
        One interesting takeaway from this is the those countries have
        vaccinated quite a few people, even though they don't have high
        average daily vaccination rates, thus further disproving my belief in the correlation between the two.
      </p>
      <p style={{ marginBottom: "100px" }}>
        Another takeaway from these findings is that the data I do have is
        indeed accurate and is something others can replicate.
      </p>

      <h3>Total Vaccinations Given</h3>
      <svg width="955" height="955" style={{ border: "1px solid black", marginBottom: "25px" }}>
        <foreignObject width="100%" height="100%">
          <iframe src="https://public.tableau.com/views/Assignment2-TotalVacc/TotalVaccinations?:language=en&:display_count=y&publish=yes&:origin=viz_share_link:showVizHome=no&:embed=true"
          width="955" height="955"></iframe>
        </foreignObject>
      </svg>

      <h3><b><i>Insights</i></b></h3>
      <p>
        In addition to wanting to know how many 
        people were fully vaccinated,
        I also wanted to know how many total vaccines 
        were given out per country. 
      </p>
      <p>
        As you can see, because the data is even more sparse here,
        and a good amount of the data I have is already close together,
        I chose to make it into a bar chart for easy comparison making.
      </p>
      <p style={{ marginBottom: "100px" }}>
        While my other visualizations didn't correlate with
        the Daily Average Vaccinations, I wasn't too surprised 
        to see that this one did.
      </p>


      <h2>Question 3: Which vaccines are the most commonly used?</h2>

      <h3>Most Commonly Used Vaccines</h3>
      <svg width="955" height="955" style={{ border: "1px solid black", marginBottom: "25px" }}>
        <foreignObject width="100%" height="100%">
          <iframe src="https://public.tableau.com/views/Assignment2-VaccUsed/VaccinesUsed?:language=en&:display_count=y&publish=yes&:origin=viz_share_link:showVizHome=no&:embed=true"
          width="955" height="955"></iframe>
        </foreignObject>
      </svg>
      
      <h3><b><i>Insights</i></b></h3>
      <p>
        Through this question, I wanted to figure out which groups 
        of vaccines were used in most countries. I wasn't too surprised 
        to find that the names we see in the U.S. were at/near the top.
      </p>
      <p>
        What did surprise me is that the vaccine group that the most
        countries reported using was the one that solely contained
        the Oxford/AstraZeneca vaccine, despite it's ban in some European nations.
      </p>
      <p>
        Another key takeaway I received from this visualization was that
        out of the top five groups of vaccines used, all but 1 of those
        groups contained the vaccines we use in the U.S.
      </p>
      <p style={{ marginBottom: "100px" }}>
        Additionally, the top 3 vaccine groups combined are used by more
        countries than the rest of the groups combined. This shows how much
        of a hold these three vaccines have on the world.
      </p>

    </div>
  );
};

export default App;