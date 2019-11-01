import React from 'react';
import axios from 'axios';
import { format } from 'date-fns';

import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forecasts: [],
      limit: 5,
    };
  }

  componentDidMount() {
    //fetch data
    axios.get('https://jr-weather-api.herokuapp.com/api/weather?cc=au&city=brisbane')
      .then(response => {
        const forecasts = response.data.data.forecast.slice(0, 10).map(forecast => {
          const date = new Date(forecast.time * 1000);
          const day = format(date, 'EEE');
          const time = format(date, 'HH:mm');
          return {
            day,
            time,
            high: forecast.maxCelsius,
            low: forecast.minCelsius
          };
        });
        this.setState({ forecasts })
      });
  }
  render() {
    return (
      <div className="weather-channel__container">
        <Header />
        <Nav />
        <Main forecasts={this.state.forecasts.slice(0,this.state.limit)} />
        <Footer />
      </div>
    );
  }
}

export default App;
