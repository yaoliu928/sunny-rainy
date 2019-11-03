import React from 'react';
import umbrella from '../assets/icons/icon-umbrella.png';
import wind from '../assets/icons/icon-wind.png';
import compass from '../assets/icons/icon-compass.png';

function WeatherCondition(props) {
  const {
    cityName,
    current: {
      maxCelsius,
      minCelsius,
      maxFahrenheit,
      minFahrenheit,
      humidity,
      windSpeed,
      windDirection
    },
    unit
  } = props;
  return (
    <section className="weather-condition">
      <div className="weather-condition__location">{cityName}</div>
      {//<div className="weather-condition__overview">Clear</div>
      }
      <div className="weather-condition__temp">
        {unit === '℃' ? minCelsius : minFahrenheit} {unit} ~ {unit === '℃' ? maxCelsius : maxFahrenheit} {unit}</div>
      <div className="weather-condition__desc">
        <div>
          <img src={umbrella} alt='umbrella' />
          <span className="citem">{humidity}%</span>
        </div>
        <div>
          <img src={wind} alt='wind' /> <span className="citem">{windSpeed} km/h</span>
        </div>
        <div>
          <img src={compass} alt='compass' /> <span className="citem">{windDirection}</span>
        </div>
      </div>
    </section>
  )
}
export default WeatherCondition;