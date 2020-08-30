import React from 'react';
import PageProvider from './context/provider';
import usePageContext from './context/context';

const Home = () => {
  const { state, dispatch } = usePageContext();
  const { title } = state;
  return <div>{title}</div>;
};

export default Home;
