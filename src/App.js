import React from 'react';
import {connect} from 'react-redux';
import {changeLimitAction} from './actions/changeLimit';

import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import { getWeatherFor } from './utils/axios';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unit: '℃',
      forecasts: [
        {
            day: "Mon",
            high: "19c",
            low: "10c",
            time: "13:00"
        },
        {
            day: "Mon",
            high: "19c",
            low: "10c",
            time: "14:00"
        },
        {
            day: "Mon",
            high: "19c",
            low: "10c",
            time: "15:00"
        },
        {
            day: "Mon",
            high: "19c",
            low: "10c",
            time: "16:00"
        },
        {
            day: "Mon",
            high: "19c",
            low: "10c",
            time: "17:00"
        },
        {
            day: "Mon",
            high: "19c",
            low: "10c",
            time: "13:00"
        },
        {
            day: "Mon",
            high: "19c",
            low: "10c",
            time: "14:00"
        },
        {
            day: "Mon",
            high: "19c",
            low: "10c",
            time: "15:00"
        },
        {
            day: "Mon",
            high: "19c",
            low: "10c",
            time: "16:00"
        },
        {
            day: "Mon",
            high: "19c",
            low: "10c",
            time: "17:00"
        }
    ],
      //limit: 5,
      cityName: '',
      current: {},
      input: '',
      isLoading: true,
      loaderType: 'line-scale-pulse-out'
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    getWeatherFor('brisbane')
      .then(this.updateWeather)
  }

  toggleUnit = () => {
    const unit = this.state.unit === '℃' ? '℉' : '℃';
    this.setState({ unit });
  }

  updateWeather = response => {
    //console.log(response);
    const data = response.data.data;
    const cityName = data.city.name;
    const current = data.current;
    
    this.setState({
      cityName, current, 
      isLoading:false 
    });
  }

  handleSearch = () => {
    this.setState({ isLoading: true });
    getWeatherFor(this.state.input)
      .then(this.updateWeather);
  }

  changeLimit = (limit) => {
    this.props.handleLimit(limit);
  }

  handleInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  render() {
    return (
      <div className="weather-channel__container">
        <Header />
        <Nav inputValue={this.state.input}
          handleInputChange={this.handleInputChange}
          handleSearch={this.handleSearch}
          toggleUnit={this.toggleUnit}
          unit={this.state.unit}
        />
        
          <Main
            cityName={this.state.cityName}
            current={this.state.current}
            forecasts={this.state.forecasts}
            changeLimit={this.changeLimit}
            limit={this.state.limit}
            unit={this.state.unit}
            isLoading={this.state.isLoading}
            loaderType={this.state.loaderType}
          />      
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  limit: state.forecast.limit,
});

const mapDispatchToProps = dispatch => ({
  handleLimit: limit => dispatch(changeLimitAction(limit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);



