import React from 'react';
import './Login.css';
import logo from "../../images/header/logo.svg";
import {Link} from "react-router-dom";
import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";

const Login = ({}) => {
    return (
      <div className='login'>
        <div className="login__container">
          <img src={logo} alt="Logo" className='login__logo'/>
          <h2 className="login__title">Рады видеть!</h2>
          <form action="#" className="login__form">
            <FormInput type={'email'} label={'E-mail'} name={'email'}/>
            <FormInput type={'password'} label={'Пароль'} name={'password'}/>
            <div className="login__form-wrapper">
              <FormButton>Войти</FormButton>
            </div>
            <div className="login__text">Ещё не зарегистрированы?
              <Link to={"/signup"} className='login__link'> Регистрация</Link>
            </div>
          </form>
        </div>
      </div>
    )
}

export default Login;
