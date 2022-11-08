import React, { useEffect, useState } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

const errorConfig = {
  errorName: 'Введите название фильма для поиска',
  errorRequest: 'Во время запроса произошла ошибка. '
    + 'Возможно, проблема с соединением или сервер недоступен. Подождите немного, перезагрузите страницу и попробуйте ещё раз',
  errorNotFound: 'Ничего не найдено',
};

function Movies({
  savedMovies, getMovies, handleToggleMovies, isLoading,
}) {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchError, setSearchError] = useState(errorConfig.errorName);
  const [initialSearchString, setInitialSearchString] = useState('');
  const [isFiltered, sitIsFiltered] = useState(false);

  useEffect(() => {
    const localMovies = JSON.parse(localStorage.getItem('movies'));
    const localSearchMovies = JSON.parse(localStorage.getItem('searchMovies'));
    const localSearchMoviesCheck = JSON.parse(localStorage.getItem('searchMoviesCheck'));
    const localSearchString = localStorage.getItem('moviesSearchString');

    if (!localMovies) {
      getMovies();
    }

    if (localSearchString) {
      setInitialSearchString(localSearchString);
    }

    if (localSearchMovies) {
      setSearchError('');
      setSearchMovies(localSearchMovies);
    }

    if (localSearchMoviesCheck) {
      const shortFilms = localSearchMovies.filter((movie) => movie.duration <= 40);
      setSearchMovies(shortFilms);
      sitIsFiltered(localSearchMoviesCheck);
    }
  }, []);

  const handleSearchMovies = (searchString) => {
    try {
      if (searchString) {
        const movies = JSON.parse(localStorage.getItem('movies'));
        const filteredMovies = movies.filter((movie) => movie.nameRU.toLowerCase().includes(searchString.toLowerCase()));
        if (!filteredMovies.length) {
          setSearchError(errorConfig.errorNotFound);
        } else {
          setSearchError('');
          localStorage.setItem('searchMovies', JSON.stringify(filteredMovies));
          localStorage.setItem('moviesSearchString', searchString);
        }
        setSearchMovies(filteredMovies);
        console.log(searchMovies);
        if (isFiltered) {
          setSearchMovies(filteredMovies.filter((movie) => movie.duration <= 40));
        }
      } else {
        localStorage.setItem('searchMovies', JSON.stringify([]));
        localStorage.setItem('moviesSearchString', searchString);
        setSearchMovies([]);
        setSearchError(errorConfig.errorName);
      }
    } catch (e) {
      setSearchError(errorConfig.errorRequest);
    }
  };

  const getFilteredMovies = (isChecked) => {
    sitIsFiltered(isChecked);
    if (isChecked) {
      if (searchMovies.length) {
        const shortFilms = searchMovies.filter((movie) => movie.duration <= 40);
        setSearchMovies(shortFilms);
        if (!shortFilms.length) setSearchError(errorConfig.errorNotFound);
      }
    } else {
      const localSearchMovies = JSON.parse(localStorage.getItem('searchMovies'));
      if (localSearchMovies) {
        setSearchMovies(localSearchMovies);
        setSearchError('');
      }
    }
    localStorage.setItem('searchMoviesCheck', isChecked);
  };

  return (
    <section className="movies">
      <SearchForm
        setSearchError={setSearchError}
        initialSearchValue={initialSearchString}
        onSubmit={handleSearchMovies}
        onCheck={getFilteredMovies}
        isChecked={isFiltered}
      />
      <hr color="#E8E8E8" size="1px" width="100%" className="movies__line" />
      {isLoading ? <Preloader />
        : searchMovies.length === 0
          ? (
            <section className="movies__error-block">
              <p className="movies__error-text">{searchError}</p>
            </section>
          )
          : (
            <MoviesCardList
              savedMovies={savedMovies}
              renderMoviesArr={searchMovies}
              handleToggleMovies={handleToggleMovies}
            />
          )}
    </section>
  );
}

export default Movies;
