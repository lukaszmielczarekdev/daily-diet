import { combineReducers } from "redux";
import helpersReducer from "./helpers";
import authDataReducer from "./auth";

export default combineReducers({
  helpers: helpersReducer,
  authData: authDataReducer,
});
