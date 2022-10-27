import React from 'react';
import './MoviesCardList.css';
import Preloader from "../Preloader/Preloader";


const MoviesCardList = ({children}) => {
    return (
        <ul className="moviesCardList">
          {children}
        </ul>
    )
}

export default MoviesCardList;
