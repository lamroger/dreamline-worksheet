import React from 'react';
import { render }from 'react-dom';
import { createStore } from 'redux'
import reducer from './reducers'

import injectTapEventPlugin from 'react-tap-event-plugin';

import Routes from './config/routes';
import './index.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = createStore(reducer)

render(
  <Routes store={store}/>,
  document.getElementById('root')
);
