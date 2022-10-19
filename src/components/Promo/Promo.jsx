import React from 'react';
import './Promo.css';

const Promo = ({children}) => {
  return (
    <section className='promo'>
      <h1 className='promo__title'>Учебный проект студента<br/> факультета Веб-разработки.</h1>
      {children}
    </section>
  )
}

export default Promo;
