import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import authOperations from 'redux/auth/authOperations';
import css from './Registration.module.css';

export function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = { name, email, password };
    dispatch(authOperations.register(data));
    setName('');
    setEmail('');
    setPassword('');
    if (authOperations.register.fulfilled) {
      navigate('/');
    }
  };

  return (
    <form
      className={css.form}
      action="submit"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <p>Create new user</p>

      <label>
        Name
        <input
          className={css.input}
          type="text"
          value={name}
          name="name"
          onChange={handleChange}
        />
      </label>
      <label>
        Email
        <input
          className={css.input}
          type="email"
          value={email}
          name="email"
          onChange={handleChange}
        />
      </label>
      <label>
        Password
        <input
          className={css.input}
          type="password"
          value={password}
          name="password"
          onChange={handleChange}
        />
      </label>
      <button className={css.button} type="submit">
        Create user
      </button>
    </form>
  );
}
