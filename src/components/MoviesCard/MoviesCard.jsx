import React, { useEffect, useState } from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import buttonIcon from '../../images/moviesCard/moviesCard__button.svg';
import buttonIconActive from '../../images/moviesCard/moviesCard__button_active.svg';
import buttonIconDelete from '../../images/moviesCard/moviesCard__button_delete.svg';

const getTime = (time) => {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  return `${hours}ч ${minutes}м`;
};

const getImage = (url) => ` https://api.nomoreparties.co/${url}`;

function MoviesCard({ savedMovies = [], data, handleToggleMovies }) {
  const { pathname } = useLocation();
  const {
    nameRU, duration, image, trailerLink,
  } = data;
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (pathname === '/movies') {
      const isSaved = savedMovies.some((movie) => movie.movieId === data.id);
      setActive(isSaved);
    }
  }, [savedMovies]);

  const handleClick = () => {
    setActive(!active);
    handleToggleMovies(data);
  };

  const buttonClassName = `moviesCard__button ${active && 'moviesCard__button_active'}`;
  const imgClassName = active ? buttonIconActive : buttonIcon;

  return (
    <li className="moviesCard">
      <div className="moviesCard__head">
        <div>
          <h2 className="moviesCard__title">{nameRU}</h2>
          <h3 className="moviesCard__subtitle">{getTime(duration)}</h3>
        </div>
        {pathname === '/saved-movies'
          ? (
            <button type="button" className="moviesCard__button" onClick={handleClick}>
              <img src={buttonIconDelete} alt="Bookmark" />
            </button>
          )
          : (
            <button type="button" className={buttonClassName} onClick={handleClick}>
              <img src={imgClassName} alt="Bookmark" />
            </button>
          )}
      </div>
      <div className="moviesCard__body">
        <a href={trailerLink} target="_blank" className="moviesCard__body-link" rel="noreferrer">
          <img
            src={pathname === '/saved-movies' ? image : getImage(image.url)}
            alt="Card"
            className="moviesCard__image"
          />
        </a>
      </div>
    </li>
  );
}

export default MoviesCard;
