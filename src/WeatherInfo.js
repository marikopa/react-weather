import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1> {props.data.city} </h1>
      <div className="row">
        <div className="col-6 d-flex align-items-center">
          <div className="d-flex weather-temperature">
            <WeatherIcon code={props.data.icon} />

            <div className="float-left">
              {Math.round(props.data.temperature)} °C
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>{props.data.description}</li>
            <li>Humidity {props.data.humidity} % </li>
            <li>Wind {Math.round(props.data.wind)}</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img src="" alt="" id="icon" className="float-left" />
          </div>
        </div>
      </div>
    </div>
  );
}
