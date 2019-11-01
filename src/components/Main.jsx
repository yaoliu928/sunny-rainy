import React from 'react';

import WeatherCondition from './WeatherCondition';
import WeatherForecast from './WeatherForecast';

function Main(props) {
    return (
        <main>
            <WeatherCondition />
            <WeatherForecast forecasts={props.forecasts}/>
        </main>
    );
}
export default Main;