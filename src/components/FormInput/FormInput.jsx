import React from 'react';
import './FormInput.css'

const FormInput = ({label, name, type, value, onChange, onBlur, validConfig, isValid, error }) => {
    return (
      <div className="formInput__input-wrapper">
        <label htmlFor={name} className="formInput__label">{label}</label>
        <input required={true} type={type} name={name} value={value} {...validConfig} onChange={onChange} onBlur={onBlur} className={`formInput__input ${error && 'formInput__input-error'}`} id={name}/>
        <span id="name-input-error" className="formInput__error">{isValid ? '' : error}</span>
      </div>
    )
}

export default FormInput;
