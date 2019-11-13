import React from 'react';

import ForecastRow from './ForecastRow';


export class WeatherForecast extends React.Component {



    render() {
        const { limit,forecasts} = this.props;
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
                    
                    return (
                        <ForecastRow
                            key={forecast.day + forecast.time}
                            day={forecast.day}
                            high={forecast.high}
                            low={forecast.low}
                            time={forecast.time}
                        />)
                })}
            </section>
        );
    }
}

export default WeatherForecast;
