import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import reducer from './reducers'

import 'semantic-ui-css/semantic.min.css';
import './index.css';

import App from './App';

import configureStore from './configureStore';
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <AppContainer>
      <App />
    </AppContainer>
  </Provider>,
  document.getElementById('react-root')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const MainMenu = require('./App').default;
    ReactDOM.render(
      <Provider store={store}>
        <AppContainer>
          <App />
        </AppContainer>
      </Provider>,
      document.getElementById('react-root')
    );
  });
}
