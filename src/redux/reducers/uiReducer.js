import {
  UI_START_LOADING,
  UI_STOP_LOADING,
  UI_ERROR
} from '../types/uiTypes';

const initialState = {
  uiIsLoading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UI_START_LOADING:
      return {
        ...state,
        uiIsLoading: true
      };
    case UI_STOP_LOADING:
      return {
        ...state,
        uiIsLoading: false
      };
    case UI_ERROR:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};

export default reducer;
