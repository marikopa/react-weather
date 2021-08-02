import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="ForecastDay">Tue </div>
          <WeatherIcon code="01d" size={36} />
          <div className="ForecastTemp">
            <span className="ForecastTemp-max"> 20 °C </span>
            <span className="ForecastTemp-min">15 °C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
