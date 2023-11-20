import React, { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshThunk } from 'redux/auth/operations';
import Menu from '../Menu/Menu';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute';
const Home = lazy(() => import('../../pages/Home/Home'));
const Contacts = lazy(() => import('../../pages/Contacts/Contacts'));
const Favorites = lazy(() => import('../../pages/Favorites/Favorites'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Menu />}>
        <Route
          index
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Home />} />
          }
        />

        <Route
          path="/contacts"
          element={<PrivateRoute redirectTo="/" component={<Contacts />} />}
        />
        <Route
          path="/favorites"
          element={<PrivateRoute redirectTo="/" component={<Favorites />} />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
