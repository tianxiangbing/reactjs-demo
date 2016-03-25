import './favicon.ico';
import './index.html';
import 'babel-core/polyfill';
import 'normalize.css/normalize.css';
import './scss/app.scss';

import React from 'react';
//import App from './components/App/App';
import Test from './components/Test/Test';
React.render(
  <Test />,
  document.getElementById('app')
);
