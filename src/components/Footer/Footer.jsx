import React from 'react';
import './Footer.css';

const Footer = ({}) => {
    return (
        <footer className='footer'>
          <p className="footer__descr">Учебный проект Яндекс.Практикум х BeatFilm.</p>
          <div className="footer_wrapper">
            <p className="footer__copyright">&copy; 2022</p>
            <nav className="footer__links">
              <a href="https://practicum.yandex.ru/" target={"_blank"} className="footer__link">Яндекс.Практикум</a>
              <a href="https://github.com/igor-yakovlev" target={"_blank"} className="footer__link">Github</a>
            </nav>
          </div>
        </footer>
    )
}

export default Footer;
