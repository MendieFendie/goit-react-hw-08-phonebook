import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactList/ContactsList';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import css from './Contacts.module.css';

export function Contacts() {
  const logedIn = useSelector(authSelectors.getItLoggedIn);

  return (
    <div className={css.contacts}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {logedIn && <ContactsList />}
    </div>
  );
}
