import { combineReducers } from "redux";
import themeReducer from "./theme/themeReducer"
import likedReducer from "./liked/likedReducer"

const combineReducer = combineReducers;

const rootReducer = combineReducer({
  theme: themeReducer,
  liked: likedReducer,
})

export default rootReducer;