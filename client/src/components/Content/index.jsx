import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/index';
import Login from '../Login/index';
import Register from '../Register/index';
import ReposPage from '../ReposPage/index';
import RepoPage from '../RepoPage/index';
import NewRepo from '../NewRepo/index';
import CloneRepo from '../CloneRepo/index';

const Content = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/repos" component={ReposPage} />
    <Route exact path="/repos/create" component={NewRepo} />
    <Route exact path="/repos/clone" component={CloneRepo} />
    <Route exact path="/repos/:name" component={RepoPage} />
  </Switch>
);

export default Content;
