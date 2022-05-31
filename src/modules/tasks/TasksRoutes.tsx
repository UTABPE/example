import { Route, Routes } from 'react-router';
import { CreatedTasksListPage } from './pages/CreatedTasksListPage';
import { AssignedTasksListPage } from './pages/AssignedTasksListPage';
import { CreateNewTaskFromPage } from './pages/CreateNewTaskFormPage';
import { TaskDetailsPage } from './pages/TaskDetailsPage';

export const TasksRoutes = () => {
  return (
    <Routes>
      <Route path="/assigned" element={<AssignedTasksListPage />} />
      <Route path="/created" element={<CreatedTasksListPage />} />
      <Route path="/new-task" element={<CreateNewTaskFromPage />} />
      <Route path="/:id" element={<TaskDetailsPage />} />
    </Routes>
  );
};
