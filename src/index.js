import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import someFn from './utils/someFn.js';
import './index.css';

someFn();

ReactDOM.render(<App />, document.getElementById('root'));
