import React from 'react';
import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";

const Movies = ({}) => {
    return (
        <div className='movies'>
          <SearchForm placeholder={'Фильмы'}/>
          <MoviesCardList>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
          </MoviesCardList>
        </div>
    )
}

export default Movies;
