import React from "react";

export default function WeatherInfo(props) {
  return (
    <div className="mt-1">
      <ul>
        <li id="city">{props.data.city}</li>
        <li id="date">Last updated:</li>
      </ul>
      <div className="row Conditions">
        <div className="col-6 current-conditions">
          <img
            className="weather-icon"
            src={`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
            alt="weather-icon"
          />
          <strong id="currentTemp">
            {Math.round(props.data.temperature)}°C
          </strong>{" "}
        </div>
        <div className="col-6 mb-3 description">
          <ul>
            <li>{props.data.description}</li>
            <li>Humidity: {Math.round(props.data.humidity)}%</li>
            <li>Wind: {Math.round(props.data.wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
