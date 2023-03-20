import { Link } from 'react-router-dom';
import css from './LoginRegistration.module.css';
export const LoginRegistration = () => {
  return (
    <div className={css.logRegBtn}>
      <Link className={css.login} to="/login">
        Login
      </Link>
      <Link className={css.registration} to="/registration">
        Registration
      </Link>
    </div>
  );
};
