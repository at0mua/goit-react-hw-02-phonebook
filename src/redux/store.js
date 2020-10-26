import { createStore, combineReducers } from "redux";
import PhonebookReducer from "./PhonebookReducer";

const rootReducer = combineReducers({
  phonebook: PhonebookReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
