import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contactsActions';
import contactsSelectors from '../../redux/contacts/contactsSelectors';
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
  filter: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = {
  onChangeFilter: contactsActions.filterContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactFilter);
