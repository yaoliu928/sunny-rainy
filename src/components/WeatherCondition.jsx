import React from 'react';
import { connect } from 'react-redux';

import umbrella from '../assets/icons/icon-umbrella.png';
import wind from '../assets/icons/icon-wind.png';
import compass from '../assets/icons/icon-compass.png';

const WeatherCondition = ({
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
}) => {
  return (
    <section className="weather-condition">
      <div className="weather-condition__location">{cityName}</div>
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

const mapStateToProps = state => ({
  cityName: state.weather.cityName,
  current: state.weather.current,
  unit: state.weather.unit
})

export default connect(mapStateToProps)(WeatherCondition);