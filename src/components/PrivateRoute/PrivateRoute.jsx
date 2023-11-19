import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isLoggedInSelector, isRefreshingSelector } from 'redux/auth/selectors';

const PrivateRoute = ({ redirectTo = '/', component }) => {
  const auth = useSelector(isRefreshingSelector);
  const isLoading = useSelector(isLoggedInSelector);
  const shouldRedirect = !auth && !isLoading;
  return shouldRedirect ? <Navigate to={redirectTo} /> : component;
};

export default PrivateRoute;