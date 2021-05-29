import React from 'react';
import Store from './src/core';
import {MyStack} from './src/router';

const App = () => {
  return (
    <Store>
      <MyStack />
    </Store>
  );
};

export default App;
