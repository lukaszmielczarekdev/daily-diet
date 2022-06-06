import { combineReducers } from "redux";
import userReducer from "./user";
import resourcesReducer from "./resources";

export default combineReducers({
  user: userReducer,
  resources: resourcesReducer,
});
