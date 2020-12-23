import React, { useState } from "react";
import FormattedDate from './FormattedDate';
import WeatherIcon from './WeatherIcon';
import WeatherTemperature from './WeatherTemperature';
import WeatherForecastPreview from './WeatherForecastPreview';

function WeatherInfo({ data }) {
  const [unit, setUnit] = useState("fahrenheit");

  function kilometers() {
    return Math.round(data.wind * 1.609);
  }
  function celsiusFeelsLike() {
    return Math.round((data.feelsLike - 32) * 5) / 9;
  }
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
  function temperature() {
let temperature = Math.round(data.main.temp)
return (
  <div className="temperature">{temperature}°F</div>
  )
}

  if (unit === "fahrenheit") {
    return (
      <div className="WeatherInfo">
        <div className="overview">
          <h1>{data.city}</h1>
          <ul>
            <li>Last updated: <FormattedDate date={data.date} /></li>
            <li className="text-capitalize">{data.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <div className="float-left">
                <WeatherIcon code={data.icon} />
              </div>
              <div className="float-left">
                <WeatherTemperature
                  temperature={data.temperature}
                  unit={unit}
                  setUnit={setUnit}
                />
              </div>
            </div>
            <p className="feelsLike">
              <em>Feels like</em> {Math.round(data.feelsLike)}°
          </p>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {data.humidity}%</li>
              <li>Wind: {Math.round(data.wind)} mph</li>
            </ul>
          </div>
        </div>
        <WeatherForecastPreview 
        hours={hours()}
        unit={unit}
        temperature={data.temperature}
        icon={<WeatherIcon code={data.weather[0].icon} />}
        />
      </div>
    );
  } else {
    return (
      <div className="WeatherInfo">
        <div className="overview">
          <h1>{data.city}</h1>
          <ul>
            <li>Last updated: <FormattedDate date={data.date} /></li>
            <li className="text-capitalize">{data.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <div className="float-left">
                <WeatherIcon code={data.icon} />
              </div>
              <div className="float-left">
                <WeatherTemperature
                  temperature={data.temperature}
                  unit={unit}
                  setUnit={setUnit}
                />
              </div>
            </div>
            <p className="feelsLike">
              <em>Feels like</em> {celsiusFeelsLike()}°
          </p>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {data.humidity}%</li>
              <li>Wind: {kilometers()} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}


export default WeatherInfo;