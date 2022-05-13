import { combineReducers } from "redux";
import headerReducer from "./headerReducer";
const rootReducer = combineReducers({
  bgHeader: headerReducer,
});
export default rootReducer;
