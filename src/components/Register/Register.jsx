import React, {useState} from 'react';
import './Register.css';
import logo from "../../images/header/logo.svg";
import {Link} from "react-router-dom";
import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";

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
  return (
    <div className='register'>
      <div className="register__container">
        <img src={logo} alt="Logo" className='register__logo'/>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form onSubmit={handleSubmit} action="#" className="register__form">
          <FormInput type={'text'} label={'Имя'} value={values.name} onChange={handleChange} name={'name'}/>
          <FormInput type={'email'} label={'E-mail'} value={values.email} onChange={handleChange} name={'email'}/>
          <FormInput type={'password'} label={'Пароль'} value={values.password} onChange={handleChange} name={'password'}/>
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
