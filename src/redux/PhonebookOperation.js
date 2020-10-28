import axios from 'axios';

import PnhonebookActions from './PnhonebookActions';

axios.defaults.baseURL = 'http://localhost:2000';

const addContact = (name, number) => dispatch => {
  dispatch(PnhonebookActions.addContactRequest());

  axios
    .post('/contacts', { name, number })
    .then(({ data }) => dispatch(PnhonebookActions.addContactSuccess(data)))
    .catch(error => dispatch(PnhonebookActions.addContactError(error)));
};

const getContacts = () => dispatch => {
  dispatch(PnhonebookActions.getContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(PnhonebookActions.getContactsSuccess(data)))
    .catch(error => dispatch(PnhonebookActions.getContactsError(error)));
};

const deleteContact = id => dispatch => {
  dispatch(PnhonebookActions.deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(PnhonebookActions.deleteContactSuccess(id)))
    .catch(error => dispatch(PnhonebookActions.deleteContactError(error)));
};

export default {
  addContact,
  getContacts,
  deleteContact,
};
