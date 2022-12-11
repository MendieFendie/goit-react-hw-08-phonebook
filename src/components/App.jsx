import React from 'react';
import { nanoid } from 'nanoid';
import ContactsList from './ContactList/ContactsList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
export default class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  filterChange = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  addContact = data => {
    const user = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };
    const normalizedName = data.name.toLowerCase();
    const checkUsers = this.state.contacts.map(contact =>
      contact.name.toLowerCase()
    );
    if (checkUsers.includes(normalizedName)) {
      return alert(`${user.name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [user, ...prevState.contacts],
      }));
    }
  };

  removeContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleNames = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filterChange={this.filterChange} filter={this.state.filter} />
        <ContactsList contacts={visibleNames} deleteUser={this.removeContact} />
      </>
    );
  }
}
