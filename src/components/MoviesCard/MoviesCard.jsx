import React, {useState} from 'react';
import './MoviesCard.css';
import buttonIcon from '../../images/moviesCard/moviesCard__button.svg';
import buttonIconActive from '../../images/moviesCard/moviesCard__button_active.svg';
import buttonIconDelete from '../../images/moviesCard/moviesCard__button_delete.svg';
import image from '../../images/moviesCard/pic1.jpg';
import {useLocation} from "react-router-dom";

const getTime = (time) => {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  return `${hours}ч ${minutes}м`
}

const getImage = (url) => {
  return ` https://api.nomoreparties.co/${url}`
}

const MoviesCard = ({data, handleToggleMovies}) => {
  const {pathname} = useLocation();
  const {nameRU, duration, image, trailerLink} = data;
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active)
    handleToggleMovies(data)
  }

  const buttonClassName = `moviesCard__button ${active && "moviesCard__button_active"}`
  const imgClassName = active ? buttonIconActive : buttonIcon;

    return (
      <li className="moviesCard">
        <div className="moviesCard__head">
          <div>
            <h2 className="moviesCard__title">{nameRU}</h2>
            <h3 className="moviesCard__subtitle">{getTime(duration)}</h3>
          </div>
          {pathname === '/saved-movies'
            ?
            <button type={'button'} className={'moviesCard__button'} onClick={handleClick}>
              <img src={buttonIconDelete} alt={"Bookmark"}/>
            </button>
            :
            <button type={'button'} className={buttonClassName} onClick={handleClick}>
              <img src={imgClassName} alt={"Bookmark"}/>
            </button>
          }
        </div>
        <div className="moviesCard__body">
          <a href={trailerLink} target={"_blank"} className={'moviesCard__body-link'}>
            <img src={pathname === '/saved-movies' ? image : getImage(image.url)} alt="Card image" className="moviesCard__image"/>
          </a>
        </div>
      </li>
    )
}

export default MoviesCard;
