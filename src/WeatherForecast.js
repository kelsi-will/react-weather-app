import React, { useState } from "react";
import WeatherForecastPreview from './WeatherForecastPreview';
import axios from "axios";
import './WeatherForecast.css';

function WeatherForecast({ city }) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }    
  if (loaded && city === forecast.city.name) {
    return (
      <div className="WeatherForecast row">
        <WeatherForecastPreview data={forecast.list[0]} />
        <WeatherForecastPreview data={forecast.list[1]} />
        <WeatherForecastPreview data={forecast.list[2]} />
        <WeatherForecastPreview data={forecast.list[3]} />
        <WeatherForecastPreview data={forecast.list[4]} />
        <WeatherForecastPreview data={forecast.list[5]} />
      </div>
    );
    } else {
    const apiKey = "53b786872239529da797603a4e14839d";
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`
    axios.get(apiUrl).then(handleForecastResponse);
    
    return null;
    }
}
export default WeatherForecast;