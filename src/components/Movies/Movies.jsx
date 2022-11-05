import React, {useEffect, useState} from 'react';
import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesButton from "../MoviesButton/MoviesButton";
import Preloader from "../Preloader/Preloader";
import {usePagination} from "../../utils/usePagination";


const Movies = ({}) => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchError, setSearchError] = useState('Введите название фильма для поиска');
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const searchMovies = JSON.parse(localStorage.getItem('searchMovies'));
    const searchFormCheck = localStorage.getItem('searchMoviesCheck');
    if (searchMovies) {
      setSearchError('')
      setSearchMovies(searchMovies)
    }


    if (searchFormCheck === 'true') {
      setIsChecked(true);
      handleCheckDuration(true)
    }
  }, [])


  const handleSearchMovies = (searchString) => {
    setIsLoading(true);
    const movies = JSON.parse(localStorage.getItem('movies'));
    try {
      const searchMovies = movies.filter(movie => movie.nameRU.toLowerCase().includes(searchString.toLowerCase()));
      setSearchMovies(searchMovies)
      if (searchMovies.length !== 0) {
        setSearchError('')
        localStorage.setItem('searchMovies', JSON.stringify(searchMovies))
        localStorage.setItem('moviesSearchString', searchString);
      }
    } catch (e) {
      setSearchError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного, перезагрузите страницу и попробуйте ещё раз')
    } finally {
      setIsLoading(false)
    }

  }

  const handleCheckDuration = (isChecked) => {
    setIsChecked(isChecked)
    if (isChecked) {
      if (searchMovies.length) {
        const shortFilms = searchMovies.filter(movie => movie.duration <= 40);
        setSearchMovies(shortFilms);
        if (!shortFilms.length) setSearchError('Короткометражек по данному запросу не найдено')
      }
    } else {
      setSearchMovies(JSON.parse(localStorage.getItem('searchMovies')));
      setSearchError('')
    }
    localStorage.setItem('searchMoviesCheck', isChecked);
  }

  const {handleSetPage, selectedMovies, hasNewPage} = usePagination(searchMovies, 2);

  return (
    <section className='movies'>
      <SearchForm placeholder={'Фильмы'} onSubmit={handleSearchMovies} onCheck={handleCheckDuration}
                  isChecked={isChecked}/>
      <hr color={'#E8E8E8'} size={'1px'} width={'100%'} className={'movies__line'}/>
      <section className="movies__error-block">
        <h1>{searchError}</h1>
      </section>
      {isLoading ? <Preloader/> :
        <>
          <MoviesCardList renderMoviesArr={selectedMovies}/>
          <div className="movies__wrapper">
            {hasNewPage && <MoviesButton type={"button"} onClick={handleSetPage}>Ещё</MoviesButton>}
          </div>
        </>
      }
    </section>
  )
}

export default Movies;
