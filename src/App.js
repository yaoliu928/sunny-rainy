import React from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Error from './components/Error';
import Footer from './components/Footer';
// import { getWeatherFor } from './utils/axios';
import { fetchDataThunkAction } from './redux/weatherAction';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //unit: '℃',
      //forecasts: [],
      //limit: 5,
      //cityName: '',
      //current: {},
      //input: '',
      //isLoading: true,
      //loaderType: 'line-scale-pulse-out'
    };
  }

  componentDidMount() {
    this.props.fetchWeatherData('brisbane');
  }

  // toggleUnit = () => {
  //   const unit = this.state.unit === '℃' ? '℉' : '℃';
  //   this.setState({ unit });
  // }

  // updateWeather = response => {
  //   //console.log(response);
  //   const data = response.data.data;

  //   this.setState({
  //     cityName, current, forecasts,
  //     isLoading:false 
  //   });
  // }

  // handleSearch = () => {
  //   this.props.fetchWeatherData(this.props.input);
  // }

  // changeLimit = (limit) => {
  //   this.setState({ limit });
  // }

  // handleInputChange = (event) => {
  //   this.setState({ input: event.target.value });
  // }

  renderMain = () => {
    if (this.props.hasError) return <Error />;
    return <Main />;
  }

  render() {
    return (
      <div className="weather-channel__container">
        <Header />
        <Nav inputValue={this.state.input}
          handleInputChange={this.handleInputChange}
          handleSearch={this.handleSearch}
        //toggleUnit={this.toggleUnit}
        //unit={this.state.unit}
        />
        {
          this.props.isLoading ?

            <Main
            // cityName={this.state.cityName}
            //current={this.state.current}
            //forecasts={this.state.forecasts}
            //changeLimit={this.changeLimit}
            //limit={this.state.limit}
            //unit={this.state.unit}
            //isLoading={this.state.isLoading}
            //loaderType={this.state.loaderType}
            />
            : this.renderMain()
        }

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasError: !!state.weather.error,
  isLoading: state.weather.isLoading,


})

const mapDispatchToProps = dispatch => ({
  fetchWeatherData: (city) => dispatch(fetchDataThunkAction(city)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
