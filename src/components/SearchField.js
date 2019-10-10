import React from "react";
import Select from "react-select";
import Results from "../forecast-api/Results";
import "../styles/SearchField.css";

const SearchField = props => {
  const { selectedOption, handleChange } = props;
  const getOptions = cities => {
    return cities.map(city => ({
      value: city.name,
      label: `${city.name}, ${city.country}`,
      id: city.id
    }));
  };

  return (
    <Select
      className="select"
      value={selectedOption}
      onChange={handleChange}
      options={getOptions(Results.getCities())}
      placeholder={"Select City..."}
    />
  );
};

export default SearchField;
