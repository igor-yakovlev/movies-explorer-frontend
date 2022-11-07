import React, {useMemo, useState} from 'react';
import './Profile.css';
import FormButton from "../FormButton/FormButton";
import {CurrentUserContext} from "../../context/CurrentUserContext";
import ProfileInput from "./ProfileInput/ProfileInput";
import {useValidation} from "../../utils/useValidation";
import Preloader from "../Preloader/Preloader";

const initialValues = {
  name: '',
  email: '',
}

const validRegConfig = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 10,
  },
  email: {
    required: true
  }
}

const Profile = ({onUpdateUser, signOut, isLoading}) => {
  const {name, email} = React.useContext(CurrentUserContext);
  const [isEditing, setIsEditing] = useState(false);

  useMemo(() => {
    initialValues.name = name;
    initialValues.email = email;
  }, [name, email])

  const handleEditing = () => {
    setIsEditing(!isEditing);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser(values.email, values.name)
    setIsEditing(false);
  }

  const {errors, handleChange, values, isValid} = useValidation(initialValues);

  if (isLoading) return <Preloader/>
  return (
    <form className="profile form" noValidate onSubmit={handleSubmit}>
      <div className="profile__wrapper">
        <h2 className={"profile__title"}>Привет, {name}!</h2>
        <ProfileInput label={'Имя'} type={'text'} disabled={!isEditing} name={'name'} value={values.name}
                      validConfig={validRegConfig.name} isValid={isValid} error={errors.name}
                      onChange={handleChange}/>
        <hr size={'1px'} color={'#E8E8E8'} width={'100%'} className={'profile__line'}/>
        <ProfileInput label={'Email'} type={'email'} disabled={!isEditing} name={'email'} value={values.email}
                      validConfig={validRegConfig.email} isValid={isValid} error={errors.email}
                      onChange={handleChange}/>
      </div>
      <div className="profile__button-container">
        {isEditing ?
          <>
            <span className="profile__error">{errors.name || errors.email}</span>
            <FormButton disabled={!isValid}>Сохранить</FormButton>
          </>
          :
          <>
            <button type={"button"} className="profile__button" onClick={handleEditing}>Редактировать</button>
            <button type={"button"} className="profile__button profile__button_color-red" onClick={signOut}>Выйти из аккаунта</button>
          </>
        }
      </div>
    </form>
  )
}

export default Profile;
