import React, {useEffect} from 'react';
import './Menu.css';
import {Link, NavLink} from "react-router-dom";

const Menu = ({isOpen, closeMenu}) => {
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleCloseEsc);
    }
    return () => {
      document.removeEventListener('keydown', handleCloseEsc);
    };
  }, [isOpen]);

  const handleClose = ({target}) => {
    if (target.className !== 'menu__container menu__container_open' && target.className !== 'menu__navigation') {
      closeMenu()
    }
  }

  const handleCloseEsc = ({key}) => {
    if (key === 'Escape') {
      closeMenu()
    }
  }

  return (
    <div className={`menu ${isOpen && "menu_visible"}`} onClick={handleClose}>
      <div className={`menu__container ${isOpen && "menu__container_open"}`}>
        <button className="menu__close-button" type="button"/>
        <nav className="menu__navigation">
          <div className={'menu__navigation-wrapper'}>
            <NavLink end={true} className="menu__link" to={"/"} activeclass={"active"}>
              Главная
            </NavLink>
            <NavLink className="menu__link" to={"/movies"} activeclass={"active"}>
              Фильмы
            </NavLink>
            <NavLink className="menu__link" to={"/saved-movies"} activeclass={"active"}>
              Сохранённые фильмы
            </NavLink>
          </div>
          <Link to={'/profile'} className="menu__account-link">
            Аккаунт
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Menu;
