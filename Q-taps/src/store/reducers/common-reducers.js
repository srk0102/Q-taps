import * as types from "../types/index";

const initialState = {
  startApp: false,
  isFetching: true,
  isLoggedIn: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.START_APP:
      return { ...state, startApp: true };
    case types.UPDATE_IS_FETCHING:
      return { ...state, isFetching: action.payload.isFetching };
    case types.TOKEN_INFO:
      return {
        ...state,
        tokenInfo: action.payload.tokenInfo,
        isLoggedIn: action.payload.isLoggedIn,
      };
    default:
      return state;
  }
};

export default reducer;
