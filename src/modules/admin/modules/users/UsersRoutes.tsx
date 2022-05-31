import React from 'react';
import { Route, Routes } from 'react-router';
import { UserCreationForm } from './pages/UserCreationFormPage';
import { UserProfile } from './pages/UserProfile';
import { UsersListPage } from './pages/UsersListPage';

export const UsersRoutes = () => {
  return (
    <Routes>
      <Route path="/:id" element={<UserProfile />} />
      <Route path="/create-user/:id" element={<UserCreationForm />} />
      <Route path="/create-user" element={<UserCreationForm />} />
      <Route path="/" element={<UsersListPage />} />
    </Routes>
  );
};
