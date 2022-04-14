import React from "react";

export default function WeatherInfo(props) {
  return (
    <div className="row">
      <ul>
        <li id="city">{props.data.city}</li>
        <li id="date">Last updated:</li>
      </ul>
      <div className="Conditions">
        <span className="current-conditions">
          <img
            className="weather-icon"
            src={`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
            alt="weather-icon"
          />
          <strong id="currentTemp">
            {Math.round(props.data.temperature)}°C
          </strong>{" "}
          <ul className="description">
            <li>{props.data.description}</li>
            <li>Humidity: {Math.round(props.data.humidity)}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </span>
      </div>
    </div>
  );
}
