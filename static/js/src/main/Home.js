import 'babel-polyfill';
import React from 'react';
import { Header, Segment } from 'semantic-ui-react';
import { Route, Link } from 'react-router-dom';

import './App.css';

const Home = () => {
  return (
      <div>
        <Segment style={{minHeight:"400px"}}>
          <Header>This is header</Header>
          <Link to='/reddit'>Reddit</Link>
        </Segment>
      </div>
    )
  }

export default Home;
