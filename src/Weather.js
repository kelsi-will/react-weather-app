import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from './FormattedDate';

function Weather({ defaultCity }) {
  const [weatherData, setWeatherData] = useState ({ ready: false });
  function handleResponse(response) {
    setWeatherData({
    ready: true,
    city: response.data.name,
    date: new Date(response.data.dt * 1000),
    description: response.data.weather[0].description,
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
    feelsLike: response.data.main.feels_like
    })
  }

  if(weatherData.ready) {
    return (
     <div className="Weather">
        <form className="mb-3">
        <div className="row">
          <div className="col-8">
            <input
              id="search-input"
              className="form-control"
              type="search"
              placeholder="Search a city"
              autoFocus="on"
              autoComplete="off"
            />
          </div>
          <div className="col-4">
            <input
              className="form-control btn btn-dark w-100"
              type="submit"
              value="search"
            />
          </div>
        </div>
      </form>
        <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Last updated: <FormattedDate date={weatherData.date} /></li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="float-left"
            />
            <div className="float-left">
              <strong>{Math.round(weatherData.temperature)}</strong>
              <span className="units">
                <a href="/">°F</a> | <a href="/">°C</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {Math.round(weatherData.wind)} mph</li>
          </ul>
        </div>
      </div>
      <p className="feels-like">
        <em>Feels like</em> {Math.round(weatherData.feelsLike)}°
      </p>
    </div>
  );
} 
else {
  const apiKey = "4cdad8285585d2a190d4b58d406c5691";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading...";
}
}
export default Weather;