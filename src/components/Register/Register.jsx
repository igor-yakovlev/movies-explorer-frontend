import React, {useState} from 'react';
import './Register.css';
import logo from "../../images/header/logo.svg";
import {Link} from "react-router-dom";
import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";
import {useValidation} from "../../utils/useValidation";

const initialValues = {
  name: '',
  email: '',
  password: ''
}

const Register = ({onRegister}) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = ({target}) => {
    const {name, value} = target;
    setValues(prevState => ({...prevState, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const {name, email, password} = values;
    onRegister(name, email ,password);
  }

  const {errors, handleBlur, isValid} = useValidation();
  const validRegConfig = {
    name: {
      required: true,
      minLength: 2,
      maxLength: 10,
    },
    email: {
      required: true
    },
    password: {
      required: true,
      minLength: 3
    }
  }

  return (
    <div className='register'>
      <div className="register__container">
        <img src={logo} alt="Logo" className='register__logo'/>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form onSubmit={handleSubmit} action="#" className="register__form form" noValidate>
          <FormInput type={'text'} label={'Имя'} value={values.name} validConfig={validRegConfig.name} isValid={isValid} error={errors.name} onBlur={handleBlur} onChange={handleChange} name={'name'}/>
          <FormInput type={'email'} label={'E-mail'} value={values.email} validConfig={validRegConfig.name} isValid={isValid} error={errors.email} onBlur={handleBlur} onChange={handleChange} name={'email'}/>
          <FormInput type={'password'} label={'Пароль'} value={values.password} validConfig={validRegConfig.password} isValid={isValid} error={errors.password} onBlur={handleBlur} onChange={handleChange} name={'password'}/>
          <div className="register__form-wrapper">
            <FormButton disabled={!isValid}>Зарегистрироваться</FormButton>
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
