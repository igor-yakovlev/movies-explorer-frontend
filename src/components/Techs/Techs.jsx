import React from 'react';
import './Techs.css';

const Techs = ({}) => {
  return (
    <section className="Techs" id='techs'>
      <h2 className="title">Технологии</h2>
      <div className="Techs__wrapper">
        <h2 className="Techs__title">7 технологий</h2>
        <p className="Techs__descr">На курсе веб-разработки мы освоили технологии, которые применили<br/> в дипломном
          проекте.</p>
        <ul className="Techs__item-container">
          <li className="Techs__item">HTML</li>
          <li className="Techs__item">CSS</li>
          <li className="Techs__item">JS</li>
          <li className="Techs__item">React</li>
          <li className="Techs__item">Git</li>
          <li className="Techs__item">Express.js</li>
          <li className="Techs__item">mongoDB</li>
        </ul>
      </div>
    </section>
  )
}

export default Techs;
