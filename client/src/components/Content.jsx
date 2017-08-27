import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import ReposPage from './ReposPage';

const Content = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/repos" component={ReposPage} />
  </Switch>
);

export default Content;
