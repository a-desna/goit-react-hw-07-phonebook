import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import contactsSelectors from '../../redux/contacts/contactsSelectors';
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
      id: PropTypes.number,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ).isRequired,
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getFilteredContacts(state),
});

export default connect(mapStateToProps)(ContactList);
