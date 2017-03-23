import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';

import routing from './routing.js';
import windowSize from './windowSize.js';
import wireNumberForm from './wireNumberForm.js';

const rootReducer = combineReducers(Object.assign(
  {},
  {
    routing,
    windowSize,
    form,
    wireNumberForm,
  },
));

export default rootReducer;
