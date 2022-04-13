import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import WeatherForecast from "./WeatherForecast";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [conditions, setConditions] = useState({ ready: false });

  function showConditions(response) {
    setConditions({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      coordinates: response.data.coord,
    });
  }
  function search() {
    let apiKey = "8dc5c84de9b99758c12092b7cd18ffae";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showConditions);
  }
  function handleInput(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  if (conditions.ready) {
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
        <WeatherInfo data={conditions} />
        <WeatherForecast coordinates={conditions.coords} />
      </div>
    );
  } else {
    search();
  }
}
