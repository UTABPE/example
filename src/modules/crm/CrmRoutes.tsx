import { Navigate, Route, Routes } from 'react-router';
import { ArchiveContractListPage } from './pages/ArchiveContractListPage';
import { ContractListPage } from './pages/ContractListPage';
import { ContractorListPage } from './pages/ContractorListPage';
import { NewContractorPage } from './pages/NewContractorPage';
import { ViewContractorPage } from '@modules/crm/pages/ViewContractorPage';

export const CrmRoutes = () => {
  return (
    <Routes>
      <Route path="/contracts/*" element={<ContractListPage />} />
      <Route path="/contractors/new" element={<NewContractorPage />} />
      <Route path="/contractors/*" element={<ContractorListPage />} />
      <Route path="/contractors/:id" element={<ViewContractorPage />} />
      <Route path="/archive/*" element={<ArchiveContractListPage />} />

      <Route path="*" element={<Navigate to="/crm/contractors" replace />} />
    </Routes>
  );
};
