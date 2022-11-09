import React, { useEffect, useState } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import search from '../../images/searchForm/search_icon.svg';

const validSearchConfig = {
  required: true,
};

function SearchForm({
  initialSearchValue = '', onSubmit, onCheck, isChecked,
}) {
  const [searchString, setSearchString] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setSearchString(initialSearchValue);
    if (initialSearchValue) setIsValid(true);
  }, [initialSearchValue]);

  const handleChange = ({ target }) => {
    const { validationMessage, value } = target;
    setSearchString(value);

    if (validationMessage) {
      setError(validationMessage);
      setIsValid(false);
    } else {
      setError('');
    }
    if (target.closest('.form').checkValidity()) setIsValid(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchString);
  };

  return (
    <form className="searchForm form" onSubmit={handleSubmit} noValidate>
      <div className="searchForm__container">
        <img src={search} alt="Search" className="searchForm__icon" />
        <input
          type="text"
          placeholder={error || 'Фильмы'}
          name="search"
          value={searchString}
          onChange={handleChange}
          {...validSearchConfig}
          className="searchForm__input"
        />
        <button label="search" type="submit" disabled={!isValid} className="searchForm__button" />
      </div>
      <div className="searchForm__vl-container">
        <div className="searchForm__vl" />
      </div>
      <div className="searchForm__wrapper">
        <FilterCheckbox disabledValue={searchString} onCheck={onCheck} isChecked={isChecked} />
        <span className="searchForm__text">Короткометражки</span>
      </div>
    </form>
  );
}

export default SearchForm;
