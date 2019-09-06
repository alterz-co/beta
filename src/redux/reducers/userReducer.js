import { SIGN_IN, SIGN_UP, FETCH_USER, SIGN_OUT } from '../types/authTypes';

const initialState = {
  user: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        user: action.user
      };
    case SIGN_UP:
      return {
        ...state,
        user: action.user
      };
    case FETCH_USER:
      return {
        ...state,
        user: action.user
      };
    case SIGN_OUT:
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
};

export default reducer;
