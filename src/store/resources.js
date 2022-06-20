import { combineReducers } from "redux";
import productsReducer from "./products";
import mealsReducer from "./meals";
import diariesReducer from "./diaries";

export default combineReducers({
  products: productsReducer,
  meals: mealsReducer,
  diaries: diariesReducer,
});
