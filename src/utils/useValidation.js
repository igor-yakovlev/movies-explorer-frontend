import React, {useState} from "react";

export function useValidation(initialValues) {
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(initialValues);
  const handleChange = ({target}) => {
    const {validationMessage, name, value, setCustomValidity} = target;
    setValues(prevState => ({...prevState, [name]: value}))
    if (value === initialValues[name]) {
      setIsValid(false);
      setErrors(prevState => ({...prevState, [name]: 'Введены теже данные'}))
      setCustomValidity('Введены теже данные');
    }
    if (validationMessage) {
      setErrors(prevState => ({...prevState, [name]: validationMessage}));
      setIsValid(false)
    } else {
      setErrors(prevState => ({...prevState, [name]: ''}))
    }
    if (target.closest('.form').checkValidity()) setIsValid(true);
  }

  return {values, isValid, errors, handleChange}
}
