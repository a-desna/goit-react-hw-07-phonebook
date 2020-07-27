import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import contactsActions from './contactsActions';

const initialState = {
  contacts: {
    items: [],
    filter: '',
    isLoading: false,
  },
};

const addContact = (state, { payload }) => {
  return [...state, payload];
};

const deleteContact = (state, { payload }) => {
  return state.filter(contact => contact.id !== payload);
};

const items = createReducer(initialState.contacts.items, {
  [contactsActions.getContactSuccess]: (state, { payload }) => payload,
  [contactsActions.addContactSuccess]: addContact,
  [contactsActions.deleteContactSuccess]: deleteContact,
});

const filter = createReducer(initialState.contacts.filter, {
  [contactsActions.filterContacts]: (state, { payload }) => payload,
});

const loading = createReducer(initialState.contacts.isLoading, {
  [contactsActions.addContactRequest]: () => true,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.addContactFailure]: () => false,
  [contactsActions.getContactRequest]: () => true,
  [contactsActions.getContactSuccess]: () => false,
  [contactsActions.getContactFailure]: () => false,
  [contactsActions.deleteContactSuccess]: () => false,
  [contactsActions.deleteContactFailure]: () => false,
  [contactsActions.deleteContactRequest]: () => true,
});

export default combineReducers({
  items,
  filter,
  loading,
});
