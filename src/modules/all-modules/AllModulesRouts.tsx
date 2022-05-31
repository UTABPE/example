import { Route, Routes } from 'react-router-dom';
import { SectionLayout } from './components/organisms/SectionLayout';

export const AllModuleRouts = () => {
  return (
    <Routes>
      <Route path="/*" element={<SectionLayout />} />
    </Routes>
  );
};
