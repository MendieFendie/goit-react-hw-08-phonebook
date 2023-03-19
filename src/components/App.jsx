import { AppBar } from './AppBar/AppBar';
import { Login } from 'pages/Login';
import { Registration } from 'pages/Registration';
import { Contacts } from 'pages/Contacts';
import { Route, Routes } from 'react-router-dom';
import { Main } from 'pages/Main';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={Main} />
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </div>
  );
}
