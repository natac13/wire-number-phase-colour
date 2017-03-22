import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { Button } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form/immutable';
import Promise from 'bluebird';

import Input from '../Input/';

import style from './style.scss';
function onSubmit(values, _, component) {
  const { actions } = component;
  const wireNumber = values.get('wireNumber');
  actions.wireNumberInput(wireNumber);
  return new Promise((resolve, reject) => {
    return resolve();
  });
}

function Form(props) {
  const {
    className,
    handleSubmit,
    pristine,
    reset,
    submitting
  } = props;
  const wrapperClass = classnames({
    [style.wrapper]: true,
    [className]: !!props.className,
  });

  return (
    <section className={wrapperClass}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field name="wireNumber" component={Input} label="Wire Number" placeholder="Input Number" />
        <Button type="submit">Get Colour</Button>
      </form>
    </section>
  );
}


Form.propTypes = {
  className: PropTypes.string,
};

export default reduxForm({
  form: 'wireNumberPhaseColour'
})(Form);
