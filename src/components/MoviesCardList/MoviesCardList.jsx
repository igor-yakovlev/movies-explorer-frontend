import React from 'react';
import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import usePagination from '../../utils/usePagination';
import MoviesButton from '../MoviesButton/MoviesButton';

function MoviesCardList({ savedMovies = [], renderMoviesArr, handleToggleMovies }) {
  const { handleSetPage, selectedMovies, hasNewPage } = usePagination(renderMoviesArr, 3);
  const { pathname } = useLocation();

  return (
    <>
      <ul className="moviesCardList">
        {selectedMovies.map((movie) => (
          <MoviesCard
            savedMovies={savedMovies}
            key={pathname === '/saved-movies' ? movie._id : movie.id}
            data={movie}
            handleToggleMovies={handleToggleMovies}
          />
        ))}
      </ul>
      {pathname !== '/saved-movies' ? (
        <div className="moviesCardList__wrapper">
          {hasNewPage && <MoviesButton onClick={handleSetPage}>Ещё</MoviesButton>}
        </div>
      )
        : null}

    </>
  );
}

export default MoviesCardList;
