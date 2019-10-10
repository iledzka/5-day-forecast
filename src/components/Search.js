import React, { useState, useEffect } from "react";
import Results from "../forecast-api/Results";
import Rows from "./Rows";
import SearchField from "./SearchField";

const Search = () => {
  const [timezone, updateTimezone] = useState("");
  const [forecastData, updateForecastData] = useState([]);
  const [selectedOption, updateSelectedOption] = useState(null);

  useEffect(() => {
    updateForecastData([]);
    const fetchData = async () => {
      if (selectedOption) {
        try {
          const data = await Results.getById(selectedOption.id);
          updateForecastData(data.list);
          updateTimezone(data.city.timezone);
        } catch (e) {
          console.error(e);
        }
      }
    };
    fetchData();
  }, [selectedOption]);

  const renderButton = () => (
    <button
      disabled={selectedOption === null}
      onClick={() => updateSelectedOption(null)}
    >
      <span>Change Location</span>
    </button>
  );

  const title = `5 Day Forecast${
    selectedOption ? ` for ${selectedOption.label}` : ""
  }`;

  return (
    <React.Fragment>
      <div className="search">
        <h2>{title}</h2>
        {selectedOption !== null && renderButton()}
      </div>
      {selectedOption === null ? (
        <SearchField
          selectedOption={selectedOption}
          handleChange={updateSelectedOption}
        />
      ) : (
        <Rows forecastData={forecastData} timezone={timezone} />
      )}
    </React.Fragment>
  );
};

export default Search;
