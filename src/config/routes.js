import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Main from '../components/Main';
import App from '../components/App';
import About from '../components/About';

const Routes = (props) => (
  <Router {...props}>
    <Route path='/' component={Main}>
      <IndexRoute component={App} />
      <Route path="/about" component={About} />
    </Route>
  </Router>
);

export default Routes;