import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { UserLayout } from '@components/templates/UserLayout';
import { DesignSystemPage } from '@modules/design-system/pages/DesignSystemPage';
import { AdminRoutes } from '@modules/admin/AdminRoutes';
import { ReportsRoutes } from '@modules/reports/ReportsRoutes';
import { TasksRoutes } from '@modules/tasks/TasksRoutes';
import { useKeycloak } from '@react-keycloak/web';
import { useEffect } from 'react';
import { CrmRoutes } from '@modules/crm/CrmRoutes';
import { MainPage } from '@modules/landing/pages/MainPage';
import { PageLayout } from './modules/landing/components/templates/PageLayout';
import { AllModuleRouts } from '@modules/all-modules/AllModulesRouts';
import { CreatedTasksListPage } from '@modules/tasks/pages/CreatedTasksListPage';

function AppRoutes() {
  // const kc = useKeycloak();

  // useEffect(() => {
  //   if (!kc.initialized) return;

  //   if (!kc.keycloak.authenticated) {
  //     kc.keycloak.login();
  //   } else {
  //     kc.keycloak.loadUserInfo();
  //     kc.keycloak.loadUserProfile();
  //   }
  // }, [kc.keycloak, kc.keycloak.authenticated]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route path="/" element={<CreatedTasksListPage />} />
          <Route path="/design-system" element={<DesignSystemPage />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="/crm/*" element={<CrmRoutes />} />
          <Route path="/reports/*" element={<ReportsRoutes />} />
          <Route path="/tasks/*" element={<TasksRoutes />} />
          <Route path="/user/*" element={<AllModuleRouts />} />
        </Route>
        <Route path="/news" element={<PageLayout />}>
          <Route path="/news" element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
