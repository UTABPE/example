import React from 'react';
import { Route, Routes } from 'react-router';
import { BusinessModulesListPage } from './pages/BusinessModulesListPage';

export const BusinessProcessRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<BusinessModulesListPage />} />
    </Routes>
  );
};
