import "./styles.css";
import Date from "./Date";
import Temperature from "./Temperature";
import Humidity from "./Humidity";
import Description from "./Description";
import Wind from "./Wind";
import City from "./City";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <br />
          <Date />
          <form id="search-form">
            <div className="row">
              <div className="col">
                <div className="input-group mb-3 city">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Linna nimi"
                    id="search-text-input"
                    autocomplete="off"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-secondary"
                      type="submit"
                      id="button-addon2"
                    >
                      Otsi
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <h1>
            {" "}
            <City />{" "}
          </h1>
          <div className="row">
            <div className="col-6 d-flex align-items-center">
              <div className="d-flex weather-temperature">
                <img
                  src="http://openweathermap.org/img/wn/01d@2x.png"
                  width="50px"
                  alt=""
                  id="icon"
                  className="float-left"
                />
                <div className="float-left">
                  <Temperature />
                  <span className="units" /> ℃
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <Description />
                </li>
                <li>
                  humidity: <Humidity /> %
                </li>
                <li>
                  wind: <Wind /> m/h
                </li>
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
        <a href="" target="blank">
          Github
        </a>{" "}
        Mariko Passel
      </small>
    </div>
  );
}
