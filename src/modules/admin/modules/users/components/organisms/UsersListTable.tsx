import { DatePicker, Select, Space, Switch, Table as TableAntd } from 'antd';
import { CalendarEvent, Desascending, Search } from '@components/atoms/Icon';
import React, { ChangeEvent, FC, useMemo, useState } from 'react';
import tw from 'twin.macro';
import { Input } from '@components/atoms/Input';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { User } from '../../types/User';
import type { ColumnsType } from 'antd/lib/table';
import UsersListStatusChange from './UsersListStatusChange';
import ColumnTitle from '../molecules/ColumnTitle';

const { Option } = Select;

type withKey = {
  key: number;
};

type Props = {
  users: (User & withKey)[];
  selectedColumns: string[];
  filters: { isEnabled: boolean };
  activeSortColumn: number;
  columnSortStatus: 'asc' | 'desc';
  onStatusChange: (users: User[]) => void;
  onRowClick: (user: User) => void;
  onColumnSortChange: (currentColumnIndex: number, key: string) => void;
  setFilters: (filters: { isEnabled: boolean }) => void;
};

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

export const UsersListTable: FC<Props> = (props) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [selectedRows, setSelectedRows] = useState<User[]>([]);

  const columns = [
    {
      title: () => (
        <Space direction="vertical" css={tw`w-full`}>
          <ColumnTitle
            title="Имя"
            dataIndex="firstName"
            index={0}
            activeSortColumn={props.activeSortColumn}
            columnSortStatus={props.columnSortStatus}
            onClick={props.onColumnSortChange}
          />
          <Input size="small" prefix={<Search />} className="py-0.5 px-2" />
        </Space>
      ),
      dataIndex: 'firstName',
      key: 'firstName',
      width: '160px',
      render: (firstName: string, user: User) => (
        <Link to={`/admin/users/${user.id}`}>{firstName}</Link>
      ),
    },
    {
      title: () => (
        <Space direction="vertical" css={tw`w-full`}>
          <ColumnTitle
            title="Фамилия"
            dataIndex="lastName"
            index={1}
            activeSortColumn={props.activeSortColumn}
            columnSortStatus={props.columnSortStatus}
            onClick={props.onColumnSortChange}
          />
          <Input size="small" prefix={<Search />} className="py-0.5 px-2" />
        </Space>
      ),
      render: (lastName: string, user: User) => (
        <Link to={`/admin/users/${user.id}`}>{lastName}</Link>
      ),
      dataIndex: 'lastName',
      key: 'secondName',
      width: '160px',
    },
    {
      title: () => (
        <Space direction="vertical" className="w-full">
          <ColumnTitle
            index={2}
            dataIndex="role"
            activeSortColumn={props.activeSortColumn}
            columnSortStatus={props.columnSortStatus}
            title="Роль"
            onClick={props.onColumnSortChange}
          />
          <Select className="w-full" size="small" />
        </Space>
      ),
      dataIndex: 'role',
      key: 'role',
      width: '160px',
    },
    {
      title: () => (
        <Space direction="vertical" css={tw`w-full`}>
          <ColumnTitle
            index={3}
            dataIndex="baseName"
            activeSortColumn={props.activeSortColumn}
            columnSortStatus={props.columnSortStatus}
            title="В базе AD"
            onClick={props.onColumnSortChange}
          />
          <Input size="small" prefix={<Search />} className="py-0.5 px-2" />
        </Space>
      ),
      dataIndex: 'baseName',
      key: 'baseName',
      width: '160px',
    },
    {
      title: () => (
        <Space direction="vertical" css={tw`w-full`}>
          <ColumnTitle
            index={4}
            dataIndex="email"
            activeSortColumn={props.activeSortColumn}
            columnSortStatus={props.columnSortStatus}
            title="E-mail"
            onClick={props.onColumnSortChange}
          />
          <Input size="small" prefix={<Search />} className="py-0.5 px-2" />
        </Space>
      ),
      dataIndex: 'email',
      key: 'email',
      width: '226px',
    },
    {
      title: () => (
        <Space direction="vertical" className="w-full">
          <ColumnTitle
            title="Последнее подключение"
            index={5}
            dataIndex="lastConnection"
            activeSortColumn={props.activeSortColumn}
            columnSortStatus={props.columnSortStatus}
            onClick={props.onColumnSortChange}
          />
          <DatePicker
            size="small"
            placeholder=""
            className="w-full"
            suffixIcon={<CalendarEvent />}
          />
        </Space>
      ),
      dataIndex: 'lastConnection',
      key: 'lastConnection',
      width: '226px',
    },
    {
      title: () => (
        <Space direction="vertical" className="w-full">
          <ColumnTitle
            title="Статус"
            index={6}
            dataIndex="isEnabled"
            activeSortColumn={props.activeSortColumn}
            columnSortStatus={props.columnSortStatus}
            onClick={props.onColumnSortChange}
          />
          <Select
            className="w-full font-normal text-sm text-gray-6"
            size="small"
            placeholder="Активный"
            onChange={(value: boolean) => {
              const copy = { ...props.filters };
              copy.isEnabled = value;
              console.log(props.filters, value);
              props.setFilters(copy);
            }}
          >
            <Option value={true}>Активные</Option>
            <Option value={false}>Заблокированные</Option>
          </Select>
        </Space>
      ),
      render: (isEnabled: boolean, user: User) => (
        <Space>
          <Switch
            checked={isEnabled}
            onClick={() => {
              props.onStatusChange([user]);
            }}
          />
          {isEnabled ? 'Активный' : 'Заблокирован'}
        </Space>
      ),
      dataIndex: 'isEnabled',
      key: 'status',
      width: '176px',
    },
  ];

  const _cols: ColumnsType<User & withKey> = useMemo(
    () =>
      Object.values(
        props.selectedColumns.reduce((acc, nextKey) => {
          return {
            ...acc,
            [nextKey]: columns.find((c) => {
              return c.key === nextKey;
            }),
          };
        }, {})
      ),
    [props.selectedColumns]
  );

  return (
    <Table
      columns={[...(_cols as ColumnsType<object>)]}
      bordered
      className="w-full"
      rowSelection={{
        columnTitle: (
          <UsersListStatusChange
            indeterminate={selectedRowKeys.length > 0}
            block={props.filters.isEnabled}
            onStatusChange={() => {
              props.onStatusChange(selectedRows);
            }}
          />
        ),
        selectedRowKeys: selectedRowKeys,
        onChange(selectedRowKeys, selectedRows) {
          const users = selectedRows as User[];
          setSelectedRows(users);
          setSelectedRowKeys(selectedRowKeys);
        },
      }}
      dataSource={props.users}
      pagination={false}
    >
      <TableAntd.Column dataIndex="wf_name" render={(d) => d || '-'} />
    </Table>
  );
};
