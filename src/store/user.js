import { combineReducers } from "redux";
import userItemsReducer from "./userItems";
import authDataReducer from "./auth";

export default combineReducers({
  userItems: userItemsReducer,
  authData: authDataReducer,
});
