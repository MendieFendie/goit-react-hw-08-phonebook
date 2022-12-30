/* eslint-disable no-undef */
import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import ContactsList from './ContactList/ContactsList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

export default function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  function filterChange(evt) {
    setFilter(evt.currentTarget.value);
  }

  function addContact(data) {
    const user = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };
    const normalizedName = data.name.toLowerCase();
    const checkUsers = contacts.map(contact => contact.name.toLowerCase());
    if (checkUsers.includes(normalizedName)) {
      return alert(`${user.name} is already in contacts`);
    } else {
      setContacts([user, ...contacts]);
    }
  }

  function removeContact(contactId) {
    setContacts(contacts.filter(({ id }) => id !== contactId));
  }

  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
      return;
    }
    if (localStorage.contacts) {
      const contacts = localStorage.getItem('contacts');
      const parsedContacts = JSON.parse(contacts);
      setContacts(parsedContacts);
    }

    isMounted.current = true;
  }, [contacts]);

  const normalizedFilter = filter.toLowerCase();
  const visibleNames = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter filterChange={filterChange} filter={filter} />
      <ContactsList contacts={visibleNames} deleteUser={removeContact} />
    </>
  );
}
