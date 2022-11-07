import React, {useState} from 'react';
import './FilterCheckbox.css';
import {useLocation, useNavigate} from "react-router-dom";


const FilterCheckbox = ({disabledValue = false, id, name, htmlFor, onCheck, isChecked}) => {
const {pathname} = useLocation();

  const handleChecked = () => {
    if (pathname === '/movies' || pathname === '/saved-movies') {
      if (!disabledValue) return
    }
    onCheck(!isChecked);
  }

  return (
    <div className="filterSwitch" onClick={handleChecked}>
      <input type="checkbox" checked={isChecked} onChange={handleChecked} className="filterSwitch__checkbox" name={name}
             id={id}/>
      <label className="filterSwitch__label" htmlFor={htmlFor}>
        <span className="filterSwitch__inner"/>
        <span className="filterSwitch__switch"/>
      </label>
    </div>
  )
}

export default FilterCheckbox;
