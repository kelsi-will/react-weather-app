import React from "react";
import WeatherIcon from './WeatherIcon';
import './WeatherForecastPreview.css'

function WeatherForecastPreview({ hours, unit, temperature, icon }) {
function celsiusForecast() {
  return Math.round((temperature - 32) * 5) /9;
}
if (unit === "fahrenheit") {
  return (
  <div className="WeatherForecastPreview col">
    {hours}
    <WeatherIcon code={data.weather[0].icon} />
    {temperature}°F
  </div>
  );
  } else {
    return (
  <div className="WeatherForecastPreview col">
    {hours}
    <WeatherIcon code={data.weather[0].icon} />
    {celsiusForecast()}°C
  </div>
  );
  }
}
export default WeatherForecastPreview;