import { useState } from 'react';

export default function useValidation(initialValues) {
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(initialValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({ ...prevState, [name]: value }));
    if (value === initialValues[name] && value !== '') {
      setIsValid(false);
      e.target.setCustomValidity('Введены теже данные');
    } else {
      e.target.setCustomValidity('');
    }
    if (e.target.validationMessage) {
      setErrors((prevState) => ({ ...prevState, [name]: e.target.validationMessage }));
      setIsValid(false);
    } else {
      setErrors((prevState) => ({ ...prevState, [name]: '' }));
    }
    if (e.target.closest('.form').checkValidity()) setIsValid(true);
  };

  return {
    values, isValid, errors, handleChange,
  };
}
