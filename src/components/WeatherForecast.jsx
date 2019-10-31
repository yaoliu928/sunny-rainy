import React from 'react';
import ForecastRow from './ForecastRow';

class WeatherForecast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forecasts: [
                {
                    day: "Fri",
                    high: "19 c",
                    low: "8 c",
                    time: "10:00"
                },
                {
                    day: "Sat",
                    high: "19 c",
                    low: "8 c",
                    time: "10:00"
                },
                {
                    day: "Sun",
                    high: "19 c",
                    low: "8 c",
                    time: "10:00"
                },
                {
                    day: "Mon",
                    high: "19 c",
                    low: "8 c",
                    time: "10:00"
                }
            ]

        };
    }
    render() {
        return (
            <section className="weather-forecast">
                <div className="forecast__switch">
                    <button className="forecast__switch_0 switch-active">5 items</button>
                    <button className="forecast__switch_1">10 items</button>
                </div>
                {this.state.forecasts.map(forecast => (
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