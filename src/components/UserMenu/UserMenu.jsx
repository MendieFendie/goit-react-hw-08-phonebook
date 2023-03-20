import authSelectors from 'redux/auth/authSelectors';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';
import css from './UserMenu.module.css';

export function UserMenu() {
  const userName = useSelector(authSelectors.getUserName);
  const token = useSelector(authSelectors.getToken);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const logoutSubmit = () => {
    dispatch(authOperations.logout(config));
    navigate('/');
  };

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return (
    <>
      <div className={css.userMenu}>
        <p className={css.userName}> Hi, {userName} </p>
        <button className={css.btn} type="button" onClick={logoutSubmit}>
          Logout
        </button>
      </div>
    </>
  );
}
