import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from '../pages/Register';
import PrivateRouter from './PrivateRouter';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="stock" element={<PrivateRouter />}>
           
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter