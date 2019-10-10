import React from "react";
import dateParser from "../helpers/dateParser";
import Row from "./Row";
import "../styles/Rows.css";

const Rows = props => {
  const { forecastData, timezone } = props;

  const renderRows = () => {
    const rows = [];
    let daysInARow = [];
    let dayNumber =
      forecastData.length > 0
        ? dateParser.getDayNumber(forecastData[0].dt, timezone)
        : 0;

    forecastData.forEach((day, i) => {
      const newDayNum = dateParser.getDayNumber(day.dt, timezone);

      if (dayNumber !== newDayNum) {
        rows.push(
          <Row days={daysInARow} timezone={timezone} key={`${i}-${day.dt}`} />
        );
        dayNumber = newDayNum;
        daysInARow = [];
        daysInARow.push(day);
      } else {
        daysInARow.push(day);
      }
    });
    return rows;
  };

  return (
    <div className="rows">
      <div>{renderRows()}</div>
    </div>
  );
};

export default Rows;
