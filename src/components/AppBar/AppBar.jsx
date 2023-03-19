import { UserMenu } from 'components/UserMenu/UserMenu';
import { Navigation } from 'components/Navigation/Navigation';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import { Outlet } from 'react-router-dom';

export function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getItLoggedIn);
  return (
    <>
      <header>
        <Navigation />
        {isLoggedIn && <UserMenu />}
      </header>
      <Outlet />
    </>
  );
}
