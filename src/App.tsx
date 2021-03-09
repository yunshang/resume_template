import React from 'react';
import { Provider } from 'react-redux';
// import logo from './logo.svg';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import Routes from './routes';
import store from './store';

// Global style
// eslint-disable-next-line
createGlobalStyle`
  body {
    margin: 0;
    background: #F5F5F5;
    font-family:"Open Sans", Arial, sans-serif;
  }
`;

export default () => (
  <Provider store={store} >
    <Routes />
  </Provider>
);
