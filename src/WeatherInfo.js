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
            <WeatherTemperature 
            fahrenheit={data.temperature}
            humidity={data.humidity}
            wind={Math.round(data.wind)}
            feelsLike={Math.round(data.feelsLike)} />
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default WeatherInfo;