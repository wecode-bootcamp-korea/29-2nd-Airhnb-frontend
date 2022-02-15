import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import List from '../src/pages/List/List';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Detail from './pages/Detail/Detail';

const Router = () => {
  return (
<<<<<<< HEAD
    <RecoilRoot>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/houses" element={<List />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </RecoilRoot>
=======
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
>>>>>>> 1cd16718 (ADD : Rough Layout)
  );
};

export default Router;
