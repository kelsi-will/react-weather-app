import React from "react";
import WeatherIcon from './WeatherIcon';
import './WeatherForecastPreview.css'

function WeatherForecastPreview({ data, unit }) {
function hours() {
  let date = new Date(data.dt * 1000)
  let hours = date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      })
    return (
      <div className="hours">{hours}</div>
    )
  }
if (unit === "fahrenheit") {
  return (
  <div className="WeatherForecastPreview col">
    {hours()}
    <WeatherIcon code={data.weather[0].icon} />
    <div className="temperature">{Math.round(data.main.temp)}°F
  </div>
  </div>
  );
  } else {
    return (
  <div className="WeatherForecastPreview col">
    {hours()}
    <WeatherIcon code={data.weather[0].icon} />
    <div className="temperature">{Math.round((((data.main.temp) - 32) * 5) / 9)}°C</div>
  </div>
  );
  }
}
export default WeatherForecastPreview;