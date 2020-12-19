import React, { useState } from "react";
import WeatherInfo from './WeatherInfo';
import axios from "axios";
import "./Weather.css";

function Weather({ defaultCity }) {
  const [weatherData, setWeatherData] = useState ({ ready: false });
  const [city, setCity] = useState ( defaultCity );
  function handleResponse(response) {
    setWeatherData({
    ready: true,
    city: response.data.name,
    date: new Date(response.data.dt * 1000),
    description: response.data.weather[0].description,
    icon: response.data.weather[0].icon,
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
    feelsLike: response.data.main.feels_like
    })
  }
  function search() {
    const apiKey = "4cdad8285585d2a190d4b58d406c5691";
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event){ 
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if(weatherData.ready) {
    return (
     <div className="Weather">
        <form className="mb-3" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-8">
            <input
              className="form-control"
              type="search"
              placeholder="Search a city"
              autoFocus="on"
              autoComplete="off"
              onChange={handleCityChange}
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
      <WeatherInfo data={weatherData}/>
        </div>
  );
} 
else {
  search();
  return "Loading...";
}
}
export default Weather;