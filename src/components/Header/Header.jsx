import React from 'react';
import './Header.css';
import logo from '../../images/header/logo.svg'
import Navigation from "../Navigation/Navigation";
import {Link} from "react-router-dom";

const Header = ({loggedIn}) => {
  return (
    <header className="header">
      <Link to={'/'} className='header__logo'>
        <img src={logo} alt="Logo"/>
      </Link>
      <Navigation isLoggedIn={loggedIn}/>
    </header>
  )
}

export default Header;
