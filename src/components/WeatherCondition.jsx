import React from 'react';
import umbrella from '../assets/icons/icon-umbrella.png';
import wind from '../assets/icons/icon-wind.png';
import compass from '../assets/icons/icon-compass.png';

function WeatherCondition(props){
    return(
        <section className="weather-condition">
          <div className="weather-condition__location">{props.cityName}</div>
          {//<div className="weather-condition__overview">Clear</div>
          }
          <div className="weather-condition__temp">{props.current.minCelsius} c ~ {props.current.maxCelsius} c</div>
          <div className="weather-condition__desc">
            <div>
              <img src={umbrella} alt='umbrella'/>
              <span className="citem">{props.current.humidity}%</span>
            </div>
            <div>
              <img src={wind} alt='wind'/> <span className="citem">{props.current.windSpeed} km/h</span>
            </div>
            <div>
              <img src={compass} alt='compass'/> <span className="citem">{props.current.windDirection}</span>
            </div>
          </div>
        </section>
    )
}
export default WeatherCondition;