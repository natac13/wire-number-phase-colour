import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import axios from 'axios';

import App from '../containers/App/';
import Main from '../components/Main/';


export default function configureRoutes(history) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Main} />
      </Route>
    </Router>
  );
}
