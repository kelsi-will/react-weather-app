import React from "react";

function WeatherTemperature({ temperature, unit, setUnit  }) {
    
  function celsius() {
        return Math.round((temperature - 32) * 5) / 9;
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }
    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }
    
    if (unit === "fahrenheit") {
    return (
    <div classname="WeatherTemperature">
     <strong>{Math.round(temperature)}</strong>
        <span className="units">
            °F | <a href="/" onClick={showCelsius}>°C</a>
        </span>
      </div> 
    );
} else {
    return (
    <div classname="WeatherTemperature">
     <strong>{Math.round(celsius())}</strong>
        <span className="units">
            <a href="/" onClick={showFahrenheit}>°F</a> | °C
        </span>
        </div>
    );
}
}
export default WeatherTemperature;