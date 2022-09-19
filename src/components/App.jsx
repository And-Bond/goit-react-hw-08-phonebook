import React from 'react';
import Contacts from './pages/Contacts/Contacts';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './modules/SharedLayout/SharedLayout';
import Register from './pages/Register/Register';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="contacts" element={<Contacts />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};
