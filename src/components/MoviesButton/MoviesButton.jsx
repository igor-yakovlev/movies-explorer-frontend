import React from 'react';
import './MoviesButton.css';

const MoviesButton = ({children, type, onClick}) => {
  return (
    <button type={type} className="moviesButton" onClick={onClick}>{children}</button>
  )
}

export default MoviesButton;
