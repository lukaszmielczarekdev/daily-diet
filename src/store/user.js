import { combineReducers } from "redux";
import userItemsReducer from "./userItems";
import userProfileReducer from "./userProfile";

export default combineReducers({
  userItems: userItemsReducer,
  userProfile: userProfileReducer,
});
