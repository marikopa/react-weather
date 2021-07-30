import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import TheDate from "./TheDate";
import WeatherInfo from "./WeatherInfo";

export default function WeatherApp(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function search() {
    const apiKey = "b05a1145e720875676132ce7411f570e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
    ${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="weather-app">
        <br /> <TheDate date={weatherData.date} />
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <div className="input-group mb-3 city">
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                  id="search-text-input"
                  autoComplete="off"
                  onChange={handleCityChange}
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
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}