import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';

import routing from './routing.js';
import windowSize from './windowSize.js';


const rootReducer = combineReducers(Object.assign(
  {},
  {
    routing,
    windowSize,
    form,
  },
));

export default rootReducer;
