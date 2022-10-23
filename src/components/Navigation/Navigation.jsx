import React from 'react';
import './Navigation.css';
import {Link, NavLink} from "react-router-dom";

const Navigation = ({isLoggedIn}) => {
  return (
    <nav className="navigation">
      {!isLoggedIn ?
        <div className={"navigation__link-wrapper"}>
          <Link className="navigation__link" to={"/signup"}>
            Регистрация
          </Link>
          <Link className="navigation__link navigation__link_active" to={"/signin"}>
            Войти
          </Link>
        </div>
        :
        <div className={"navigation__account-wrapper"}>
          <div>
            <NavLink to={'/movies'} className="navigation__film-link" activeclassame={'active'}>
              Фильмы
            </NavLink>
            <NavLink to={'/saved-movies'} className="navigation__film-link" activeclassname={'active'}>
              Сохранённые фильмы
            </NavLink>
          </div>
          <Link to={'/profile'} className="navigation__account-link">
            Аккаунт
          </Link>
        </div>
      }
    </nav>
  )
}

export default Navigation;
