import React from 'react';
import './FormButton.css';

function FormButton({ children, disabled }) {
  return (
    <button type="submit" disabled={disabled} className="formButton">{children}</button>
  );
}

export default FormButton;
