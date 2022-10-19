import React from 'react';
import './Header.css';
import logo from '../../images/header__logo/logo.svg'

const Header = ({}) => {
  return (
    <header className="header">
      <img src={logo} alt="Логотип" className='header__logo'/>
      <div className="header__wrapper">
        <div className="header__link">Регистрация</div>
        <div className="header__link">Войти</div>
      </div>
    </header>
  )
}

export default Header;
