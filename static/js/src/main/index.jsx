import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

import App from './App';

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('react-root')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const MainMenu = require('./App').default;
    ReactDOM.render(
      <AppContainer>
        <App />
      </AppContainer>,
      document.getElementById('react-root')
    );
  });
}
