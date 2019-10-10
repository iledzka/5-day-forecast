import React from "react";
import dateParser from "../helpers/dateParser";
import Day from "./Day";
import "../styles/MainPanel.css";

const MainPanel = props => {
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
        rows.push(<Row days={daysInARow} key={`${i}-${day.dt}`} />);
        dayNumber = newDayNum;
        daysInARow = [];
        daysInARow.push(day);
      } else {
        daysInARow.push(day);
      }
    });
    return rows;
  };

  const Row = props => {
    const { days } = props;
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

  return (
    <div className="main-panel">
      <div>{renderRows()}</div>
    </div>
  );
};

export default MainPanel;
