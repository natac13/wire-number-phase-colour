import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Button } from 'react-bootstrap';
import classnames from 'classnames';

import Header from '../Header/';
import Form from '../Form/';
import Display from '../Display/';
import style from './style.scss';

function Main(props) {
  const { appName, actions, wireNumberForm } = props;

  const wrapperClass = classnames({
    [style.wrapper]: true,
  });

  return (
    <div className={wrapperClass}>
      <Header appName={appName} push={actions.push} />
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
