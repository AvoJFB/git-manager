import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';
import Content from './Content';

const Root = () => (
  <BrowserRouter>
    <div>
      <Nav />
      <div className="container">
        <Content />
      </div>
    </div>
  </BrowserRouter>
);

export default Root;
