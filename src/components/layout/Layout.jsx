import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Sidebar from '../sidebar/Sidebar';

import RouteContent from '../../routes/Routes';

import TopNav from '../topnav/TopNav';

import './layout.css';



const Layout = () => {
  return (
    <Routes>
      <Route path='/*' element={<LayOutComponent />}/>
    </Routes>
  );
};

export default Layout;


const LayOutComponent = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layout__content">
        <TopNav />
        <div className="layout__content-main">
          <RouteContent />
        </div>
      </div>
    </div>
  )
}
