import React, { PropTypes }  from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import Main from '../components/Main';
import App from '../components/App';
import About from '../components/About';

const Routes = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" component={Main}>
        <IndexRoute component={App} />
        <Route path="/about" component={About} />
      </Route>
    </Router>
  </Provider>
);

Routes.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Routes;