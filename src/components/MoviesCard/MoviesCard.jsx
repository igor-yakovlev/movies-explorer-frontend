import React, {useState} from 'react';
import './MoviesCard.css';
import buttonIcon from '../../images/moviesCard/moviesCard__button.svg';
import buttonIconActive from '../../images/moviesCard/moviesCard__button_active.svg';
import image from '../../images/moviesCard/pic1.jpg';

const MoviesCard = ({}) => {
  const [active, setActive] = useState(false)

    return (
      <li className="moviesCard">
        <div className="moviesCard__head">
          <div>
            <h2 className="moviesCard__title">33 слова о дизайне</h2>
            <h3 className="moviesCard__subtitle">1ч 47м</h3>
          </div>
          <button className={`moviesCard__button ${active && "moviesCard__button_active"}`} onClick={() => setActive(!active)}>
            <img src={active ? buttonIconActive : buttonIcon} alt={"Bookmark"}/>
          </button>
        </div>
        <div className="moviesCard__body">
          <img src={image} alt="" className="moviesCard__image"/>
        </div>
      </li>
    )
}

export default MoviesCard;
