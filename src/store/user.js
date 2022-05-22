import { combineReducers } from "redux";
import userItemsReducer from "./userItems";
import userProfileReducer from "./userProfile";
import authDataReducer from "./auth";

export default combineReducers({
  userItems: userItemsReducer,
  userProfile: userProfileReducer,
  authData: authDataReducer,
});
