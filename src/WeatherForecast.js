import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {}
  console.log(props);
  let apiKey = "8dc5c84de9b99758c12092b7cd18ffae";
  let lon = props.coordinates.lon;
  let lat = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
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
