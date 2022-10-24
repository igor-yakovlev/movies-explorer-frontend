import React from 'react';
import './Menu.css';
import {Link} from "react-router-dom";

const Menu = ({isOpen, closeMenu}) => {
  const handleClose = () => {
    closeMenu()
  }

  return (
    <div className={`menu ${isOpen && "menu_visible"}`}>
      <div className={`menu__container ${isOpen && "menu__container_open"}`}>
        <button className="menu__close-button" type="button" onClick={handleClose}/>
        <nav className="menu__navigation">
          <Link className="menu__link" to={"/signup"}>
            Главная
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Menu;
