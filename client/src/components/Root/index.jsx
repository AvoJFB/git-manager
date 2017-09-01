import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from '../Nav/index';
import Content from '../Content/index';

export default () => (
  <BrowserRouter>
    <div className="main-container">
      <Nav />
      <div className="container">
        <Content />
      </div>
    </div>
  </BrowserRouter>
);
