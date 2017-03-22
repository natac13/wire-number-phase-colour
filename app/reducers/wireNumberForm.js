import { Map } from 'immutable';
import { WIRE_NUMBER_INPUT } from '../constants/';

import findPhaseColour from '../utils/findPhaseColour.js';

const initailState = Map({
  wireNumber: undefined,
  phaseColour: '',
});

function reducer(state = initailState, action) {
  switch (action.type) {
    case WIRE_NUMBER_INPUT:
      return findPhaseColour(state, action.payload);
    default:
      return state;
  }
}

export default reducer;
