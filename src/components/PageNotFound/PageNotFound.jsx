import React from 'react';
import './PageNotFound.css';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
  const navigate = useNavigate();

  const handlePrevPage = () => {
    navigate(-1);
  };
  return (
    <section className="pageNotFound">
      <div className="pageNotFound__text-container">
        <h2 className="pageNotFound__title">404</h2>
        <h3 className="pageNotFound__subtitle">Страница не найдена</h3>
      </div>
      <button type="button" onClick={handlePrevPage} className="pageNotFound__button">Назад</button>
    </section>
  );
}

export default PageNotFound;
