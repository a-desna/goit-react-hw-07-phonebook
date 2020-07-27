import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts.items;

const getLoading = state => state.contacts.loading;

const getFilter = state => state.contacts.filter;

const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

const getContactById = createSelector(
  [getContacts, (state, contactId) => contactId],
  (contacts, contactId) => contacts.find(contact => contact.id === contactId),
);

export default {
  getContacts,
  getLoading,
  getFilter,
  getFilteredContacts,
  getContactById,
};
