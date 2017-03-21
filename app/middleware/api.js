import axios from 'axios';
import { FURTHER_STEPS_CREATE } from '../constants';
import { setError } from '../actions/';

export const CALL_API = Symbol('Call API');


// Api Middleware itself
export default ({ dispatch, getState }) => (next) => (action) => {
  const callAPI = action[CALL_API];

  // pass to next middleware if normal action and not a CALL_API action
  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  const { type } = action;
  const { payload } = callAPI;

  if (type === FURTHER_STEPS_CREATE) {
    const localAction = { type, payload };

  }


  return next(action);
};
