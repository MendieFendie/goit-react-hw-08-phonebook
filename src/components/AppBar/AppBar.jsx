import { UserMenu } from 'UserMenu/UserMenu';
import { Navigation } from 'components/Navigation/Navigation';

export function AppBar() {
  return (
    <header>
      <Navigation />
      <UserMenu />
    </header>
  );
}
