import React, {useState} from 'react';
import './MoviesCard.css';
import buttonIcon from '../../images/moviesCard/moviesCard__button.svg';
import buttonIconActive from '../../images/moviesCard/moviesCard__button_active.svg';
import buttonIconDelete from '../../images/moviesCard/moviesCard__button_delete.svg';
import image from '../../images/moviesCard/pic1.jpg';


const MoviesCard = ({isFavorite = false}) => {
  const [active, setActive] = useState(false);


  const buttonClassName = `moviesCard__button ${active && "moviesCard__button_active"}`
  const imgClassName = active ? buttonIconActive : buttonIcon;

    return (
      <li className="moviesCard">
        <div className="moviesCard__head">
          <div>
            <h2 className="moviesCard__title">33 слова о дизайне</h2>
            <h3 className="moviesCard__subtitle">1ч 47м</h3>
          </div>
          <button type={'button'} className={buttonClassName} onClick={() => setActive(!active)}>
            <img src={!isFavorite ? imgClassName : buttonIconDelete} alt={"Bookmark"}/>
          </button>
        </div>
        <div className="moviesCard__body">
          <img src={image} alt="" className="moviesCard__image"/>
        </div>
      </li>
    )
}

export default MoviesCard;
