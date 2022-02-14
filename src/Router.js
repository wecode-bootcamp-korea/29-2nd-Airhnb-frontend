import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from '../src/pages/List/List';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
