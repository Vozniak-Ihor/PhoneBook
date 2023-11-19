import React, { useState } from 'react';
import css from './Menu.module.css';
import { Outlet, NavLink } from 'react-router-dom';
import { isLoggedInSelector } from '../../redux/auth/selectors';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';

import LogoutBtn from './LogoutBtn/LogoutBtn';
const Menu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const isLoggedIn = useSelector(isLoggedInSelector);

  return (
    <>
      {isLoggedIn && (
        <>
          <div
            className={`${css.menuBg} ${isMenuOpen ? css.fs : ''}`}
            onClick={toggleMenu}
          ></div>
          <div
            className={`${css.menuBurger} ${isMenuOpen ? css.fs : ''}`}
            onClick={toggleMenu}
          >
            {isMenuOpen ? '✕' : '☰'}
          </div>
          <ul className={`${css.menuItems} ${isMenuOpen ? css.fs : ''}`}>
            {isLoggedIn && (
              <li>
                <NavLink to="/contacts" className={css.Link} onClick={toggleMenu}>
                  Contants
                </NavLink>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <NavLink to="/favorites" className={css.Link} onClick={toggleMenu}>
                  Favorites
                </NavLink>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <LogoutBtn/>
              </li>
            )}
          </ul>
        </>
      )}
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Menu;
