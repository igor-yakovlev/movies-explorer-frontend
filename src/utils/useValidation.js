import React, {useState} from "react";
import {CurrentUserContext} from "../context/CurrentUserContext";

export function useValidation() {
  const user = React.useContext(CurrentUserContext);

  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({});
  const handleBlur = ({target}) => {
    const {validationMessage, name} = target;
    if (validationMessage) {
      setErrors(prevState => ({...prevState, [name]: validationMessage}));
      setIsValid(false)
    } else  {
      setErrors(prevState => ({...prevState, [name]: ''}))
    }
    if (target.closest('.form').checkValidity()) setIsValid(true);
  }

  return {isValid, errors, handleBlur}
}
