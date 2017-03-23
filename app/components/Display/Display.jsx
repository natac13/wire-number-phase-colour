import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import classnames from 'classnames';

import style from './style.scss';

function Display(props) {
  const { className, wireNumberForm } = props;
  const phaseColour = wireNumberForm.get('phaseColour');

  // styling classes
  const wrapperClass = classnames({
    [style.wrapper]: true,
    [className]: !!props.className,
  });
  const phaseColourClass = classnames({
    [style.output]: true,
    [style[phaseColour]]: !!phaseColour,
  });


  return (
    <section className={wrapperClass}>
    <p className={phaseColourClass}>{phaseColour}</p>
    </section>
  );
}

Display.propTypes = {
  className: PropTypes.string,
  wireNumberForm: ImmutablePropTypes.map.isRequired,
};

export default Display;
