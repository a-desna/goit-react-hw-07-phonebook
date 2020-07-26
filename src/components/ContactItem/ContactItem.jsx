import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contactsActions';
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
  const { items } = state.contacts;
  const contact = items.find(contact => contact.id === ownProps.id);

  return {
    ...contact,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDelete: () => dispatch(contactsActions.deleteContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
