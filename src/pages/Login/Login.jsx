import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import authOperations from 'redux/auth/authOperations';
import authSelectors from 'redux/auth/authSelectors';
import css from './Login.module.css';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getItLoggedIn);
  const navigate = useNavigate();

  if (isLoggedIn) {
    navigate('/');
  }

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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

    dispatch(authOperations.login({ email, password }));
    if (authOperations.login.fulfilled) {
      navigate('/');
    }
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <form className={css.form} action="submit" onSubmit={handleSubmit}>
        <p>Input email and password</p>
        <label className={css.label}>
          Email
          <input
            className={css.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            className={css.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button className={css.button} type="submit">
          Login to your account
        </button>
      </form>
    </>
  );
}
