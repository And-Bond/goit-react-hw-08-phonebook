import rootReducer from "./rootReducer";
import { createStore, combineReducers } from "redux";

const rootReducerElements = combineReducers({
  contacts: rootReducer
})
console.log(rootReducerElements)
const store = createStore(rootReducerElements);
export default store;
