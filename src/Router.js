import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from '../src/pages/List/List';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import BecomeHost from './pages/BecomeHost/BecomeHost';
import PropertyType from './pages/BecomeHost/PropertyType';
import Location from './pages/BecomeHost/Location';
import FloorPlan from './pages/BecomeHost/FloorPlan';
import Amenities from './pages/BecomeHost/Amenities';
import Photos from './pages/BecomeHost/Photos';
import HouseTitle from './pages/BecomeHost/HouseTitle';

const Router = () => {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="become-host">
          <Route index element={<BecomeHost />} />
          <Route path="property-type" element={<PropertyType />} />
          <Route path="location" element={<Location />} />
          <Route path="floor-plan" element={<FloorPlan />} />
          <Route path="amenities" element={<Amenities />} />
          <Route path="photos" element={<Photos />} />
          <Route path="title" element={<HouseTitle />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default Router;
