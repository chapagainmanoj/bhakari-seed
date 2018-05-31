import 'babel-polyfill';
import React from "react";
import {Button, Header} from 'semantic-ui-react';

const HelloWorld = () => {
  return (
    <div>
      <h1>Hello React!</h1>
      <Header>Hey</Header>
      <Button>this is all i need</Button>
    </div>
  );
};

export default HelloWorld;
