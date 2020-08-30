import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

import reducer from './reducer';
import initialState from './initial-state';
import { PageContext } from './context';

const PageProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { children } = props;
  return (
    <PageContext.Provider value={{ state, dispatch }}>
      {children}
    </PageContext.Provider>
  );
};

PageProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PageProvider;
