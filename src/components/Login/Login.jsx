import React from 'react';
import './Login.css';
import logo from "../../images/header/logo.svg";
import {Link} from "react-router-dom";

const Login = ({}) => {
    return (
      <div className='login'>
        <div className="login__container">
          <img src={logo} alt="Логотип" className='login__logo'/>
          <h2 className="login__title">Рады видеть!</h2>
          <form action="#" className="login__form form">
            <div className="form__input-wrapper">
              <label htmlFor="email" className="form__label">E-mail</label>
              <input type="email" className="form__input" id={'email'}/>
            </div>
            <div className="form__input-wrapper">
              <label htmlFor="password" className="form__label">Пароль</label>
              <input type="password" className="form__input" id={'password'}/>
            </div>
            <button className="form__button">Войти</button>
            <div className="form__text">Ещё не зарегистрированы?
              <Link to={"/signup"} className='form__link'> Регистрация</Link>
            </div>
          </form>
        </div>
      </div>
    )
}

export default Login;
