import React from 'react';
import { format } from 'date-fns';
import ForecastRow from './ForecastRow';

class WeatherForecast extends React.Component {

    render() {
        const { limit, forecasts,unit } = this.props;
        return (
            <section className="weather-forecast">
                <div className="forecast__switch">
                    <button
                        className={`forecast__switch_0 ${limit === 5 ? 'switch-active' : ''}`}
                        onClick={() => this.props.changeLimit(5)}
                    >
                        5 items
                    </button>
                    <button className={`forecast__switch_1 ${limit === 10 ? 'switch-active' : ''}`}
                        onClick={() => this.props.changeLimit(10)}
                    >
                        10 items
                    </button>
                </div>
                {forecasts.slice(0, limit).map(forecast => {
                    const date = new Date(forecast.time * 1000);
                    const day = format(date, 'EEE');
                    const time = format(date, 'HH:mm');
                    return (
                        <ForecastRow
                            key={day + time}
                            day={day}
                            high={unit==='℃'?forecast.maxCelsius:forecast.maxFahrenheit}
                            low={unit==='℃'?forecast.minCelsius:forecast.minFahrenheit}
                            time={time}
                            unit={unit}

                        />)

                })}
            </section>
        );
    }

}
export default WeatherForecast;