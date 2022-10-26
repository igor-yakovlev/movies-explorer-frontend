import React from 'react';
import './SavedMovies.css'
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";

const SavedMovies = ({}) => {
    return (
        <div className={'savedMovies'}>
          <SearchForm placeholder={'Фильмы'}/>
          <MoviesCardList>
            <MoviesCard isFavorite={true}/>
            <MoviesCard isFavorite={true}/>
            <MoviesCard isFavorite={true}/>
          </MoviesCardList>
        </div>
    )
}

export default SavedMovies;
