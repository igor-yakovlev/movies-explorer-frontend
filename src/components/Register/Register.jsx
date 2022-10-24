import React from 'react';
import './Register.css';
import logo from "../../images/header/logo.svg";
import {Link} from "react-router-dom";
import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";


const Register = ({}) => {
    return (
        <div className='register'>
          <div className="register__container">
            <img src={logo} alt="Логотип" className='register__logo'/>
            <h2 className="register__title">Добро пожаловать!</h2>
            <form action="#" className="register__form form">
              <FormInput type={'text'} label={'Имя'} name={'name'}/>
              <FormInput type={'email'} label={'E-mail'} name={'email'}/>
              <FormInput type={'password'} label={'Пароль'} name={'password'}/>
              <div className="register__form-wrapper">
                <FormButton>Зарегистрироваться</FormButton>
              </div>
              <div className="register__text">Уже зарегистрированы?
                <Link to={"/signin"} className='register__link'> Войти</Link>
              </div>
            </form>
          </div>
        </div>
    )
}

export default Register;
