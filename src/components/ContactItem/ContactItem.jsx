import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsSelectors from '../../redux/contacts/contactsSelectors';
import contactsOperations from '../../redux/contacts/contactsOperations';
import styles from '../../styles/Phonebook.module.css';

function ContactItem({ name, number, onDelete }) {
  return (
    <li className={styles.listItem}>
      <span className={styles.listItemName}>{name}:</span>
      <span className={styles.listItemNumber}>{number}</span>
      <button className={styles.listItemBtn} onClick={onDelete}>
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const contact = contactsSelectors.getContactById(state, ownProps.id);
  return {
    ...contact,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDelete: () => dispatch(contactsOperations.deleteContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
