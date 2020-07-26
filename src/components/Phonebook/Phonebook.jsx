import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import ContactFilter from '../ContactFilter/ContactFilter';

import { ToastContainer } from 'react-toastify';
import styles from '../../styles/Phonebook.module.css';

function Phonebook({ contacts }) {
  return (
    <div className={styles.phonebook}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.title}>Contacts</h2>
      {contacts.length >= 2 && <ContactFilter />}
      {contacts.length > 0 && <ContactList />}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

Phonebook.propTypes = {
  contacts: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

export default connect(mapStateToProps)(Phonebook);
