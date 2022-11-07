import React, { useState } from 'react';
import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';
import Menu from '../Menu/Menu';

function Navigation({ isLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (

    <>
      <nav className="navigation">
        {!isLoggedIn
          ? (
            <div className="navigation__link-wrapper">
              <Link className="navigation__link" to="/signup">
                Регистрация
              </Link>
              <Link className="navigation__link navigation__link_active" to="/signin">
                Войти
              </Link>
            </div>
          )
          : (
            <div className="navigation__account-wrapper">
              <div className="navigation__film-wrapper">
                <NavLink to="/movies" className="navigation__film-link" activeclassame="active">
                  Фильмы
                </NavLink>
                <NavLink to="/saved-movies" className="navigation__film-link" activeclassname="active">
                  Сохранённые фильмы
                </NavLink>
              </div>
              <Link to="/profile" className="navigation__account-link">
                Аккаунт
              </Link>
              <button type="button" className="navigation__menu-button" onClick={handleOpenMenu} />
            </div>
          )}
      </nav>
      <Menu isOpen={isOpen} closeMenu={handleCloseMenu} />
    </>
  );
}

export default Navigation;
