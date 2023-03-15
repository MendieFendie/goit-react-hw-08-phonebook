import ContactsList from './ContactList/ContactsList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { AppBar } from './AppBar/AppBar';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />

      <Routes>
        <Route path="/" element={<AppBar />} />
        <Route path="/" element={<div>Contacts</div>} />
      </Routes>
    </>
  );
}
