import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthToken, getAuthEmail } from 'redux/Auth/Auth-selectors';
import { authLogout } from 'redux/Auth/Auth-operation';
import style from './UserMenu.module.css'

const UserMenu = () => {
  const store = useSelector(store => store);
  const dispatch = useDispatch();

  const token = getAuthToken(store);
  const email = getAuthEmail(store);
  // console.log(token);

  const onLogoutClick = () => {
    dispatch(authLogout(token))
  };
  return (
    <div className={style.userDiv}>
      <p className={style.userEmail}>{email}</p>
      <button className={style.userButton} onClick={onLogoutClick}>Log out</button>
    </div>
  );
};

export default UserMenu;
