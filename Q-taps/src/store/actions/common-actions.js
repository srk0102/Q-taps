import * as types from "../types";

const startApp = () => ({
  type: types.START_APP,
  payload: { startApp: true },
});

const isFetching = (isFetching) => ({
  type: types.UPDATE_IS_FETCHING, 
  payload: { isFetching: isFetching },
}); 
const tokenInfo = (tokenInfo, isLoggedIn) => ({
  type: types.TOKEN_INFO,
  payload: { tokenInfo: tokenInfo, isLoggedIn: isLoggedIn },
});
export { isFetching, tokenInfo, startApp };
