import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contactsOperations';
import contactsSelectors from '../../redux/contacts/contactsSelectors';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../../styles/Phonebook.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  notify = message => toast.warn(message);

  handleSubmit = e => {
    e.preventDefault();
    if (
      e.target.elements.name.value === '' ||
      e.target.elements.number.value === ''
    ) {
      this.notify('Not all data entered !');
      return;
    }
    const { contacts } = this.props;
    if (contacts.some(contact => contact.name === this.state.name)) {
      this.notify(`"${this.state.name}" is already in contacts !`);
      return;
    }
    this.props.onAddContact(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <p>Name contact</p>
        <input
          type="text"
          name="name"
          placeholder="Name.."
          value={name}
          onChange={this.handleInputChange}
        />
        <p>Number contact</p>
        <input
          type="text"
          name="number"
          placeholder="Number.."
          value={number}
          onChange={this.handleInputChange}
        />
        <button className={styles.formBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = {
  onAddContact: contactsOperations.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
