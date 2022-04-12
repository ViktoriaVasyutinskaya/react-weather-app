import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="forecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Tue</div>
          <div className="forecast-icon">
            <img className="weather-icon" src="" alt="weather-icon" />{" "}
          </div>
          <div>
            <span className="forecast-max">10°</span>
            <span className="forecast-min">6°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
