import R from 'ramda';

export const ADD_TOAST_MESSAGE = 'ADD_TOAST_MESSAGE';
export const REMOVE_TOAST_MESSAGE = 'REMOVE_TOAST_MESSAGE';

const duration = 3000;

let lastText = null;

export const removeMessage = () => ({
  type: REMOVE_TOAST_MESSAGE,
});

const addMessage = R.curry((styles, text, dispatch) => {
  setTimeout(() => {
    if (text === lastText) {
      dispatch(removeMessage());
    }
  }, duration);

  lastText = text;

  dispatch({
    type: ADD_TOAST_MESSAGE,
    payload: {
      text,
      styles,
      duration,
    },
  });
});

export const addInfoMessage = addMessage('info');
export const addSuccessMessage = addMessage('success');
export const addWarningMessage = addMessage('warning');
export const addErrorMessage = addMessage('error');

export const toastMessage = (state = null, {type, payload}) => {
  switch (type) {
    case ADD_TOAST_MESSAGE:
      return payload;
    case REMOVE_TOAST_MESSAGE:
      return null;
    default:
      return state;
  }
};
