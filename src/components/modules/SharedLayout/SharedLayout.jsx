import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

const sharedLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default sharedLayout
