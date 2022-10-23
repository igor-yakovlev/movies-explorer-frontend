import React from 'react';
import './Header.css';
import logo from '../../images/header/logo.svg'
import {Link} from "react-router-dom";

const Header = ({}) => {
  return (
    <header className="header">
      <img src={logo} alt="Логотип" className='header__logo'/>
      <nav className="header__navigation">
        <Link className="header__link" to={"/signup"}>
          Регистрация
        </Link>
        <Link className="header__link header__link_active" to={"/signin"}>
          Войти
        </Link>
      </nav>
    </header>
  )
}

export default Header;
