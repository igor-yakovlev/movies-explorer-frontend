import React, {useEffect, useState} from 'react';
import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesButton from "../MoviesButton/MoviesButton";
import Preloader from "../Preloader/Preloader";
import {usePagination} from "../../utils/usePagination";


const errorConfig = {
  errorName: 'Введите название фильма для поиска',
  errorRequest: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного, перезагрузите страницу и попробуйте ещё раз',
  errorNotFound: 'Ничего не найдено',
}


const Movies = ({}) => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchError, setSearchError] = useState(errorConfig.errorName);
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const searchMovies = JSON.parse(localStorage.getItem('searchMovies'));
    const searchMoviesCheck = JSON.parse(localStorage.getItem('searchMoviesCheck'));

    if (searchMovies.length !== 0) {
      setSearchError('')
      setSearchMovies(searchMovies)
    }

    if (searchMoviesCheck) {
      const shortFilms = searchMovies.filter(movie => movie.duration <= 40);
      setSearchMovies(shortFilms);
      setIsChecked(searchMoviesCheck)
    }
  }, [])


  async function handleSearchMovies(searchString) {
    setIsLoading(true);
    try {
      if (searchString) {
        const movies = JSON.parse(localStorage.getItem('movies'));
        const searchMovies = movies.filter(movie => movie.nameRU.toLowerCase().includes(searchString.toLowerCase()));
        if (!searchMovies.length) {
          setSearchError(errorConfig.errorNotFound)
        } else {
          setSearchError('')
          localStorage.setItem('searchMovies', JSON.stringify(searchMovies))
          localStorage.setItem('moviesSearchString', searchString);
        }
        setSearchMovies(searchMovies)
      } else {
        localStorage.setItem('searchMovies', JSON.stringify([]))
        localStorage.setItem('moviesSearchString', searchString);
        setSearchMovies([]);
        setSearchError(errorConfig.errorName)
      }
    } catch (e) {
      setSearchError(errorConfig.errorRequest)
    } finally {
      setIsLoading(false)
    }
  }

  const getFilteredMovies = (isChecked) => {
    setIsChecked(isChecked)
    if (isChecked) {
      if (searchMovies.length) {
        const shortFilms = searchMovies.filter(movie => movie.duration <= 40);
        setSearchMovies(shortFilms);
        if (!shortFilms.length) setSearchError(errorConfig.errorNotFound)
      }
    } else {
      const searchMovies = JSON.parse(localStorage.getItem('searchMovies'));
      setSearchMovies(searchMovies);
      setSearchError('')
    }
    localStorage.setItem('searchMoviesCheck', isChecked);
  }


  return (
    <section className='movies'>
      <SearchForm placeholder={'Фильмы'} onSubmit={handleSearchMovies} onCheck={getFilteredMovies}
                  isChecked={isChecked}/>
      <hr color={'#E8E8E8'} size={'1px'} width={'100%'} className={'movies__line'}/>
      {searchError
        ?
        <section className="movies__error-block">
          <p className={'movies__error-text'}>{searchError}</p>
        </section>
        : (
          isLoading ? <Preloader/> :
            <MoviesCardList renderMoviesArr={searchMovies}/>
        )
      }
    </section>
  )
}

export default Movies;
