import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';

export function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getItLoggedIn);
  return (
    <>
      <nav>
        <Link to="/"> Main </Link>
        {isLoggedIn && <Link to="contacts">Contacts </Link>}
        {!isLoggedIn && <Link to="/login">Login</Link>}
        {!isLoggedIn && <Link to="/registration">Registration</Link>}
      </nav>
    </>
  );
}
