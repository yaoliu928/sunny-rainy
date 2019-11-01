import React from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import ForecastRow from './ForecastRow';

class WeatherForecast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forecasts: []
        };
    }

    componentDidMount() {
        //fetch data
        axios.get('https://jr-weather-api.herokuapp.com/api/weather?cc=au&city=brisbane')
            .then(response => {
                const forecasts = response.data.data.forecast.slice(0, 10).map(forecast => {
                    const date = new Date(forecast.time * 1000);
                    const day = format(date, 'EEE');
                    const time = format(date, 'HH:mm');
                    return {
                        day,
                        time,
                        high: forecast.maxCelsius,
                        low: forecast.minCelsius
                    };


                });
                this.setState({ forecasts })

            });
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