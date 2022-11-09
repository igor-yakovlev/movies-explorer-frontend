import React from 'react';
import './NavTab.css';

function NavTab() {
  return (
    <div className="navTab">
      <a href="#aboutProject" className="navTab__link">О проекте</a>
      <a href="#techs" className="navTab__link">Технологии</a>
      <a href="#aboutMe" className="navTab__link">Студент</a>
    </div>
  );
}

export default NavTab;
