import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from '../src/pages/List/List';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<List />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
