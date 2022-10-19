import React from 'react';
import './AboutMe.css'
import photo from '../../images/aboutMe__photo/photo.jpg'


const AboutMe = ({}) => {
  return (
    <section className="aboutMe" id='aboutMe'>
      <h2 className="title">Студент</h2>
      <div className="aboutMe__wrapper">
        <div className="aboutMe__info-wrapper">
          <h2 className="aboutMe__title">Игорь</h2>
          <h3 className="aboutMe__subtitle">Фронтенд-разработчик, 27 лет</h3>
          <p className="aboutMe__paragraph">Вырос в Ставропольском крае. После окончания школы поступил в СПбПУ в
            Институт
            металлургии машиностроения и транспорта.После окончания института работал инженером на заводе. По совету друзей заинтересовался
            программированием.Успел поработать в стартапе очень понравилось. Прошел курс веб-разработки и сейчас ищю
            работу
            в компании. Люблю кататься на велосипеде, увлекаюсь фитнесом.</p>
          <a href="https://vk.com/id66345979" target={"_blank"} className="aboutMe__link">Вконтакте</a>
          <a href="https://github.com/igor-yakovlev" target={"_blank"} className="aboutMe__link">Github</a>
        </div>
        <img src={photo} alt="Моя фотография" className="aboutMe__img"/>
      </div>
      <h3 className="aboutMe__portfolio-title">Портфолио</h3>
      <ul className="aboutMe__portfolio-items">
        <div className="aboutMe__portfolio-wrapper">
          <li className="aboutMe__portfolio-item">Статичный сайт</li>
          <a href="https://igor-yakovlev.github.io/how-to-learn/" target={"_blank"} className="aboutMe__portfolio-link">↗</a>
        </div>
        <div className="aboutMe__portfolio-wrapper">
          <li className="aboutMe__portfolio-item">Адаптивный сайт</li>
          <a href="https://igor-yakovlev.github.io/russian-travel/" target={"_blank"} className="aboutMe__portfolio-link">↗</a>
        </div>
        <div className="aboutMe__portfolio-wrapper">
          <li className="aboutMe__portfolio-item">Одностраничное приложение</li>
          <a href="https://igor.yakovlev.nomorepartiesxyz.ru/sign-in" target={"_blank"} className="aboutMe__portfolio-link">↗</a>
        </div>
      </ul>
    </section>
  )
}

export default AboutMe;
