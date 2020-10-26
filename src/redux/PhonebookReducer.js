import { combineReducers } from "redux";

const contactsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "contacts/addContact": {
      return [...state, payload];
    }
    case "contacts/deleteContact": {
      return state.filter(({ id }) => id !== payload.id);
    }
    case "contacts/fromLocalSorage": {
      return [...state, ...payload.contacts];
    }
    default:
      return state;
  }
};

const filterReducer = (state = "", { type, payload }) => {
  switch (type) {
    case "contacs/change-filter":
      return payload.value;

    default:
      return state;
  }
};

export default combineReducers({
  filter: filterReducer,
  contacts: contactsReducer,
});
