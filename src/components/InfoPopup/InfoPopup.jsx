import React, { useEffect } from 'react';
import './InfoPopup.css';
import popupSuccess from '../../images/popup/popup__success.svg';
import popupFailure from '../../images/popup/popup__failure.svg';

const popupMap = {
  success: {
    src: popupSuccess,
    text: 'Вы успешно зарегистрировались!',
    alt: 'Успешно',
  },
  failure: {
    src: popupFailure,
    text: 'Что-то пошло не так! Попробуйте ещё раз.',
    alt: 'Неудача',
  },
  successChangeData: {
    src: popupSuccess,
    text: 'Данные успешно изменены',
    alt: 'Успешно',
  },
  failureAddLike: {
    src: popupFailure,
    text: 'При постановке лайка произошла ошибка',
    alt: 'Неудача',
  },
};

function getPopup(type) {
  return popupMap[type];
}

function InfoPopup({ settings, onClose }) {
  const handleCloseEsc = ({ key }) => {
    if (key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    if (onClose) {
      document.addEventListener('keydown', handleCloseEsc);
    }
    return () => {
      document.removeEventListener('keydown', handleCloseEsc);
    };
  }, [onClose]);

  return (
    <div className={`popup  ${settings.popupOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <img
          src={getPopup(settings.popupType).src}
          alt={getPopup(settings.popupType).alt}
          className="popup__image"
        />
        <h2 className="popup__title">
          {getPopup(settings.popupType).text}
        </h2>
        <button
          aria-label="Close popup"
          type="button"
          className="popup__close-cross"
          onClick={onClose}
        />
      </div>
    </div>
  );
}

export default InfoPopup;
