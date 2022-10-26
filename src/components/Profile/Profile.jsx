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
        <h2 className={"profile__title"}>Привет, Виталий!</h2>
        <div className="profile__input-container">
          <label htmlFor="name" className="profile__label">
            Имя
          </label>
          <input type="text" id={'name'} disabled={!isEditing} value={'Виталий'} className="profile__input"/>
        </div>
        <hr size={'1px'} color={'#E8E8E8'} width={'100%'} className={'profile__line'}/>
        <div className="profile__input-container">
          <label htmlFor="email" className="profile__label">
            E-mail
          </label>
          <input type="text" id={'email'} disabled={!isEditing} value={'pochta@yandex.ru'} className="profile__input"/>
        </div>
      </div>
      <div className="profile__button-container">
        {isEditing ?
          <>
            <FormButton>Сохранить</FormButton>
          </>
          :
          <>
            <button className="profile__button" onClick={handleEditing}>Редактировать</button>
            <button className="profile__button profile__button_color-red">Выйти из аккаунта</button>
          </>
        }
      </div>
    </div>
  )
}

export default Profile;
