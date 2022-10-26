import React from 'react';
import './SavedMovies.css'
import SearchForm from "../SearchForm/SearchForm";

const SavedMovies = ({}) => {
    return (
        <div className={'savedMovies'}>
          <SearchForm placeholder={'Фильмы'}/>
        </div>
    )
}

export default SavedMovies;
