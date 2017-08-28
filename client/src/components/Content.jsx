import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import ReposPage from './ReposPage';
import NewRepo from './NewRepo';
import CloneRepo from './CloneRepo';

const Content = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/repos" component={ReposPage} />
    <Route exact path="/repos/create" replace component={NewRepo} />
    <Route exact path="/repos/clone" replace component={CloneRepo} />
  </Switch>
);

export default Content;
