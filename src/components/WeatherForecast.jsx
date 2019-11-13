import React from 'react';
import { connect } from 'react-redux';
import { format } from 'date-fns';
import ForecastRow from './ForecastRow';
import { changeLimitAction } from '../redux/weatherAction';
class WeatherForecast extends React.Component {

    render() {
        const { changeLimit, limit, forecasts, unit } = this.props;
        return (
            <section className="weather-forecast">
                <div className="forecast__switch">
                    <button
                        className={`forecast__switch_0 ${limit === 5 ? 'switch-active' : ''}`}
                        onClick={() => changeLimit(5)}
                    >
                        5 items
                    </button>
                    <button
                        className={`forecast__switch_1 ${limit === 10 ? 'switch-active' : ''}`}
                        onClick={() => changeLimit(10)}
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
                            high={unit === '℃' ? forecast.maxCelsius : forecast.maxFahrenheit}
                            low={unit === '℃' ? forecast.minCelsius : forecast.minFahrenheit}
                            time={time}
                            unit={unit}

                        />)

                })}
            </section>
        );
    }
}

const mapStateToProps = state => ({
    limit: state.weather.limit,
    forecasts: state.weather.forecasts
});

const mapDispatchToProps = dispatch => ({
    changeLimit: (limit) => dispatch(changeLimitAction(limit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherForecast);