import React, {useState} from 'react';
import './Login.css';
import logo from "../../images/header/logo.svg";
import {Link} from "react-router-dom";
import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";

const initialValues = {
  email: '',
  password: '',
}

const Login = ({onLogin}) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = ({target}) => {
    const {name, value} = target;
    setValues(prevState => ({...prevState, [name]: value}))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(values.email, values.password);
  }
  return (
    <div className='login'>
      <div className="login__container">
        <img src={logo} alt="Logo" className='login__logo'/>
        <h2 className="login__title">Рады видеть!</h2>
        <form onSubmit={handleSubmit} className="login__form">
          <FormInput type={'email'} label={'E-mail'} value={values.email} onChange={handleChange} name={'email'}/>
          <FormInput type={'password'} label={'Пароль'} value={values.password} onChange={handleChange} name={'password'}/>
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
