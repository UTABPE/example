import { Route, Routes } from 'react-router';
import { AttachmentOneReportPage } from './pages/AttachmentOneReportPage';
import { AttachmentTwoReportPage } from './pages/AttachmentTwoReportPage';

export const ReportsRoutes = () => {
  return (
    <Routes>
      <Route path="/attachment-1" element={<AttachmentOneReportPage />} />
      <Route path="/attachment-2" element={<AttachmentTwoReportPage />} />
    </Routes>
  );
};
