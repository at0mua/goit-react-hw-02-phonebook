import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import phonebookActions from './PnhonebookActions';

const contacts = createReducer([], {
  [phonebookActions.addContactSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [phonebookActions.getContactsSuccess]: (state, { payload }) => [
    ...state,
    ...payload,
  ],
  [phonebookActions.deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [phonebookActions.changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [phonebookActions.addContactRequest]: () => true,
  [phonebookActions.addContactSuccess]: () => false,
  [phonebookActions.addContactError]: () => false,
  [phonebookActions.getContactsRequest]: () => true,
  [phonebookActions.getContactsSuccess]: () => false,
  [phonebookActions.getContactsError]: () => false,
  [phonebookActions.deleteContactRequest]: () => true,
  [phonebookActions.deleteContactSuccess]: () => false,
  [phonebookActions.deleteContactError]: () => false,
});

export default combineReducers({
  contacts,
  filter,
  loading,
});
