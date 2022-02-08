import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Customer from '../pages/Customer';
import Dashboard from '../pages/Dashboard';



const RouteContent = () => {
  return (
    <Routes>
      <Route index path='/' element={<Dashboard />}/>
      <Route path='customers' element={<Customer />}/>
    </Routes>
  );
};

export default RouteContent;
