import React from 'react';
import './PageNotFound.css'
import {Link} from "react-router-dom";

const PageNotFound = ({}) => {
    return (
      <>
        <section className={'pageNotFound'}>
          <div className={'pageNotFound__text-container'}>
            <h2 className="pageNotFound__title">404</h2>
            <h3 className="pageNotFound__subtitle">Страница не найдена</h3>
          </div>
          <Link to={"/"} className='pageNotFound__link'>Назад</Link>
        </section>
      </>
    )
}

export default PageNotFound;
