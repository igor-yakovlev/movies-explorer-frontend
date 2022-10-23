import React from 'react';
import './Header.css';
import logo from '../../images/header/logo.svg'
import Navigation from "../Navigation/Navigation";

const Header = ({}) => {
  return (
    <header className="header">
      <img src={logo} alt="Логотип" className='header__logo'/>
      <Navigation isLoggedIn={false}/>
    </header>
  )
}

export default Header;
