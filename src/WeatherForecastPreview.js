import React from "react";
import WeatherIcon from './WeatherIcon';

function WeatherForecastPreview({ data }) {
  function hours() {
  let date = new Date(data.data.dt * 1000)
  let hours = date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      })
    return `${hours}`
  }
function temperature() {
let temperature = Math.round(data.main.temp)
return `${temperature}°F`
}

  return (
  <div className="WeatherForecastPreview col">
    {hours()}
    <WeatherIcon code={data.weather[0].icon} />
    {temperature()}
  </div>
  );
}
export default WeatherForecastPreview;