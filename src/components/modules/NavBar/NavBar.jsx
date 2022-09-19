import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './NavBar.module.css'
const NavBar = () => {
    const classNameFun = ({isActive}) => {
        if(isActive){
            return `${style.nav__link} ${style.nav__linkActive}`
        }
        return `${style.nav__link}`
    }
  return (
    <nav className={style.navBar}>
      <NavLink className={classNameFun} to='/register'>Register</NavLink>
      <NavLink className={classNameFun} to='/contacts'>Contacts</NavLink>
      <NavLink className={classNameFun} to='/login'>Log in</NavLink>
    </nav>
  );
};

export default NavBar