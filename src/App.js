import React from 'react';

import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import {getWeatherFor} from './utils/axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unit:'℃',
      forecasts: [],
      limit: 5,
      cityName: '',
      current: {},
      input:''
    };
  }

  componentDidMount() {
    getWeatherFor('brisbane')  
    .then(this.updateWeather);
  }

toggleUnit =() => {
  const unit = this.state.unit === '℃' ? '℉':'℃';
  this.setState({unit});
}

  updateWeather = response => {
    console.log(response);
    const data = response.data.data;
    const cityName = data.city.name;
    const current = data.current;
    const forecasts = data.forecast;
    this.setState({ cityName, current, forecasts });
  }

  handleSearch = () => {
    getWeatherFor(this.state.input)
    .then(this.updateWeather);
  }

  changeLimit = (limit) => {
    this.setState({ limit });
  }

  handleInputChange=(event)=>{
    this.setState({input:event.target.value});
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
        />
        <Footer />
      </div>
    );
  }
}

export default App;
