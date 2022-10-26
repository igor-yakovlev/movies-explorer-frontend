import React, {useState} from 'react';
import './Profile.css';
import FormButton from "../FormButton/FormButton";

const Profile = ({}) => {
  const [isEditing, setIsEditing] = useState(false);
  const handleEditing = () => {
    setIsEditing(!isEditing);
  }
  return (
    <div className="profile">
      <div className="profile__wrapper">
        <h2 className={"profile__title"}>Привет, Игорь!</h2>
        <div className="profile__input-container">
          <label htmlFor="name" className="profile__label">
            Имя
          </label>
          <input type="text" id={'name'} disabled={!isEditing} value={'Игорь'} className="profile__input"/>
        </div>
        <hr size={'1px'} color={'#E8E8E8'} width={'100%'} className={'profile__line'}/>
        <div className="profile__input-container">
          <label htmlFor="email" className="profile__label">
            E-mail
          </label>
          <input type="text" id={'email'} disabled={!isEditing} value={'igor.yakovlev.95@yandex.ru'} className="profile__input"/>
        </div>
      </div>
      <div className="profile__button-container">
        {isEditing ?
          <>
            <span className="profile__error"></span>
            <FormButton>Сохранить</FormButton>
          </>
          :
          <>
            <button type={"button"} className="profile__button" onClick={handleEditing}>Редактировать</button>
            <button type={"button"} className="profile__button profile__button_color-red">Выйти из аккаунта</button>
          </>
        }
      </div>
    </div>
  )
}

export default Profile;
