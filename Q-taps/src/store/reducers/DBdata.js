import * as types from "../types/index";
import data from '../../dbDate.json'

const initialState = {
  dbDate:data
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DB_DATA:
      return { ...state };
   
    default:
      return state;
  }
};

export default reducer;
