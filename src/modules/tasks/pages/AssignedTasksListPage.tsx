import { Tabs } from '@components/atoms/Tabs';
import { Pagination } from '@components/molecules/Pagination';
import { PageMeta } from '@context/PageMetaContext';
import { Space, Tabs as TabsAntd } from 'antd';
import { useState } from 'react';
import tw from 'twin.macro';
import { FiltersSection } from '../components/organisms/FiltersSection';
import { TasksListTable } from '../components/organisms/TasksListTable';

const TabItem = TabsAntd.TabPane;

export const AssignedTasksListPage = () => {
  const [pageSize, setPageSize] = useState<number>(10);
  const handlePageSizeChange = (value: number) => setPageSize(value);

  return (
    <>
      <PageMeta
        title="Панель задач"
        openMenuKeys={['tasks']}
        selectedMenuKeys={['assigned']}
        breadcrumbs={[
          { title: 'Панель задач', link: '/admin' },
          { title: 'Назначенные мне задачи', link: '/admin/tasks-assigned' },
        ]}
      />
      <Space direction="vertical" css={tw`w-full`}>
        <Tabs defaultActiveKey={'responsible'} className="w-full">
          <TabItem tab="Назначен Ответственным" key="responsible" />
          <TabItem tab="Назначен исолнителем" key="performer" />
        </Tabs>
        <FiltersSection />
        <TasksListTable />
        <Pagination
          total={10}
          onChange={handlePageSizeChange}
          pageSize={pageSize}
        />
      </Space>
    </>
  );
};
