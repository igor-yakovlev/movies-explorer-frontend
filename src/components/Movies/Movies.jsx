import React from 'react';
import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesButton from "../MoviesButton/MoviesButton";

const Movies = ({}) => {
  return (
    <section className='movies'>
      <SearchForm placeholder={'Фильмы'}/>
      <MoviesCardList>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
      </MoviesCardList>
      <div className="movies__wrapper">
        <MoviesButton>Ещё</MoviesButton>
      </div>
    </section>
  )
}

export default Movies;
