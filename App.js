import React from 'react';
import Store from './src/core';
import {MyStack} from './src/router';
import Layout from './src/components/Layout';

const App = () => {
  return (
    <Store>
      <Layout>
        <MyStack />
      </Layout>
    </Store>
  );
};

export default App;
