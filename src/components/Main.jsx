import React from 'react';
import BlockUi from 'react-block-ui';
import { connect } from 'react-redux';
import { Loader} from 'react-loaders';
import 'loaders.css/loaders.min.css';

import WeatherCondition from './WeatherCondition';
import WeatherForecast from './WeatherForecast';


function Main(props) {
    return (
        <main className="clearfix">
        <BlockUi
          tag="div"
          blocking={props.isLoading}
          loader={<Loader active type='line-scale-pulse-out'
          color="#00ff9b" />}
          >
            <WeatherCondition 
            //cityName={props.cityName}
            //current={props.current}
            unit={props.unit}
            />
            <WeatherForecast 
            //forecasts={props.forecasts}
            //changeLimit={props.changeLimit}
            //limit={props.limit}
            unit={props.unit}
            />
            </BlockUi>
        </main>
    );
}

const mapStateToProps= state=> ({
    isLoading:state.weather.isLoading,
})

export default connect(mapStateToProps)(Main);