import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.phonebook.contacts;

const getFilter = state => state.phonebook.filter;

const getLoading = state => state.phonebook.loading;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter),
    );
  },
);

const getContactById = createSelector(
  [(state, contactId) => contactId, getContacts],
  (contactId, contacts) => contacts.find(contact => contact.id === contactId),
);

export default {
  getContacts,
  getFilter,
  getLoading,
  getVisibleContacts,
  getContactById,
};
