import React from 'react';
import './MoviesButton.css';

function MoviesButton({ children, onClick }) {
  return (
    <button type="button" className="moviesButton" onClick={onClick}>{children}</button>
  );
}

export default MoviesButton;
