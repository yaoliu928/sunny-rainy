import React from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Error from './components/Error';
import Footer from './components/Footer';
import { fetchDataThunkAction } from './actions/weatherAction';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchWeatherData('gold coast');
  }

  renderMain = () => {
    if (this.props.hasError) return <Error />;
    return <Main />;
  }

  render() {
    return (
      <div className="weather-channel__container">
        <Header />
        <Nav />
          { this.props.isLoading
            ? <Main />
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
