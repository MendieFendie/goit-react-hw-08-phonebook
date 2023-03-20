import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactList/ContactsList';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/authSelectors';

export function Contacts() {
  const logedIn = useSelector(authSelectors.getItLoggedIn);

  if (logedIn === null) {
    console.log(logedIn);
    <Navigate to="/" />;
    return;
  }
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </>
  );
}
