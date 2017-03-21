import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Button } from 'react-bootstrap';


import style from './style.scss';

function Main(props) {
  const { appName, actions } = props;
  return (
    <div className={style.wrapper}>
    <h1> Welcome to {appName} </h1>

    </div>
  );
}

Main.propTypes = {
  appName: PropTypes.string,
  actions: PropTypes.object.isRequried,
};

export default Main;
