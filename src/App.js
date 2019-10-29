import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="weather-channel__container">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
