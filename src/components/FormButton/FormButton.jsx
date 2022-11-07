import React from 'react';
import './FormButton.css';

function FormButton({ children, disabled }) {
  return (
    <button disabled={disabled} className="formButton">{children}</button>
  );
}

export default FormButton;
