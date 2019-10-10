import React, { useState, useEffect } from "react";
import Results from "../forecast-api/Results";
import MainPanel from "./MainPanel";
import "../styles/Search.css";

const Search = () => {
  const [city, updateCity] = useState("Edinburgh");
  const [country, updateCountry] = useState("GB");
  const [timezone, updateTimezone] = useState("3600");
  const [forecastData, updateForecastData] = useState([]);
  const [showSearchField, updateShowSearch] = useState(true);

  useEffect(() => {
    updateForecastData([]);
    const fetchData = async () => {
      try {
        const data = await Results.byCityAndCountry(city, country);
        updateForecastData(data.list);
        updateTimezone(data.city.timezone);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [city, country]);
  return (
    <React.Fragment>
      <div className="search">
        <p>
          5 day forecast for {city}, {country}
        </p>
        {!showSearchField && (
          <button disabled={showSearchField} onClick={() => {}}>
            <span>Change city</span>
          </button>
        )}
      </div>
      {showSearchField ? (
        <div>tegwygwu</div>
      ) : (
        <MainPanel forecastData={forecastData} timezone={timezone} />
      )}
    </React.Fragment>
  );
};

export default Search;
