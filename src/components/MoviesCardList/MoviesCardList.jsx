import React from 'react';
import './MoviesCardList.css';
import Preloader from "../Preloader/Preloader";
import MoviesCard from "../MoviesCard/MoviesCard";
import {usePagination} from "../../utils/usePagination";
import MoviesButton from "../MoviesButton/MoviesButton";


const MoviesCardList = ({renderMoviesArr}) => {

  const {handleSetPage, selectedMovies, hasNewPage} = usePagination(renderMoviesArr, 3);

  return (
    <>
      <ul className="moviesCardList">
        {selectedMovies.map(movie => {
          return <MoviesCard key={movie.id} data={movie}/>
        })}
      </ul>

      <div className="moviesCardList__wrapper">
        {hasNewPage && <MoviesButton type={"button"} onClick={handleSetPage}>Ещё</MoviesButton>}
      </div>
    </>
  )
}

export default MoviesCardList;
