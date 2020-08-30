import React from 'react';

export const PageContext = React.createContext();
PageContext.displayName = 'PageContext';

const usePageContext = () => {
  const context = React.useContext(PageContext);
  if (context == null) {
    console.error('use Context within provider block', context);
  }

  return context;
};

export default usePageContext;
