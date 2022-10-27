import React, {useState} from 'react';
import './FilterCheckbox.css';


const FilterCheckbox = ({id, name, htmlFor}) => {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked)
  }

  return (
    <div className="filterSwitch">
      <input type="checkbox" checked={checked} onChange={handleChecked} className="filterSwitch__checkbox" name={name}
             id={id}/>
      <label className="filterSwitch__label" htmlFor={htmlFor}>
        <span className="filterSwitch__inner"/>
        <span className="filterSwitch__switch" onClick={handleChecked}/>
      </label>
    </div>
  )
}

export default FilterCheckbox;
