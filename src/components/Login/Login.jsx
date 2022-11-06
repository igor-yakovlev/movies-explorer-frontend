import React, {useState} from 'react';
import './Login.css';
import logo from "../../images/header/logo.svg";
import {Link} from "react-router-dom";
import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";
import {useValidation} from "../../utils/useValidation";

const initialValues = {
  email: '',
  password: '',
}

const validLoginConfig = {
  email: {
    required: true
  },
  password: {
    required: true,
    minLength: 3
  }
}


const Login = ({onLogin}) => {
  const {values, errors, handleChange, isValid} = useValidation(initialValues);
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(values.email, values.password);
  }

  return (
    <div className='login'>
      <div className="login__container">
        <img src={logo} alt="Logo" className='login__logo'/>
        <h2 className="login__title">Рады видеть!</h2>
        <form onSubmit={handleSubmit} className="login__form form" noValidate>
          <FormInput type={'email'} label={'E-mail'} value={values.email} validConfig={validLoginConfig.email}
                     isValid={isValid} error={errors.email} onChange={handleChange} name={'email'}/>
          <FormInput type={'password'} label={'Пароль'} value={values.password} validConfig={validLoginConfig.password}
                     isValid={isValid} error={errors.password} onChange={handleChange} name={'password'}/>
          <div className="login__form-wrapper">
            <FormButton disabled={!isValid}>Войти</FormButton>
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
