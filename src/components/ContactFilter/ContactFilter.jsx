import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contactsActions';
import styles from '../../styles/Phonebook.module.css';

function ContactFilter({ filter, onChangeFilter }) {
  return (
    <div className={styles.filterForm}>
      <label>
        <p>Find contact by name</p>
        <input
          type="text"
          value={filter}
          onChange={e => onChangeFilter(e.target.value)}
        />
      </label>
    </div>
  );
}

ContactFilter.propTypes = {
  filter: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = {
  onChangeFilter: contactsActions.filterContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactFilter);
