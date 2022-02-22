import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import List from '../src/pages/List/List';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import BecomeHost from './pages/BecomeHost/BecomeHost';
import FloorPlan from './pages/BecomeHost/FloorPlan';
import PropertyType from './pages/BecomeHost/PropertyType';
import Location from './pages/BecomeHost/Location';
import Amenities from './pages/BecomeHost/Amenities';
import GhostType from './pages/BecomeHost/GhostType';
import HouseName from './pages/BecomeHost/HouseName';
import Description from './pages/BecomeHost/Description';
import Photos from './pages/BecomeHost/Photos';
import Preview from './pages/BecomeHost/Preview';
import Complete from './pages/BecomeHost/Complete';

const Router = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        {/* <Nav /> */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/houses" element={<List />} />
          <Route path="become-host">
            <Route index element={<BecomeHost />} />
            <Route path="floor-plan" element={<FloorPlan />} />
            <Route path="property-type" element={<PropertyType />} />
            <Route path="location" element={<Location />} />
            <Route path="amenities" element={<Amenities />} />
            <Route path="ghost-type" element={<GhostType />} />
            <Route path="title" element={<HouseName />} />
            <Route path="description" element={<Description />} />
            <Route path="photos" element={<Photos />} />
            <Route path="preview" element={<Preview />} />
            <Route path="complete" element={<Complete />} />
          </Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default Router;
