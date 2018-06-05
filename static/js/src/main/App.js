import 'babel-polyfill';
import React from 'react';

import { Header, Segment, Icon } from 'semantic-ui-react';
import ResponsiveContainer from './components/layouts/ResponsiveContainer';
import Footer from './components/Footer';
// import AccountIcon from 'load.png';
import './App.css'

const App = () => {
    return (
      <div>
      <ResponsiveContainer>
          <Segment style={{ padding: '8em 0em', maxWidth: '400px', textAlign: 'center', margin: "auto"}} vertical>
            <Header as='h3' > My Todo list </Header>
            <div className = "App" >
            <Header> Test content </Header>
            <Icon name="settings"></Icon>
            </div>
            </Segment>
        <Footer />
        </ResponsiveContainer>
        </div>
    )
  }

export default App;
