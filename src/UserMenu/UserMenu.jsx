import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';

export function UserMenu() {
  const userName = useSelector(authSelectors.getUserName);
  const isLoggedIn = useSelector(authSelectors.getItLoggedIn);

  return (
    <div>
      {isLoggedIn && <p> `Hi, {userName}` </p>}
      <button>Logout</button>
    </div>
  );
}
