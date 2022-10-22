import React from 'react';
import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const Movies = ({}) => {
    return (
        <div className='movies'>
          <SearchForm placeholder={'Фильмы'}/>
        </div>
    )
}

export default Movies;
