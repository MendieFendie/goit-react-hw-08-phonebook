import css from './ContactList.module.css';
import { contacts, filter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/operations';
import { ClipLoader } from 'react-spinners';
import { notifySuccess } from 'components/notify';
import { ToastContainer } from 'react-toastify';

const ContactsList = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(filter);
  const { items, isLoading, error } = useSelector(contacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const normalizedFilter = filterValue.filter.toLowerCase();
  const visibleNames = items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      <ul className={css.list}>
        {isLoading && <ClipLoader />}
        {error && <b>{error}</b>}
        {visibleNames.map(contact => (
          <li className={css.list_item} key={contact.id}>
            {contact.name + ':' + contact.number}
            {
              <button
                className={css.list_btn}
                type="button"
                name="delete"
                id={contact.id}
                onClick={e =>
                  dispatch(
                    deleteContact(e.currentTarget.id),
                    notifySuccess('Contact deleted')
                  )
                }
              >
                delete
              </button>
            }
          </li>
        ))}
      </ul>
      <ToastContainer />
    </>
  );
};

export default ContactsList;
