import React from "react";
import dateParser from "../helpers/dateParser";

const Day = props => {
  const { day, timezone } = props;
  const weather = day.weather[0];
  const temp = day.main.temp.toFixed();

  return (
    <div className="day">
      <p className="time">
        <span>
          <strong>{dateParser.getFormattedLocalTime(day.dt, timezone)}</strong>
        </span>
      </p>
      <img
        src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt={weather.description}
      />
      <p className="description">
        <span>{weather.description}</span>
      </p>
      <p>
        <span className="temperature">{temp}&deg;C</span>
      </p>
    </div>
  );
};

export default Day;
