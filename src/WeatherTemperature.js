import React, { useState } from "react";

function WeatherTemperature({ fahrenheit, humidity, wind, feelsLike }) {
    const [unit, setUnit] = useState("fahrenheit");
    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }
    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function celsius() {
        return ((fahrenheit - 32) * 5) / 9;
    }
    function kilometers() {
        return (wind * 1.609);
    }
    function celsiusFeelsLike() {
      return ((feelsLike - 32) * 5) / 9;
    }
    if (unit === "fahrenheit") {
    return (
    <div classname="WeatherTemperature">
     <strong>{Math.round(fahrenheit)}</strong>
        <span className="units">
            °F | <a href="/" onClick={showCelsius}>°C</a>
        </span>
        <div className="row">
         <div className="col-6">
          <ul>
            <li>Humidity: {humidity}%</li>
            <li>Wind: {wind} mph</li>
          </ul>
        </div>
        </div>
         <p className="feelsLike">
        <em>Feels like</em> {feelsLike}°
      </p>
    </div>
    );
} else {
    return (
    <div classname="WeatherTemperature">
     <strong>{Math.round(celsius())}</strong>
        <span className="units">
            <a href="/" onClick={showFahrenheit}>°F</a> | °C
        </span>
        <div className="col-6">
          <ul>
            <li>Humidity: {humidity}%</li>
            <li>Wind: {Math.round(kilometers())} km/h</li>
          </ul>
        </div>
        <p className="feelsLike">
        <em>Feels like</em> {Math.round(celsiusFeelsLike())}°
      </p>
    </div>
    );
}
}
export default WeatherTemperature;