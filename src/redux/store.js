// import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import PhonebookReducer from "./PhonebookReducer";

// const rootReducer = combineReducers({
//   phonebook: PhonebookReducer,
// });

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const store = configureStore({
  reducer: { phonebook: PhonebookReducer },
});

export default store;
