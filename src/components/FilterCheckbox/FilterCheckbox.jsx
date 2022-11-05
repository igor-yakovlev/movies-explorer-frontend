import React, {useState} from 'react';
import './FilterCheckbox.css';


const FilterCheckbox = ({id, name, htmlFor, onCheck, isChecked}) => {

  const handleChecked = () => {
    onCheck(!isChecked);
  }

  return (
    <div className="filterSwitch">
      <input type="checkbox" checked={isChecked} onChange={handleChecked} className="filterSwitch__checkbox" name={name}
             id={id}/>
      <label className="filterSwitch__label" htmlFor={htmlFor}>
        <span className="filterSwitch__inner"/>
        <span className="filterSwitch__switch" onClick={handleChecked}/>
      </label>
    </div>
  )
}

export default FilterCheckbox;
