import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import css from './Navigation.module.css';

export function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getItLoggedIn);
  return (
    <>
      <nav className={css.navigation}>
        <Link className={css.mainLink} to="/">
          {' '}
          Main{' '}
        </Link>
        {isLoggedIn && (
          <Link className={css.contactsLink} to="contacts">
            Contacts{' '}
          </Link>
        )}
      </nav>
    </>
  );
}
