import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sonntag",
      "Montag",
      "Dienstag",
      "Mittwoch",
      "Donnerstag",
      "Freitag",
      "Samstag",
    ];

    return days[day];
  }

  return (
    <div>
      <div className="Forecast-day">{day()} </div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="ForecastTemp">
        <span className="ForecastTemp-max"> {maxTemp()} </span>
        <span className="ForecastTemp-min"> {minTemp()} </span>
      </div>
    </div>
  );
}
