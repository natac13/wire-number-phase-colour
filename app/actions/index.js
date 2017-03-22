// export action creators from rest of directory
export * from './windowSize.js';
export * from './formCreators.js';

export { push } from 'react-router-redux';

import { createAction } from 'redux-actions';
import { SET_ERROR } from '../constants/';

const setError = createAction(SET_ERROR);

export {
  setError,
};

