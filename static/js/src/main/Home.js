import 'babel-polyfill';
import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

import './App.css';

const Home = () => {
  return (
      <div>
        <Segment style={{minHeight:"400px"}}>
          <Header>This is header</Header>
        </Segment>
      </div>
    )
  }

export default Home;
