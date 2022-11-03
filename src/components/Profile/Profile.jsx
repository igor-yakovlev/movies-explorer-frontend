import React, {useEffect, useState} from 'react';
import './Profile.css';
import FormButton from "../FormButton/FormButton";
import {CurrentUserContext} from "../../context/CurrentUserContext";
import ProfileInput from "./ProfileInput/ProfileInput";
import {useValidation} from "../../utils/useValidation";

const intialValues = {
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

const Profile = ({onUpdateUser, signOut}) => {
  const user = React.useContext(CurrentUserContext);
  const [values, setValues] = useState(intialValues)
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setValues({name: user.name, email: user.email})
  }, [user])

  const handleEditing = () => {
    setIsEditing(!isEditing);
  }

  const handleChange = ({target}) => {
    const {name, value} = target
    setValues(prevState => ({...prevState, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser(values.email, values.name)
  }

  const {errors, handleBlur, isValid} = useValidation();
  return (
    <form className="profile form" noValidate onSubmit={handleSubmit}>
      <div className="profile__wrapper">
        <h2 className={"profile__title"}>Привет, {user.name}!</h2>
        <ProfileInput label={'Имя'} type={'text'} disabled={!isEditing} name={'name'} value={values.name}
                      validConfig={validRegConfig.name} isValid={isValid} error={errors.name} onBlur={handleBlur}
                      onChange={handleChange}/>
        <hr size={'1px'} color={'#E8E8E8'} width={'100%'} className={'profile__line'}/>
        <ProfileInput label={'Email'} type={'email'} disabled={!isEditing} name={'email'} value={values.email}
                      validConfig={validRegConfig.email} isValid={isValid} error={errors.email} onBlur={handleBlur}
                      onChange={handleChange}/>
      </div>
      <div className="profile__button-container">
        {isEditing ?
          <>
            <span className="profile__error"></span>
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
