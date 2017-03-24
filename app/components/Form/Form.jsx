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
    submitting,
  } = props;
  const wrapperClass = classnames({
    [style.wrapper]: true,
    [className]: !!props.className,
  });

  return (
    <section className={wrapperClass}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          className={style.input}
          name="wireNumber"
          type="number"
          component={Input}
          label="Wire Number Input"
          placeholder="Input Number"
        />
        <section className={style.buttons}>
          <Button
            className={style.submit}
            type="submit"
            disabled={submitting}
          >Get Colour</Button>
          <Button
            className={style.reset}
            type="button"
            onClick={reset}
            disabled={submitting}
          >Clear</Button>
        </section>
      </form>
    </section>
  );
}


Form.propTypes = {
  className: PropTypes.string,
  submitting: PropTypes.boolean,
  pristine: PropTypes.boolean,
  handleSubmit: PropTypes.func,
  reset: PropTypes.func
};

export default reduxForm({
  form: 'wireNumberPhaseColour'
})(Form);
