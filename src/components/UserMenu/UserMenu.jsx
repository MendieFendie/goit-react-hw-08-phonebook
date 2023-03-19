import authSelectors from 'redux/auth/authSelectors';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/authOperations';
export function UserMenu() {
  const userName = useSelector(authSelectors.getUserName);
  const token = useSelector(authSelectors.getToken);
  const dispatch = useDispatch();
  const logoutSubmit = () => {
    dispatch(authOperations.logout(config));
  };

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return (
    <div>
      <p> `Hi, {userName}` </p>
      <button onClick={logoutSubmit}>Logout</button>
    </div>
  );
}
