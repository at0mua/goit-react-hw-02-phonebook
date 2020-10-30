import { configureStore } from '@reduxjs/toolkit';
import PhonebookReducer from './PhonebookReducer';

const store = configureStore({
  reducer: { phonebook: PhonebookReducer },
});

export default store;
