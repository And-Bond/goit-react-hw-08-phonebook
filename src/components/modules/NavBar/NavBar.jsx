import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './NavBar.module.css';
import { getLoginState } from 'redux/Auth/Auth-selectors';
import { useSelector } from 'react-redux';
import UserMenu from '../UserMenu/UserMenu';
const NavBar = () => {
  const store = useSelector(store => store);
  const isLoggedIn = getLoginState(store);

  const classNameFun = ({ isActive }) => {
    if (isActive) {
      return `${style.nav__link} ${style.nav__linkActive}`;
    }
    return `${style.nav__link}`;
  };

  return (
    <>
      {isLoggedIn ? (
        <nav className={style.navBar}>
          <NavLink className={classNameFun} to="/contacts">
            Contacts
          </NavLink>
          <UserMenu />
        </nav>
      ) : (
        <nav className={style.navBar}>
          <NavLink className={classNameFun} to="/register">
            Register
          </NavLink>
          <NavLink className={classNameFun} to="/login">
            Log in
          </NavLink>
        </nav>
      )}
    </>
  );
};

export default NavBar;
