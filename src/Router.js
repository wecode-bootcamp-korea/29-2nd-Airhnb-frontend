import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import List from '../src/pages/List/List';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';

const Router = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/houses" element={<List />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default Router;
