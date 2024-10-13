import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Admin } from '../componentes/Admin';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
};
