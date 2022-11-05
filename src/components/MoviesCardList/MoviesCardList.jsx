import React from 'react';
import './MoviesCardList.css';
import Preloader from "../Preloader/Preloader";
import MoviesCard from "../MoviesCard/MoviesCard";


const MoviesCardList = ({ renderMoviesArr }) => {
    return (
        <ul className="moviesCardList">
          {renderMoviesArr.map(movie => {
            return <MoviesCard key={movie.id} data={movie}/>
          })}
        </ul>
    )
}

export default MoviesCardList;
