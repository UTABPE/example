import { PageMeta } from '@context/PageMetaContext';
import { TasksListTable } from '../components/organisms/TasksListTable';

export const CreatedTasksListPage = () => {
  return (
    <>
      <PageMeta
        title="Панель задач"
        openMenuKeys={['tasks']}
        selectedMenuKeys={['assigned']}
        breadcrumbs={[
          { title: 'Панель задач', link: '/admin' },
          { title: 'Созданные  задачи', link: '/admin/tasks/created' },
        ]}
      />
      <TasksListTable />
    </>
  );
};
