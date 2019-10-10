import React, { useState, useEffect } from "react";
import Results from "../forecast-api/Results";
import MainPanel from "./MainPanel";
import SearchField from "./SearchField";
import "../styles/Search.css";

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

  return (
    <React.Fragment>
      <div className="search">
        <p>5 day forecast{selectedOption && ` for ${selectedOption.label}`}</p>
        {selectedOption !== null && (
          <button
            disabled={selectedOption === null}
            onClick={() => updateSelectedOption(null)}
          >
            <span>Change city</span>
          </button>
        )}
      </div>
      {selectedOption === null ? (
        <SearchField
          selectedOption={selectedOption}
          handleChange={updateSelectedOption}
        />
      ) : (
        <MainPanel forecastData={forecastData} timezone={timezone} />
      )}
    </React.Fragment>
  );
};

export default Search;
