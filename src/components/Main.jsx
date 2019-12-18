import React from 'react';
import BlockUi from 'react-block-ui';
import { connect } from 'react-redux';
import { Loader } from 'react-loaders';
import 'loaders.css/loaders.min.css';
import WeatherCondition from './WeatherCondition';
import WeatherForecast from './WeatherForecast';

const Main = ({isLoading,unit}) => {
    return (
        <main className="clearfix">
            <BlockUi
                tag="div"
                blocking={isLoading}
                loader={<Loader active type='line-scale-pulse-out'
                    color="#00ff9b" />}
            >
                <WeatherCondition
                    unit={unit}
                />
                <WeatherForecast
                    unit={unit}
                />
            </BlockUi>
        </main>
    );
}

const mapStateToProps = state => ({
    isLoading: state.weather.isLoading,
})

export default connect(mapStateToProps)(Main);