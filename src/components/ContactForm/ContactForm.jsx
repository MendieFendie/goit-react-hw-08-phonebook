import { React, useState } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

export default function ContactForm(props) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      name: name,
      number: number,
    };
    props.addContact(data);
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

// class oldContactForm extends React.Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = evt => {
//     this.setState({ [evt.currentTarget.name]: evt.currentTarget.value });
//     console.log(evt.currentTarget.name);
//     console.log(evt.currentTarget.value);
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.addContact(this.state);
//     this.resetForm();
//   };

//   resetForm = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <>
//         <form className={css.form} onSubmit={this.handleSubmit}>
//           <label className={css.form_item}>
//             Name
//             <input
//               className={css.form_input}
//               type="text"
//               name="name"
//               value={name}
//               onChange={this.handleChange}
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//             />
//           </label>
//           <label className={css.form_item}>
//             Number
//             <input
//               className={css.form_input}
//               type="tel"
//               name="number"
//               onChange={this.handleChange}
//               value={number}
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//             />
//           </label>
//           <button className={css.form_btn} type="submit">
//             Add contact
//           </button>
//         </form>
//       </>
//     );
//   }
// }

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
