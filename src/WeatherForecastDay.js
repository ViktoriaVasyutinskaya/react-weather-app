import React from "react";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fr", "Sat"];
    return days[day];
  }

  return (
    <div className="forecast">
      <div className="forecast-day">{day()}</div>
      <div className="forecast-icon">
        <img
          className="weather-icon-daily"
          src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
          width="50%"
          alt="weather-icon"
        />{" "}
      </div>
      <div>
        <span className="forecast-max">{Math.round(props.data.temp.max)}°</span>
        <span className="forecast-min">{Math.round(props.data.temp.min)}°</span>
      </div>
    </div>
  );
}
