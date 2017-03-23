import { Map } from 'immutable';
import { RESIZE } from '../constants/';


const initialState = Map({
  height: window.innerHeight,
  width: window.innerWidth,
});

function update(state, payload) {
  const tmp = state.set('height', payload.height);
  return tmp.set('width', payload.width);
}

function windowSize(state = initialState, action) {
  switch (action.type) {
    case RESIZE:
      return update(state, action.payload);
    default:
      return state;
  }
}

export default windowSize;
