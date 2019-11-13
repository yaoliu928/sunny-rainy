import React from 'react';
import BlockUi from 'react-block-ui';
import { Loader } from 'react-loaders';
import 'loaders.css/loaders.min.css';

import WeatherCondition from './WeatherCondition';
import { WeatherForecast } from './WeatherForecast';

function Main(props) {
    return (
        <main className="clearfix">
            <BlockUi
                tag="div"
                blocking={props.isLoading}
                loader={<Loader active type={props.loaderType}
                    color="#00ff9b" />}
            >
                <WeatherCondition
                    cityName={props.cityName}
                    current={props.current}
                    unit={props.unit}
                />
                <WeatherForecast
                    forecasts={props.forecasts}
                    changeLimit={props.changeLimit}
                    limit={props.limit}
                    unit={props.unit}
                />
            </BlockUi>
        </main>
    );
}
export default Main;