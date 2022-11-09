import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import logo from '../../images/header/logo.svg';
import FormInput from '../FormInput/FormInput';
import FormButton from '../FormButton/FormButton';
import useValidation from '../../utils/useValidation';
import Preloader from '../Preloader/Preloader';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const validRegConfig = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 10,
    pattern: '[a-zA-Zа-яёА-ЯЁ -]{2,40}',
  },
  email: {
    required: true,
  },
  password: {
    required: true,
    minLength: 3,
  },
};

function Register({ isLoading, onRegister }) {
  const {
    values, errors, handleChange, isValid, resetValid,
  } = useValidation(initialValues);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = values;
    onRegister(name, email, password);
    resetValid();
  };

  if (isLoading) return <Preloader />;
  return (
    <div className="register">
      <div className="register__container">
        <Link to="/" className="register__logo">
          <img src={logo} alt="Logo" />
        </Link>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form onSubmit={handleSubmit} action="#" className="register__form form" noValidate>
          <FormInput
            type="text"
            label="Имя"
            value={values.name}
            validConfig={validRegConfig.name}
            isValid={isValid}
            error={errors.name}
            onChange={handleChange}
            name="name"
          />
          <FormInput
            type="text"
            label="E-mail"
            value={values.email}
            isValid={isValid}
            error={errors.email}
            onChange={handleChange}
            name="email"
          />
          <FormInput
            type="password"
            label="Пароль"
            value={values.password}
            validConfig={validRegConfig.password}
            isValid={isValid}
            error={errors.password}
            onChange={handleChange}
            name="password"
          />
          <div className="register__form-wrapper">
            <FormButton disabled={!isValid}>Зарегистрироваться</FormButton>
          </div>
          <div className="register__text">
            Уже зарегистрированы?
            <Link to="/signin" className="register__link"> Войти</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
