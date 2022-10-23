import React from 'react';
import './Register.css';
import logo from "../../images/header/logo.svg";
import {Link} from "react-router-dom";


const Register = ({}) => {
    return (
        <div className='register'>
          <div className="register__container">
            <img src={logo} alt="Логотип" className='register__logo'/>
            <h2 className="register__title">Добро пожаловать!</h2>
            <form action="#" className="register__form form">
              <div className="form__input-wrapper">
                <label htmlFor="name" className="form__label">Имя</label>
                <input type="text" className="form__input" id={'name'}/>
              </div>
              <div className="form__input-wrapper">
                <label htmlFor="email" className="form__label">E-mail</label>
                <input type="email" className="form__input" id={'email'}/>
              </div>
              <div className="form__input-wrapper">
                <label htmlFor="password" className="form__label">Пароль</label>
                <input type="password" className="form__input" id={'password'}/>
              </div>
              <button className="form__button">Зарегистрироваться</button>
              <div className="form__text">Уже зарегистрированы?
                <Link to={"/signin"} className='form__link'> Войти</Link>
              </div>
            </form>
          </div>
        </div>
    )
}

export default Register;
