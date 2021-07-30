import "./styles.css";
import ReactAnimatedWeather from "react-animated-weather";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import React, { useState } from "react";

export default function App() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Friday",
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <div className="weather-app">
            <br /> {weatherData.date}
            <form id="search-form">
              <div className="row">
                <div className="col">
                  <div className="input-group mb-3 city">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                      id="search-text-input"
                      autoComplete="off"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-secondary"
                        type="submit"
                        id="button-addon2"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <h1> {weatherData.city} </h1>
            <div className="row">
              <div className="col-6 d-flex align-items-center">
                <div className="d-flex weather-temperature">
                  <ReactAnimatedWeather
                    icon="CLEAR_DAY"
                    color="#FFBB33"
                    size={48}
                    animate={true}
                    margin
                    right={20}
                  />

                  <div className="float-left">
                    {Math.round(weatherData.temperature)}
                  </div>
                </div>
              </div>
              <div className="col-6">
                <ul>
                  <li>{weatherData.description}</li>
                  <li>{weatherData.humidity}</li>
                  <li>{weatherData.wind}</li>
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
        </div>
        <div className="weather-forecast" id="forecast"></div>
        <small>
          <a href="https://github.com/marikopa/react-weather" target="blank">
            Github
          </a>{" "}
          Mariko Passel
        </small>
      </div>
    );
  } else {
    const apiKey = "b05a1145e720875676132ce7411f570e";
    let city = "Tartu";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metrics`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
