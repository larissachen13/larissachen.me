import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Home from './components/home';
import Welcome from './components/welcome';

export default(
  <Route path="/" component={Home}>
    <IndexRoute component={Welcome} />
  </Route>
);
