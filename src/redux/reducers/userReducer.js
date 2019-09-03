import { SIGN_IN } from '../types/authTypes';

const initialState = {
  user: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        user: {}
      };
    default:
      return state;
  }
};

export default reducer;
