import React from 'react';
import './FormButton.css';

const FormButton = ({children}) => {
  return (
    <button className="formButton">{children}</button>
  )
}

export default FormButton;
