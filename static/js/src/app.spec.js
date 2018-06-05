import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-readux';
import reducer from './reducers'
import ReactDOM from 'react-dom'
import App from './App';

// import expect from 'expect';

describe('Application Render test', () => {
  it('works', () => {
    const store = createStore(reducer);
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><App /></Provider>, div);
  })
})
