import { combineReducers } from "redux";
import themeReducer from "./theme/themeReducer"
import likedReducer from "./liked/likedReducer"
import authReducer from "./auth/authReducer";

const combineReducer = combineReducers;

const rootReducer = combineReducer({
  theme: themeReducer,
  liked: likedReducer,
  auth: authReducer,
})

export default rootReducer;