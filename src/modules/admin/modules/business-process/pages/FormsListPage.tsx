import { useState } from 'react';
import { Space, Tabs as TabsAntd, Table as TableAntd } from 'antd';
import { Input } from '@components/atoms/Input';
import {
  AdjustmentsHorizontal,
  Ascending,
  Plus,
  Search,
} from '@components/atoms/Icon';
import { PageMeta } from '@context/PageMetaContext';
import { useQuery } from 'react-query';
import { TableIconButton } from '@components/atoms/TableIconButton';
import { getFormList } from '../api/formApi';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Pagination } from '@components/molecules/Pagination';
import { useNavigate } from 'react-router-dom';
import { Button } from '@components/atoms/Button';

const PAGE_SIZE = 20;

const Table = styled(TableAntd)`
  .ant-table-row {
    ${tw`text-gray-8`}
  }
  .ant-table-row:hover {
    ${tw`text-darkBlue-15`}
  }
  .ant-table-row a {
    ${tw`text-gray-8`}
  }
  .ant-table-row:hover a {
    ${tw`text-darkBlue-15`}
  }
  .ant-table-row-expand-icon-cell {
    ${tw`px-0 py-4`}
    border-right: none !important;
    button {
      ${tw`text-gray-8`}
    }
  }
`;
const ColumnTitle: React.FC<{ title: string }> = ({ title }) => (
  <div className="flex items-center justify-between w-full">
    {title}
    <Ascending />
  </div>
);

export const FormsListPage = () => {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const {
    data: formsList,
    isLoading,
    refetch,
  } = useQuery(
    ['getAllForms', page],

    () => getFormList({ page, size: PAGE_SIZE }).then((res) => res.data),
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <>
      <PageMeta
        title="Формы"
        openMenuKeys={['administration']}
        selectedMenuKeys={['forms']}
        breadcrumbs={[
          { title: 'Администрирование' },
          { title: 'Формы', link: '/admin/forms' },
        ]}
      />

      <Space direction="vertical" className="w-full" size="middle">
        <div className="flex w-full space-x-4 mt-3">
          <Input
            prefix={<Search />}
            size="middle"
            suffix={
              <TableIconButton
                className="text-gray-6 h-6 min-w-[24px] p-0"
                icon={<AdjustmentsHorizontal />}
              />
            }
            placeholder="Поиск"
            className="flex-1 py-2 px-2"
          />
          <Button
            icon={<Plus />}
            type="primary"
            onClick={() => navigate('/admin/bp/form')}
          >
            Создать форму
          </Button>
        </div>
        <Table
          loading={isLoading}
          className="w-full"
          dataSource={formsList?.content}
          pagination={false}
        >
          <TableAntd.Column
            title={<ColumnTitle title="Название формы" />}
            dataIndex="name"
            render={(name) => name || <i>[Безымянная форма]</i>}
          />

          <TableAntd.Column title={<ColumnTitle title="ID" />} dataIndex="id" />
        </Table>
        <Pagination
          onChange={(page, pageSize) => {
            setPage(page - 1);
          }}
          pageSize={PAGE_SIZE}
          showQuickJumper={true}
          total={formsList?.totalItems}
        />
      </Space>
    </>
  );
};
