import 'babel-polyfill';
import React from 'react';

import { Header, Segment } from 'semantic-ui-react';
import ResponsiveContainer from './components/layouts/ResponsiveContainer';
import Footer from './components/Footer';
import AsyncApp from './containers/AsyncApp';
// import AccountIcon from 'load.png';
import './App.css';

const App = () => {
  return (
      <div>
      <ResponsiveContainer>
          <Segment style={{ padding: '8em 0em', maxWidth: '400px', textAlign: 'center', margin: "auto"}} vertical>
            <div className = "App" >
              <AsyncApp />
            </div>
            </Segment>
        <Footer />
        </ResponsiveContainer>
        </div>
    )
  }

export default App;
