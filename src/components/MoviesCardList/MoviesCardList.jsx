import React from 'react';
import './MoviesCardList.css';


const MoviesCardList = ({children}) => {
    return (
        <ul className="moviesCardList">
          {children}
        </ul>
    )
}

export default MoviesCardList;
