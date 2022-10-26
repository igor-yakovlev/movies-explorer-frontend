import React from 'react';
import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import search from '../../images/searchForm/search_icon.svg'

const SearchForm = ({placeholder, type}) => {
  return (
    <div className={"searchForm"}>
      <div className="searchForm__container">
        <img src={search} alt="search" className="searchForm__icon"/>
        <input type={type} placeholder={placeholder} className={'searchForm__input'}/>
        <button className={"searchForm__button"}></button>
      </div>
      <div className="searchForm__vl-container">
        <div className="searchForm__vl"></div>
      </div>
      <div className={"searchForm__wrapper"}>
        <FilterCheckbox/>
        <span className={"searchForm__text"}>Короткометражки</span>
      </div>
    </div>
  )
}

export default SearchForm;
