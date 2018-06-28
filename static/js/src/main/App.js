import 'babel-polyfill';
import React from 'react';
import {
  Route,
  HashRouter
} from 'react-router-dom';

import { Header, Segment } from 'semantic-ui-react';
import ResponsiveContainer from './components/layouts/ResponsiveContainer';
import Footer from './components/Footer';
import Home from './Home';
import AsyncApp from './containers/AsyncApp';
// import AccountIcon from 'load.png';
import './App.css';

const App = () => {
  return (
    <HashRouter>
      <ResponsiveContainer>
      <Segment style={{ padding: '8em 0em', maxWidth: '800px', textAlign: 'center', margin: 'auto'}} vertical>
        <div className = 'App' >
            <Route path='/' exact component={Home} />
            <Route path='/reddit' component={AsyncApp} />
        </div>
        </Segment>
      </ResponsiveContainer>
      </HashRouter>
    )
  }

export default App;
