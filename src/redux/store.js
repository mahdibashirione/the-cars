import { createStore } from "redux";
import rootReducer from "./rootReducer";

const storeCreator = createStore;

const store = storeCreator(rootReducer)

export default store;