import { combineReducers } from "redux";
import common from "./common-reducers";
// import agency from "./agency";
// import person from "./person";
// import gang from "./gang";
// import intel from "./intelligence"
import user from "./user"

export default combineReducers({
  common,
  
  user,
  
});
