import React, {useEffect, useState} from 'react';
import './SavedMovies.css'
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import {errorConfig} from "../Movies/Movies";
import Preloader from "../Preloader/Preloader";

const SavedMovies = ({savedMovies, isLoading, handleToggleMovies}) => {
  const [searchError, setSearchError] = useState(errorConfig.errorName);
  const [initialSearchString, setInitialSearchString] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  console.log(savedMovies)

  useEffect(() => {
    if (savedMovies.length !==0) setSearchError('')
  }, [savedMovies])

  return (
    <section className={'savedMovies'}>
      <SearchForm initialSearchValue={initialSearchString}/>
      <hr color={'#E8E8E8'} size={'1px'} width={'100%'} className={'movies__line'}/>
      {searchError
        ?
        <section className="movies__error-block">
          <p className={'movies__error-text'}>{searchError}</p>
        </section>
        : (
          isLoading ? <Preloader/> :
            <MoviesCardList renderMoviesArr={savedMovies} handleToggleMovies={handleToggleMovies}/>
        )
      }
    </section>
  )
}

export default SavedMovies;
