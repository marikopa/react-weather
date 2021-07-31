import "./styles.css";
import React from "react";
import WeatherApp from "./WeatherApp";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherApp defaultCity="Tartu" />
      </div>
      <footer>
        <a
          href="https://github.com/marikopa/react-weather"
          target="blank"
          rel="noreferrer"
        >
          Github
        </a>{" "}
        Mariko Passel
      </footer>
    </div>
  );
}
