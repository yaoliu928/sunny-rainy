import React from 'react';
import ForecastRow from './ForecastRow';

class WeatherForecast extends React.Component {
    
    render() {
        return (
            <section className="weather-forecast">
                <div className="forecast__switch">
                    <button className="forecast__switch_0 switch-active">5 items</button>
                    <button className="forecast__switch_1">10 items</button>
                </div>
                {this.props.forecasts.map(forecast => (
                    <ForecastRow
                        key={forecast.day + forecast.time}
                        day={forecast.day}
                        high={forecast.high}
                        low={forecast.low}
                        time={forecast.time}
                    />
                ))}
            </section>
        );
    }

}
export default WeatherForecast;