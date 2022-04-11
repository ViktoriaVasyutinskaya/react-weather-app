import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function Weather() {
  let [city, setCity] = useState("");
  let [conditions, setConditions] = useState(null);

  function showConditions(response) {
    setConditions(
      <div className="row">
        <ul>
          <li id="city">{city}</li>
          <li id="date">Last updated:</li>
        </ul>
        <div className="Conditions">
          <span className="current-conditions">
            <img
              className="weather-icon"
              src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
              alt="weather-icon"
            />
            <strong id="currentTemp">
              {Math.round(response.data.main.temp)}°C
            </strong>{" "}
            <ul>
              <li>{response.data.weather[0].description}</li>
              <li>Humidity: {Math.round(response.data.main.humidity)}%</li>
              <li>Wind: {Math.round(response.data.wind.speed)}km/h</li>
            </ul>
            <div>{conditions}</div>
          </span>
        </div>
      </div>
    );
  }
  function handleInput(event) {
    event.preventDefault();
    let apiKey = "8dc5c84de9b99758c12092b7cd18ffae";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showConditions);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="App container frame">
      <form id="search-form" onSubmit={handleInput}>
        <input
          className="type-city"
          type="search"
          placeholder="Search city"
          autoComplete="off"
          onChange={updateCity}
        />
        <input className="button-search" type="submit" value="Search" />
      </form>
      <div className="row">
        <div className="col-sm-6 current-weather">
          <div>{conditions}</div>
        </div>
      </div>
    </div>
  );
}
