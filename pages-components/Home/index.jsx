import React from 'react';
import PageProvider from './context/provider';
import Main from './main';

const Home = () => {
  return (
    <PageProvider>
      <Main />
    </PageProvider>
  );
};

export default Home;
