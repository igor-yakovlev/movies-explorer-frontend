import React from 'react';
import './FormInput.css';

function FormInput({
  label, name, type, value, onChange, validConfig, isValid, error,
}) {
  return (
    <div className="formInput__input-wrapper">
      <label htmlFor={name} className="formInput__label">{label}</label>
      <input
        required
        type={type}
        name={name}
        value={value}
        {...validConfig}
        onChange={onChange}
        className={`formInput__input ${error && 'formInput__input-error'}`}
        id={name}
      />
      <span id="name-input-error" className="formInput__error">{isValid ? '' : error}</span>
    </div>
  );
}

export default FormInput;
