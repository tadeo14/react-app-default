import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Admin } from '../pages/Admin';
import { Home } from '../pages/Home';
import NavBar from '../components/NavBar';
import { Footer } from '../components/Footer'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
};
