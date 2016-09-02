import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';

import { Router, browserHistory } from 'react-router';
import routes from './routes';
require('font-awesome/css/font-awesome.css');


// entry point that just renders app
// could be used for routing at some point
ReactDOM.render(
  <Router history={browserHistory} routes={routes} />
  , document.getElementById('main'));
