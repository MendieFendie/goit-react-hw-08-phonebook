import PropTypes from 'prop-types';
import css from './ContactList.module.css';
const ContactsList = ({ contacts, deleteUser }) => {
  return (
    <>
      <ul className={css.list}>
        {contacts.map(contact => (
          <li className={css.list_item} key={contact.id}>
            {contact.name + ':' + contact.number}
            {
              <button
                className={css.list_btn}
                type="button"
                name="delete"
                onClick={() => deleteUser(contact.id)}
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

ContactsList.propTypes = {
  deleteUser: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
