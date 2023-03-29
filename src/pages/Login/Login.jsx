import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { notifyWarn } from 'components/notify';
import authOperations from 'redux/auth/authOperations';
import css from './Login.module.css';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleSubmit = async e => {
    e.preventDefault();

    const response = await dispatch(authOperations.login({ email, password }));

    if (response.meta.requestStatus === 'fulfilled') {
      navigate('/contacts');
    } else {
      notifyWarn('Invalid email or password');
      return;
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
      <ToastContainer />
    </>
  );
}
