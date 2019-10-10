import React from "react";
import Day from "./Day";
import dateParser from "../helpers/dateParser";

const Row = props => {
  const { days, timezone } = props;
  return (
    <div className="row">
      <label className="date">
        {dateParser.getFormattedLocalDate(days[0].dt, timezone)}
      </label>
      <div className="hours">
        {days.map(day => (
          <Day key={day.dt} day={day} timezone={timezone} />
        ))}
      </div>
    </div>
  );
};

export default Row;
