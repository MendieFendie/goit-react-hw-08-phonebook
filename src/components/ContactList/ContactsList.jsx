import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { contacts, filter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const ContactsList = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(contacts);
  const filterValue = useSelector(filter);

  const normalizedFilter = filterValue.filter.toLowerCase();
  const visibleNames = contactsList.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      <ul className={css.list}>
        {visibleNames.map(contact => (
          <li className={css.list_item} key={contact.id}>
            {contact.name + ':' + contact.number}
            {
              <button
                className={css.list_btn}
                type="button"
                name="delete"
                onClick={() => dispatch(deleteContact(contact.id))}
              >
                delete
              </button>
            }
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactsList;
