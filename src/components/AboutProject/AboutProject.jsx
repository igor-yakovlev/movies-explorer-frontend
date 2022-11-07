import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="aboutProject" id="aboutProject">
      <h2 className="aboutProject__title">О проекте</h2>
      <div className="aboutProject__wrapper">
        <div className="aboutProject__item">
          <h3 className="aboutProject__descr-title">Дипломный проект включал 5 этапов</h3>
          <p className="aboutProject__paragraph">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="aboutProject__item">
          <h3 className="aboutProject__descr-title">На выполнение диплома ушло 5 недель</h3>
          <p className="aboutProject__paragraph">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="aboutProject__progress">
        <div className="aboutProject__progress-item" style={{ width: '30%' }}>
          <h3 className="aboutProject__progress-title">1 неделя</h3>
          <p className="aboutProject__progress-descr">Back-end</p>
        </div>
        <div className="aboutProject__progress-item" style={{ width: '80%' }}>
          <h3 className="aboutProject__progress-title" style={{ background: '#F2F2F2' }}>4 недели</h3>
          <p className="aboutProject__progress-descr">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
