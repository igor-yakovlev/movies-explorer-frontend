import React from 'react';
import './FilterCheckbox.css';
import { useLocation } from 'react-router-dom';

function FilterCheckbox({
  disabledValue = false, id, name, htmlFor, onCheck, isChecked,
}) {
  const { pathname } = useLocation();

  const handleChecked = () => {
    if (pathname === '/movies' || pathname === '/saved-movies') {
      if (!disabledValue) return;
    }
    onCheck(!isChecked);
  };

  return (
    // eslint-disable-next-line jsx-a11y/interactive-supports-focus
    <div role="checkbox" aria-checked className="filterSwitch" onClick={handleChecked} onKeyDown={handleChecked}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChecked}
        className="filterSwitch__checkbox"
        name={name}
        id={id}
      />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className="filterSwitch__label" htmlFor={htmlFor}>
        <span className="filterSwitch__inner" />
        <span className="filterSwitch__switch" />
      </label>
    </div>
  );
}

export default FilterCheckbox;
