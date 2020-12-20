import React from "react";
import FormattedDate from './FormattedDate';
import WeatherIcon from './WeatherIcon';
import WeatherTemperature from './WeatherTemperature';

function WeatherInfo({ data }) {
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
            <WeatherTemperature fahrenheit={data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {data.humidity}%</li>
            <li>Wind: {Math.round(data.wind)} mph</li>
          </ul>
        </div>
      </div>
      <p className="feelsLike">
        <em>Feels like</em> {Math.round(data.feelsLike)}°
      </p>
    </div>
    );
}

export default WeatherInfo;