import React, { useState } from "react";

function WeatherTemperature({ fahrenheit }) {
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
        return (Math.round(((fahrenheit - 32) * 5) / 9));
    }
    if (unit === "fahrenheit") {
    return (
    <div classname="WeatherTemperature">
     <strong>{Math.round(fahrenheit)}</strong>
        <span className="units">
            <a>°F</a> | <a href="/" onClick={showCelsius}>°C</a>
        </span>
    </div>
    );
} else {
    return (
    <div classname="WeatherTemperature">
     <strong>{Math.round(celsius())}</strong>
        <span className="units">
            <a href="/" onClick={showFahrenheit}>°F</a> | <a>°C</a>
        </span>
    </div>
    );
}
}
export default WeatherTemperature;