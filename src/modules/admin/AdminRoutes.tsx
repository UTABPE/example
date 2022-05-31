import { Route, Routes } from 'react-router';
import { BusinessModulesListPage } from './modules/business-modules/pages/BusinessModulesListPage';
import { BusinessProcessRoutes } from './modules/business-process/BusinessProcessRoutes';
import { FormsListPage } from './modules/business-process/pages/FormsListPage';
import { OrgStructureRoutes } from './modules/org-structure/OrgStructureRoutes';
import { UsersRoutes } from './modules/users/UsersRoutes';

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/bp/*" element={<BusinessProcessRoutes />} />
      <Route path="/users/*" element={<UsersRoutes />} />
      <Route path="/org-structure/*" element={<OrgStructureRoutes />} />
      <Route path="/modules/*" element={<BusinessModulesListPage />} />
      <Route path="/forms/*" element={<FormsListPage />} />
    </Routes>
  );
};
