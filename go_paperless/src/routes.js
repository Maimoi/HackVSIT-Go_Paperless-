import React from 'react';
import { Route } from 'react-router';

/**
 * Import all page components here
 */
import App from './App';
import List from './lists';
import Notice from './notice';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={App}>
    <Route path="/list" component={List} />
    <Route path="/notice" component={Notice} />
  </Route>
);