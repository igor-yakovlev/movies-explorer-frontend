import React, {useState} from 'react';
import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import search from '../../images/searchForm/search_icon.svg'

const SearchForm = ({placeholder, type, onSubmit}) => {
  const [searchString, setSearchString] = useState('');

  const handleChange = ({target}) => {
    const {value} = target;
    setSearchString(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchString)
  }

  return (
    <form className={"searchForm"} onSubmit={handleSubmit}>
      <div className="searchForm__container">
        <img src={search} alt="Search" className="searchForm__icon"/>
        <input required={true} type={type} placeholder={placeholder} value={searchString} onChange={handleChange} className={'searchForm__input'}/>
        <button className={"searchForm__button"}></button>
      </div>
      <div className="searchForm__vl-container">
        <div className="searchForm__vl"></div>
      </div>
      <div className={"searchForm__wrapper"}>
        <FilterCheckbox/>
        <span className={"searchForm__text"}>Короткометражки</span>
      </div>
    </form>
  )
}

export default SearchForm;
