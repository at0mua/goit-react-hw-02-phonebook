import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { PhonebookActions } from './';

const contacts = createReducer([], {
  [PhonebookActions.addContactSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [PhonebookActions.getContactsSuccess]: (state, { payload }) => [
    ...state,
    ...payload,
  ],
  [PhonebookActions.deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [PhonebookActions.changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [PhonebookActions.addContactRequest]: () => true,
  [PhonebookActions.addContactSuccess]: () => false,
  [PhonebookActions.addContactError]: () => false,
  [PhonebookActions.getContactsRequest]: () => true,
  [PhonebookActions.getContactsSuccess]: () => false,
  [PhonebookActions.getContactsError]: () => false,
  [PhonebookActions.deleteContactRequest]: () => true,
  [PhonebookActions.deleteContactSuccess]: () => false,
  [PhonebookActions.deleteContactError]: () => false,
});

export default combineReducers({
  contacts,
  filter,
  loading,
});
