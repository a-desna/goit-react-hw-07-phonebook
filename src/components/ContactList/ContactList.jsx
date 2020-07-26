import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import styles from '../../styles/Phonebook.module.css';

function ContactList({ contacts }) {
  return (
    <ul className={styles.list}>
      {contacts.map(({ id }) => (
        <ContactItem key={id} id={id} />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ).isRequired,
};

const mapStateToProps = state => {
  const { items, filter } = state.contacts;
  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
  return {
    contacts: filteredContacts,
  };
};

export default connect(mapStateToProps)(ContactList);
