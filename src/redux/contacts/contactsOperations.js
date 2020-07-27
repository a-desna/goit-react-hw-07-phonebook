import axios from 'axios';
import contactsActions from './contactsActions';

axios.defaults.baseURL = 'http://localhost:8080';

const addContact = ({ name, number }) => dispatch => {
  dispatch(contactsActions.addContactRequest());

  axios
    .post('/contacts', { name, number })
    .then(({ data }) => dispatch(contactsActions.addContactSuccess(data)))
    .catch(error => dispatch(contactsActions.addContactFailure(error)));
};

const getContact = () => dispatch => {
  dispatch(contactsActions.getContactRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(contactsActions.getContactSuccess(data)))
    .catch(error => dispatch(contactsActions.getContactFailure(error)));
};

const deleteContact = id => dispatch => {
  dispatch(contactsActions.deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactsActions.deleteContactSuccess(id)))
    .catch(error => dispatch(contactsActions.deleteContactFailure(error)));
};

export default {
  addContact,
  getContact,
  deleteContact,
};
