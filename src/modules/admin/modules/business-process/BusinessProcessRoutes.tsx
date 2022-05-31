import React from 'react';
import { Route, Routes } from 'react-router';
import { BusinessProcessConstructorPage } from './pages/BPConstructorPage';
import { BusinessProcessListPage } from './pages/BPListPage';
import { BusinessProcessViewPage } from './pages/BPViewPage';
import { BusinessProcessFormCreationPage } from './pages/BPFormCreationPage';

export const BusinessProcessRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<BusinessProcessListPage />} />
      <Route path="/draft/:id" element={<BusinessProcessConstructorPage />} />
      <Route path="/:id" element={<BusinessProcessViewPage />} />
      <Route path="/form" element={<BusinessProcessFormCreationPage />} />
    </Routes>
  );
};
