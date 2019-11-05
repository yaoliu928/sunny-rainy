import React from 'react';
import logo from '../assets/icons/logo.svg';

function Header() {
  return (
    <header>
      <img className="header__logo" src={logo} alt="logo" />
      <h1 className="header__title">Sunny Rainy</h1>
    </header>
  );
}
export default Header;
