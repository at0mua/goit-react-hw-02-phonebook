import { configureStore } from '@reduxjs/toolkit';
import PhonebookReducer from './Phonebook/PhonebookReducer';

const store = configureStore({
  reducer: { phonebook: PhonebookReducer },
});

export default store;
