/* eslint-disable import/prefer-default-export */

export const isFieldValid = ({valid, pristine, aggressive}) =>
  valid || (pristine && !aggressive);

// eslint-disable-next-line max-len, no-useless-escape
const emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const numbersRegexp = /^\d+$/;

export const validateNumber = password => {
  if (password && password.length >= 8) {
    return undefined;
  }

  return 'Введите корректный пароль';
};

export const validatePromocode = code => {
  if (code && code.length === 5) {
    return undefined;
  }

  return 'Введите корректный промокод';
};

export const validateUserEmail = value => {
  if (
    numbersRegexp.test(String(value).toLowerCase()) ||
    emailRegexp.test(String(value).toLowerCase())
  ) {
    return undefined;
  }
  return 'Enter valid e-mail or phone number';
};

export const validateText = text => {
  if (text && text.trim().length > 3) {
    return undefined;
  }

  return 'Обязательное поле';
};
