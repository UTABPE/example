import React from 'react';
import { Route, Routes } from 'react-router';
import { OrganizationListPage } from './pages/OrganizationListPage';

export const OrgStructureRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<OrganizationListPage />} />
    </Routes>
  );
};
