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
      cityName: '',
      current: {},
      input:''
    };
  }

  componentDidMount() {
    //fetch data
    axios.get('https://jr-weather-api.herokuapp.com/api/weather?cc=au&city=brisbane')
      .then(response => {
        console.log(response);
        const data = response.data.data;
        const cityName = data.city.name;
        const current = data.current;
        const forecasts = data.forecast.slice(0, 10).map(forecast => {
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
        this.setState({ cityName, current, forecasts });
      });
  }

  changeLimit = (limit) => {
    this.setState({ limit });
  }

  handleInputChange=(event)=>{
    this.setState({input:event.target.value})
  }

  render() {
    return (
      <div className="weather-channel__container">
        <Header />
        <Nav handleInputChange={(this.handleInputChange)} />
        <Main
          cityName={this.state.cityName}
          current={this.state.current}
          forecasts={this.state.forecasts.slice(0, this.state.limit)}
          changeLimit={this.changeLimit}
          limit={this.state.limit}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
