import { createAction } from '@reduxjs/toolkit';
import createId from '../../utils/createId';

const addContact = createAction('contacts/addContact', ({ name, number }) => ({
  payload: {
    id: createId(),
    name,
    number,
  },
}));

const deleteContact = createAction('contacts/deleteContact');

const filterContacts = createAction('contacts/filterContacts');

export default { addContact, deleteContact, filterContacts };
