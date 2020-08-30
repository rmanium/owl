export const UPDATE_PAGE_SETTINGS = 'UPDATE_PAGE_SETTINGS';

const formsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_PAGE_SETTINGS: {
      const updatedSettings = action.payload;
      return {
        ...state,
        ...updatedSettings,
      };
    }
    default:
      throw new Error('undefined action');
  }
};

export default formsReducer;
