import React from 'react';
import './PageNotFound.css'

const PageNotFound = ({}) => {
    return (
        <section className={'pageNotFound'}>
          <h2 className="pageNotFound__title">404 </h2>
          <h3 className="pageNotFound__subtitle">Страница не найдена</h3>
          <button className="pageNotFound__button">Назад</button>
        </section>
    )
}

export default PageNotFound;
