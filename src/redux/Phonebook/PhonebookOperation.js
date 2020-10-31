import axios from 'axios';

import { PhonebookActions } from './';

// axios.defaults.baseURL = 'http://localhost:2000';

const addContact = (name, number) => dispatch => {
  dispatch(PhonebookActions.addContactRequest());

  axios
    .post('/contacts', { name, number })
    .then(({ data }) => dispatch(PhonebookActions.addContactSuccess(data)))
    .catch(error => dispatch(PhonebookActions.addContactError(error)));
};

const getContacts = () => dispatch => {
  dispatch(PhonebookActions.getContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(PhonebookActions.getContactsSuccess(data)))
    .catch(error => dispatch(PhonebookActions.getContactsError(error)));
};

const deleteContact = id => dispatch => {
  dispatch(PhonebookActions.deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(PhonebookActions.deleteContactSuccess(id)))
    .catch(error => dispatch(PhonebookActions.deleteContactError(error)));
};

export default {
  addContact,
  getContacts,
  deleteContact,
};
