import React from 'react';

const ProfileInput = ({label, type, disabled, name, value, onChange, validConfig, isValid, error, onBlur}) => {
    return (
      <div className="profile__input-container">
        <label htmlFor={name} className="profile__label">
          {label}
        </label>
        <input type={type} id={name} disabled={disabled} name={name} value={value} onChange={onChange} {...validConfig} onBlur={onBlur} className={`profile__input ${error && 'profile__input-error'}`}/>
      </div>
    )
}

export default ProfileInput;
