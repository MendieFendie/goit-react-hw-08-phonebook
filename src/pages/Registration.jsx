import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperations';

export function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

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
  };

  return (
    <form action="submit" onSubmit={handleSubmit} autoComplete="off">
      <p>Create new user</p>

      <label>
        Name
        <input type="text" value={name} name="name" onChange={handleChange} />
      </label>
      <label>
        Email
        <input
          type="email"
          value={email}
          name="email"
          onChange={handleChange}
        />
      </label>
      <label>
        {' '}
        Password
        <input
          type="password"
          value={password}
          name="password"
          onChange={handleChange}
        />
      </label>
      <button type="submit">Create user</button>
    </form>
  );
}
