import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../images/header/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header({ loggedIn }) {
  const token = localStorage.getItem('token');
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src={logo} alt="Logo" />
      </Link>
      <Navigation isLoggedIn={Boolean(token) || loggedIn} />
    </header>
  );
}

export default Header;
