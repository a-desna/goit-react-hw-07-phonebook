import { createAction } from '@reduxjs/toolkit';

const addContactRequest = createAction('contacts/addRequest');
const addContactSuccess = createAction('contacts/addSuccess');
const addContactFailure = createAction('contacts/addFailure');

const getContactRequest = createAction('contacts/getRequest');
const getContactSuccess = createAction('contacts/getSuccess');
const getContactFailure = createAction('contacts/getFailure');

const deleteContactRequest = createAction('contacts/deleteRequest');
const deleteContactSuccess = createAction('contacts/deleteSuccess');
const deleteContactFailure = createAction('contacts/deleteFailure');

const filterContacts = createAction('contacts/filterContacts');

export default {
  addContactRequest,
  addContactSuccess,
  addContactFailure,
  getContactRequest,
  getContactSuccess,
  getContactFailure,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactFailure,
  filterContacts,
};
