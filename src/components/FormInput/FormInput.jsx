import React from 'react';
import './FormInput.css'

const FormInput = ({label, name, type, value, onChange }) => {
    return (
      <div className="formInput__input-wrapper">
        <label htmlFor={name} className="formInput__label">{label}</label>
        <input required={true} type={type} name={name} value={value} onChange={onChange} className="formInput__input" id={name}/>
        <span id="name-input-error" className="formInput__input-error"></span>
      </div>
    )
}

export default FormInput;
