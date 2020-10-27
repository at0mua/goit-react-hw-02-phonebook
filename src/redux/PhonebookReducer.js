import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import phonebookActions from "./PnhonebookActions";

const contacts = createReducer([], {
  [phonebookActions.addContact]: (state, { payload }) => [...state, payload],
  [phonebookActions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [phonebookActions.fromLocalSorage]: (state, { payload }) => [
    ...state,
    ...payload,
  ],
});

const filter = createReducer("", {
  [phonebookActions.changeFilter]: (_, { payload }) => payload,
});

// const contactsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case phonebookActions.addContact.type: {
//       return [...state, payload];
//     }
//     case phonebookActions.deleteContact.type: {
//       return state.filter(({ id }) => id !== payload);
//     }
//     case phonebookActions.fromLocalSorage.type: {
//       return [...state, ...payload];
//     }
//     default:
//       return state;
//   }
// };

// const filterReducer = (state = "", { type, payload }) => {
//   switch (type) {
//     case phonebookActions.changeFilter.type:
//       return payload;

//     default:
//       return state;
//   }
// };

export default combineReducers({
  contacts,
  filter,
});
