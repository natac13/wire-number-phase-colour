import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Button } from 'react-bootstrap';

import Form from '../Form/';
import Display from '../Display/';
import style from './style.scss';

function Main(props) {
  const { appName, actions, wireNumberForm } = props;
  return (
    <div className={style.wrapper}>
    <h1> Welcome to {appName} </h1>
      <Form actions={actions} />
      <Display wireNumberForm={wireNumberForm} />
    </div>
  );
}

Main.propTypes = {
  appName: PropTypes.string,
  actions: PropTypes.object.isRequried,
  wireNumberForm: ImmutablePropTypes.map.isRequried,
};

export default Main;
