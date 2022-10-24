import React from 'react';
import './FormInput.css'

const FormInput = ({label, name, type, }) => {
    return (
      <div className="formInput__input-wrapper">
        <label htmlFor={name} className="formInput__label">{label}</label>
        <input type={type} name={name} className="formInput__input" id={name}/>
        <span id="name-input-error" className="formInput__input-error"></span>
      </div>
    )
}

export default FormInput;
