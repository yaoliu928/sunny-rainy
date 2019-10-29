import React from 'react';
import umbrella from '../assets/icons/icon-umbrella.png';
import wind from '../assets/icons/icon-wind.png';
import compass from '../assets/icons/icon-compass.png';

function WeatherCondition(){
    return(
        <section className="weather-condition">
          <div className="weather-condition__location">Brisbane</div>
          <div className="weather-condition__overview">Clear</div>
          <div className="weather-condition__temp">19 c</div>
          <div className="weather-condition__desc">
            <div>
              <img src={umbrella} />
              <span className="citem">20%</span>
            </div>
            <div>
              <img src={wind} /> <span className="citem">3 km/h</span>
            </div>
            <div>
              <img src={compass} /> <span className="citem">NE</span>
            </div>
          </div>
        </section>
    )
}
export default WeatherCondition;