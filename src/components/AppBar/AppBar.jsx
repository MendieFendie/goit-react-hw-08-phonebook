import { UserMenu } from 'components/UserMenu/UserMenu';
import { Navigation } from 'components/Navigation/Navigation';

import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import { Outlet } from 'react-router-dom';
import { LoginRegistration } from 'components/LoginRegistration/LoginRegistration';
import css from './AppBar.module.css';

export function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getItLoggedIn);
  return (
    <>
      <header className={css.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <LoginRegistration />}
      </header>
      <Outlet />
    </>
  );
}
