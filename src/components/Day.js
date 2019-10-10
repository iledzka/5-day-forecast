import React from "react";
import dateParser from "../helpers/dateParser";
import "../styles/Day.css";

const Day = props => {
  const { day, timezone } = props;
  const weather = day.weather[0];
  const temp = day.main.temp.toFixed();

  return (
    <div className="day">
      <span>
        <strong>{dateParser.getFormattedLocalTime(day.dt, timezone)}</strong>
      </span>
      <img
        src={`http://openweathermap.org/img/w/${weather.icon}.png`}
        alt={weather.description}
      />
      <p>
        <span className="temperature">{temp}</span>
      </p>
    </div>
  );
};

export default Day;
