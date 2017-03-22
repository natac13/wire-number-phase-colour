import R from 'ramda';

const phaseSet = [
  'blue',
  'red',
  'red',
  'black',
  'black',
  'blue',
];

const getPhaseSetValue = R.modulo(R.__, 6);

function findPhaseColour(state, wireNumber) {
  console.log('findPhaseColour');
  console.log(state);
  const tmpState = state.set('wireNumber', wireNumber);
  console.log(tmpState);
  const phaseSetValue = getPhaseSetValue(wireNumber);
  console.log(phaseSetValue);

  return tmpState.set('colour', phaseSet[phaseSetValue]);
}

export default findPhaseColour;
