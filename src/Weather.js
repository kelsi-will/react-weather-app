import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
    let weatherData = {
    city: "New York",
    date: "Wednesday 4:15PM",
    description: "Mostly sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    temperature: 35,
    humidity: 41,
    wind: 6,
    feelsLike: 25
  };
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
              autofocus="on"
              autocomplete="off"
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
          <li>Last updated: {weatherData.date}</li>
          <li>{weatherData.description}</li>
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
              <strong>{weatherData.temperature}</strong>
              <span className="units">
                <a href="/">°F</a> | <a href="/">°C</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} mph</li>
          </ul>
        </div>
      </div>
      <p className="feels-like">
        <em>Feels like</em> {weatherData.feelsLike}°
      </p>
    </div>
  );
}
    