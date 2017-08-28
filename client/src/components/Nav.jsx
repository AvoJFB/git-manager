import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="navbar navbar-default">
    <div className="container">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <Link className="navbar-brand" to="/">Git Manager</Link>
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li><Link to="/repos" replace>My Repos</Link></li>
          <li><Link to="/repos/create" replace>Create Repo</Link></li>
          <li><Link to="/repos/clone" replace>Clone Repo</Link></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="login" replace>Login</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Nav;
