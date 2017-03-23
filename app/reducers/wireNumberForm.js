import { Map } from 'immutable';
import { WIRE_NUMBER_INPUT } from '../constants/';
import { actionTypes } from 'redux-form/immutable';

import findPhaseColour from '../utils/findPhaseColour.js';

const initialState = Map({
  wireNumber: undefined,
  phaseColour: '',
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case WIRE_NUMBER_INPUT:
      return findPhaseColour(state, action.payload);
    case actionTypes.RESET:
      return initialState;
    default:
      return state;
  }
}

export default reducer;
