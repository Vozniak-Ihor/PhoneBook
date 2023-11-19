import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isLoggedInSelector } from 'redux/auth/selectors';
const RestrictedRoute = ({ component, redirectTo = '/' }) => {
  const auth = useSelector(isLoggedInSelector);
  return auth ? <Navigate to={redirectTo} replace /> : component;
};

export default RestrictedRoute;
