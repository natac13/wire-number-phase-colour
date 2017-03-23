import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../../actions';
import { pure, compose } from 'recompose';

function App(props) {
  const { actions } = props;
  window.onresize = () => {
    actions.resize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  console.log(props);
  const childrenWithStoreProp = React.Children.map(
    props.children,
    (child) => React.cloneElement(child, { ...props })
  );
  return (
    <div>
      {childrenWithStoreProp}
    </div>
  );
}

App.propTypes = {
  routing: ImmutablePropTypes.map.isRequired,
  actions: PropTypes.object.isRequired,
  appName: PropTypes.string.isRequired,
  children: PropTypes.object,
  location: PropTypes.object.isRequired,
};

//  Redux Connection
function mapStateToProps(state) {
  return {
    appName: 'WireNumberPhaseColour',
    routing: state.get('routing'),
    windowSize: state.get('windowSize'),
    wireNumberForm: state.get('wireNumberForm'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ActionCreators, dispatch),
    dispatch,
  };
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  pure,
)(App);
