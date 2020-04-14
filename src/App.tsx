import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import Routes from './routes';

// Global style
// eslint-disable-next-line
createGlobalStyle`
  body {
    margin: 0;
    background: #F5F5F5;
    font-family:"Open Sans", Arial, sans-serif;
  }
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
