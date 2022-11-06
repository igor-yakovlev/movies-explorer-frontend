import React, {useEffect, useState} from 'react';
import './SavedMovies.css'
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

const errorConfig = {
  errorNull: 'У вас нет сохраненных фильмов',
  errorRequest: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного, перезагрузите страницу и попробуйте ещё раз',
  errorNotFound: 'Ничего не найдено',
}


const SavedMovies = ({savedMovies, isLoading, handleToggleMovies}) => {
  const [searchError, setSearchError] = useState(errorConfig.errorNull);
  const [initialSearchString, setInitialSearchString] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [foundSavedMovies, setFoundSavedMovies] = useState([]);

  useEffect(() => {
    if (savedMovies.length !== 0) {
      setFoundSavedMovies(savedMovies)
      setSearchError('')
    }
  }, [savedMovies])

  const handleSearchMovies = (searchString) => {
    try {
      if (searchString) {
        const searchedMovies = savedMovies.filter(movie => movie.nameRU.toLowerCase().includes(searchString.toLowerCase()));
        if (!searchedMovies.length) {
          setSearchError(errorConfig.errorNotFound)
        } else {
          setSearchError('')
        }
        setFoundSavedMovies(searchedMovies);
      } else {
        setFoundSavedMovies(savedMovies);
        setSearchError('')
      }
    } catch (e) {
      setSearchError(errorConfig.errorRequest)
    }
  }

  const getFilteredMovies = (isChecked) => {
    setIsChecked(isChecked)
    if (isChecked) {
      if (foundSavedMovies.length) {
        const shortFilms = foundSavedMovies.filter(movie => movie.duration <= 40);
        setFoundSavedMovies(shortFilms);
        if (!shortFilms.length) setSearchError(errorConfig.errorNotFound)
      }
    } else {
      if (foundSavedMovies) {
        setFoundSavedMovies(savedMovies);
        setSearchError('')
      }
    }
    localStorage.setItem('searchMoviesCheck', isChecked);
  }

  return (
    <section className={'savedMovies'}>
      <SearchForm initialSearchValue={initialSearchString} onSubmit={handleSearchMovies} isChecked={isChecked}
                  onCheck={getFilteredMovies}/>
      <hr color={'#E8E8E8'} size={'1px'} width={'100%'} className={'movies__line'}/>
      {isLoading ? <Preloader/> :
        savedMovies.length === 0 ?
          <section className="movies__error-block">
            <p className={'movies__error-text'}>{searchError}</p>
          </section>
          :
        <MoviesCardList renderMoviesArr={foundSavedMovies} handleToggleMovies={handleToggleMovies}/>
      }

    </section>
  )
}

export default SavedMovies;
