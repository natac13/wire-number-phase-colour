import { createAction } from 'redux-actions';
export * from './windowSize.js';

export { push } from 'react-router-redux';

import { SET_ERROR } from '../constants/';

const setError = createAction(SET_ERROR);

export {
  setError,
};

