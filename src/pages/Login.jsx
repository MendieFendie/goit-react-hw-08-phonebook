import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/authOperations';
import authSelectors from 'redux/auth/authSelectors';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getItLoggedIn);

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

    setEmail('');
    setPassword('');
  };

  return (
    <>
      {!isLoggedIn && (
        <form action="submit" onSubmit={handleSubmit}>
          <p>Input email and password</p>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Login to your account</button>
        </form>
      )}
    </>
  );
}
