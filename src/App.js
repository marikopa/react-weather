import "./styles.css";
import React from "react";
import WeatherApp from "./WeatherApp";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherApp defaultCity="Tartu" />
      </div>
      <div className="Footer">
        This project was coded by Mariko Passel and is open-sourced on{" "}
        <a
          href="https://github.com/marikopa/react-weather"
          target="blank"
          rel="noreferrer"
        >
          Github
        </a>{" "}
        and hosted on Netlify
      </div>
    </div>
  );
}
