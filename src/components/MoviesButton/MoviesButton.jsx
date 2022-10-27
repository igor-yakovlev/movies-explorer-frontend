import React from 'react';
import './MoviesButton.css';

const MoviesButton = ({children, type}) => {
  return (
    <button type={type} className="moviesButton">{children}</button>
  )
}

export default MoviesButton;
