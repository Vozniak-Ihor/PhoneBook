import css from './LogoutBtn.module.css';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/auth/operations';
const Menu = () => {
  const dispatch = useDispatch();
  const onlogOut = () => {
    dispatch(logOut());
    
  };
  return (
    <>
      <button type="button" onClick={onlogOut} className={css.logOut}>
        Logout
      </button>
      
    </>
  );
};

export default Menu;
