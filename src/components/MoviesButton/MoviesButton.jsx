import React from 'react';
import './MoviesButton.css';

const MoviesButton = ({children}) => {
  return (
    <button className="moviesButton">{children}</button>
  )
}

export default MoviesButton;
