import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import contactsActions from './contactsActions';

const initialState = {
  contacts: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },
};

const addContact = (state, { payload }) => {
  return [...state, payload];
};

const deleteContact = (state, { payload }) => {
  return state.filter(contact => contact.id !== payload);
};

const items = createReducer(initialState.contacts.items, {
  [contactsActions.addContact]: addContact,
  [contactsActions.deleteContact]: deleteContact,
});

const filter = createReducer('', {
  [contactsActions.filterContacts]: (state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
