import React from 'react';
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import {usePagination} from "../../utils/usePagination";
import MoviesButton from "../MoviesButton/MoviesButton";
import {useLocation} from "react-router-dom";


const MoviesCardList = ({ savedMovies = [], renderMoviesArr, handleToggleMovies}) => {
  const {handleSetPage, selectedMovies, hasNewPage} = usePagination(renderMoviesArr, 3);
  const {pathname} = useLocation();

  return (
    <>
      <ul className="moviesCardList">
        {selectedMovies.map(movie => {
          return <MoviesCard savedMovies={savedMovies} key={pathname === '/saved-movies' ? movie._id : movie.id} data={movie} handleToggleMovies={handleToggleMovies}/>
        })}
      </ul>

      <div className="moviesCardList__wrapper">
        {hasNewPage && <MoviesButton type={"button"} onClick={handleSetPage}>Ещё</MoviesButton>}
      </div>
    </>
  )
}

export default MoviesCardList;
