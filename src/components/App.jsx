import { AppBar } from './AppBar/AppBar';
import { Login } from 'pages/Login';
import { Registration } from 'pages/Registration';
import { Contacts } from 'pages/Contacts';

export default function App() {
  return (
    <>
      <AppBar />
      <Login />
      <Registration />
      <Contacts />
    </>
  );
}
