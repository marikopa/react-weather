import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "b05a1145e720875676132ce7411f570e";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Tuesday </div>
          <WeatherIcon code="01d" size={36} />
          <div className="ForecastTemp">
            <span className="ForecastTemp-max"> 20° </span>
            <span className="ForecastTemp-min">15°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
