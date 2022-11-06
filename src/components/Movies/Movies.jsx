import React, {useEffect, useState} from 'react';
import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";


const errorConfig = {
  errorName: 'Введите название фильма для поиска',
  errorRequest: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного, перезагрузите страницу и попробуйте ещё раз',
  errorNotFound: 'Ничего не найдено',
}


const Movies = ({savedMovies, getMovies, handleToggleMovies}) => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchError, setSearchError] = useState(errorConfig.errorName);
  const [initialSearchString, setInitialSearchString] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const localMovies = JSON.parse(localStorage.getItem('movies'));
    const localSearchMovies = JSON.parse(localStorage.getItem('searchMovies'));
    const localSearchMoviesCheck = JSON.parse(localStorage.getItem('searchMoviesCheck'));
    const localSearchString = localStorage.getItem('moviesSearchString')


    if (!localMovies) {
      getMovies()
    }

    if (localSearchString) {
      setInitialSearchString(localSearchString);
    }

    if (localSearchMovies) {
      setSearchError('')
      setSearchMovies(localSearchMovies)
    }

    if (localSearchMoviesCheck) {
      const shortFilms = localSearchMovies.filter(movie => movie.duration <= 40);
      setSearchMovies(shortFilms);
      setIsChecked(localSearchMoviesCheck)
    }
  }, [])


  const handleSearchMovies = (searchString) => {
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
      if (searchMovies) {
        setSearchMovies(searchMovies);
        setSearchError('')
      }
    }
    localStorage.setItem('searchMoviesCheck', isChecked);
  }


  return (
    <section className='movies'>
      <SearchForm initialSearchValue={initialSearchString} onSubmit={handleSearchMovies} onCheck={getFilteredMovies}
                  isChecked={isChecked}/>
      <hr color={'#E8E8E8'} size={'1px'} width={'100%'} className={'movies__line'}/>
      {isLoading ? <Preloader/> :
        searchMovies.length === 0 ?
          <section className="movies__error-block">
            <p className={'movies__error-text'}>{searchError}</p>
          </section>
          :
          <MoviesCardList savedMovies={savedMovies} renderMoviesArr={searchMovies}
                          handleToggleMovies={handleToggleMovies}/>
      }
    </section>
  )
}

export default Movies;
