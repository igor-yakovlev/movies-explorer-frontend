import React, {useState} from 'react';
import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesButton from "../MoviesButton/MoviesButton";
import Preloader from "../Preloader/Preloader";
import {usePagination} from "../../utils/usePagination";


const moviesPagination = (moviesArr, numOfMovies, numToShow) => {

  return moviesArr.slice(0, )
}

const Movies = ({}) => {
  const movies = JSON.parse(localStorage.getItem('movies'));
  const [searchMovies, setSearchMovies] = useState([]);

  const onSearch = (searchString) => {
    setSearchMovies(movies.filter(movie => movie.nameRU.toLowerCase().includes(searchString.toLowerCase())))
  }

  const {handleSetPage, selectedMovies, hasNewPage, totalPages} = usePagination(searchMovies, 2);


  return (
    <section className='movies'>
      <SearchForm placeholder={'Фильмы'} onSubmit={onSearch}/>
      {false ? <Preloader/> :
        <MoviesCardList>
          {selectedMovies.map(movie => {
            return <MoviesCard key={movie.id} data={movie}/>
          })}
        </MoviesCardList>
      }
      <div className="movies__wrapper">
        {hasNewPage && <MoviesButton type={"button"} onClick={handleSetPage}>Ещё</MoviesButton>}
      </div>
    </section>
  )
}

export default Movies;
