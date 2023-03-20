import { React, useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { postContact } from 'redux/operations';
import { contacts } from 'redux/selectors';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { items } = useSelector(contacts);

  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      name: name,
      number: number,
    };

    if (items.some(({ name }) => name === data.name)) {
      alert(`${data.name} is already in contacts.`);
      return;
    }
    dispatch(postContact(data));
    resetForm();
  }
  function resetForm() {
    setName('');
    setNumber('');
  }

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.form_item}>
          Name
          <input
            className={css.form_input}
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.form_item}>
          Number
          <input
            className={css.form_input}
            type="tel"
            name="number"
            onChange={e => setNumber(e.target.value)}
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.form_btn} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
}
