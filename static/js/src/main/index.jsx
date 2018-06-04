import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

import { AppContainer } from 'react-hot-loader';

import App from './components/App';

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('react-root')
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const MainMenu = require('./components/App').default;
    ReactDOM.render(
      <AppContainer>
        <App />
      </AppContainer>,
      document.getElementById('react-root')
    );
  });
}
