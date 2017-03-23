import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

import style from './style.scss';

function Input(props) {
  const {
    input,
    label,
    type,
    meta: { error, warning, touched },
  } = props;

  const wrapperClass = classnames({
    [style.wrapper]: true,
    [props.className]: !!props.className,
  });

  // validation state of the input component
  const validationState = touched && (error && 'error') || (warning && 'warning') || null;
  let message;
  if (touched && (error || warning)) {
    message = <span className="help-block">{ error || warning }</span>;
  }

  return (
    <section className={wrapperClass}>
      <FormGroup controlId={input.name} validationState={validationState}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl
          type={type}
          { ...input }
          { ...props }
        />
        <FormControl.Feedback />
        { message }
      </FormGroup>
    </section>
  );
}

Input.propTypes = {
  className: PropTypes.string,
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
};

export default Input;
