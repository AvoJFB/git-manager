import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';

const Content = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
  </Switch>
);

export default Content;
