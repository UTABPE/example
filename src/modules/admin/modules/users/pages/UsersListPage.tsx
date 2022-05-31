import { Space, message, Col } from 'antd';
import { PageMeta } from '@context/PageMetaContext';
import { UsersListTable } from '@modules/admin/modules/users/components/organisms/UsersListTable';

import { UsersListFilters } from '../components/organisms/UsersListFilters';
import { useEffect, useState } from 'react';
import { Pagination } from '@components/molecules/Pagination';
import { User } from '../types/User';
import { getAllUsers, updateStatus } from '../api/usersApi';
import Text from 'antd/lib/typography/Text';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/organisms/Modal';

const defaultSettingsList = [
  { value: 'firstName', label: 'Имя', checked: true },
  { value: 'secondName', label: 'Фамилия', checked: true },
  { value: 'role', label: 'Роль', checked: true },
  { value: 'baseName', label: 'В базе AD', checked: true },
  { value: 'status', label: 'Статус', checked: true },
  { value: 'email', label: 'E-mail', checked: true },
  { value: 'lastConnection', label: 'Последнее подключение', checked: true },
];

const defaultFilters = {
  isEnabled: true,
};

const getSavedSettingsList = (): SettingType[] => {
  const saved = localStorage.getItem('settingsList');
  let settingsList = defaultSettingsList;
  if (saved) {
    settingsList = JSON.parse(saved);
  }
  return settingsList;
};

type SettingType = {
  label: string;
  value: string;
  checked: boolean;
};

type withKey = {
  key: number;
};

export const UsersListPage = () => {
  const [settingsList, setSettingsList] = useState<SettingType[]>(
    getSavedSettingsList()
  );

  const [showModal, setShowModal] = useState(false);
  const [onStatusChangeUsers, setOnStatusChangeUsers] = useState<User[]>([]);
  const [users, setUsers] = useState<(User & withKey)[]>([]);
  const [pageSize, setPageSize] = useState(20);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalRecordsCount, setTotalRecordsCount] = useState(0);
  const [tableFilters, setTableFilters] = useState(defaultFilters);
  const [activeSortColumn, setActiveSortColumn] = useState<number>(0);
  const [columnSortStatus, setColumnSortStatus] = useState<'asc' | 'desc'>(
    'asc'
  );
  const [columnSortKey, setColumnSortKey] = useState('firstName');
  const navigate = useNavigate();

  useEffect(() => {
    getAllUsers(pageNumber, pageSize, columnSortKey, columnSortStatus).then(
      (res) => {
        const { content: users } = res.data;
        const { numberOfElements, size } = res.data;
        const userWithKey = users.map((user: User, index: number) => ({
          ...user,
          key: index,
        }));
        setUsers(userWithKey);
        setTotalRecordsCount(numberOfElements);
        setPageSize(size);
      }
    );
  }, [pageNumber, pageSize, activeSortColumn, columnSortStatus]);

  const getMessageContent = (users: User[]): string => {
    const fullNames = users.map((user, index) => {
      const comma = users.length - 1 !== index ? ', ' : '';
      return `${user.firstName} ${user.lastName} ${comma}`;
    });
    const userWord = users.length > 1 ? 'Пользователи' : 'Пользователь';
    const wasWord = users.length > 1 ? 'были' : 'был';
    const statusWord = tableFilters?.isEnabled
      ? 'заблокирован'
      : 'разблокирован';
    const msgContent = `${userWord} ${fullNames} ${wasWord} успешно ${statusWord} `;
    return msgContent;
  };

  const getModalContent = (isEnabled: boolean, users: User[]) => {
    return (
      <Col className="flex flex-col items-center justify-center text-gray-8 text-center">
        <Text className="text-gray-8">
          {isEnabled ? 'Заблокировать' : 'Разблокировать'} пользователя
        </Text>
        <Text>
          {users.map((user, index) => {
            const comma = users.length - 1 !== index ? ', ' : '';
            return `${user.firstName} ${user.lastName}${comma} `;
          })}
        </Text>
      </Col>
    );
  };

  const handleOn = async () => {
    if (!onStatusChangeUsers.length) return;
    setShowModal(false);
    try {
      if (onStatusChangeUsers.length === 1) {
        await updateStatus(onStatusChangeUsers[0]);
      } else {
        onStatusChangeUsers.map(async (user) => {
          await updateStatus(user); // add method for updating multiple users
        });
      }
      message.success(
        {
          content: getMessageContent(onStatusChangeUsers),
          transitionName: 'move-down',
          className: 'custom-ant-message-success',
        },
        10
      );
    } catch (err) {
      message.error(
        {
          content: `Произошла ошибка`,
          className: 'custom-ant-message-error',
          transitionName: 'move-down',
        },
        10
      );
    } finally {
      const deleteIds = new Set(onStatusChangeUsers.map((user) => user.id));
      const updatedUsers = users.filter((user) => !deleteIds.has(user.id));
      setUsers(updatedUsers);
    }
  };

  const handleCancel = () => {
    setOnStatusChangeUsers([]);
    setShowModal(false);
  };

  const handleStatusChange = (users: User[]) => {
    setOnStatusChangeUsers(users);
    setShowModal(true);
  };

  const getSelectedColumns = (settingList: SettingType[]): string[] => {
    return settingList
      .filter((setting) => setting.checked)
      .map((setting) => setting.value);
  };

  const setAndSaveSettingsList = (settingList: SettingType[]) => {
    localStorage.setItem('settingsList', JSON.stringify(settingList));
    setSettingsList(settingList);
  };

  const handleDownload = (downloadType: string) => {
    console.log('Download user in following format: ', downloadType);
  };

  const handleRowClick = (user: User) => {
    navigate(`/admin/users/${user.id}`);
  };

  const handleColumnSortChange = (index: number, key: string) => {
    if (activeSortColumn === index) {
      const status = columnSortStatus === 'asc' ? 'desc' : 'asc';
      setColumnSortStatus(status);
    } else {
      setColumnSortStatus('asc');
    }
    setActiveSortColumn(index);
    setColumnSortKey(key);
  };

  return (
    <>
      <PageMeta
        title="Пользователи"
        openMenuKeys={['administration']}
        selectedMenuKeys={['users']}
        breadcrumbs={[
          { title: 'Администрирование' },
          { title: 'Пользователи', link: '/admin/users' },
        ]}
      />
      <Modal visible={showModal} onOk={handleOn} onCancel={handleCancel}>
        {getModalContent(tableFilters.isEnabled, onStatusChangeUsers)}
      </Modal>
      <Space direction="vertical" className="w-full" size="middle">
        <UsersListFilters
          onDownload={handleDownload}
          setSettingsList={setAndSaveSettingsList}
          settingsList={settingsList}
        />
        <UsersListTable
          users={users}
          filters={tableFilters}
          setFilters={setTableFilters}
          activeSortColumn={activeSortColumn}
          columnSortStatus={columnSortStatus}
          selectedColumns={getSelectedColumns(settingsList)}
          onStatusChange={handleStatusChange}
          onColumnSortChange={handleColumnSortChange}
          onRowClick={handleRowClick}
        />
      </Space>
      <Pagination
        showQuickJumper={true}
        onPageSizeChange={(pageSize) => {
          setPageSize(pageSize);
        }}
        onChange={(page, pageSize) => {
          setPageNumber(page - 1);
        }}
        total={totalRecordsCount}
        pageSize={pageSize}
      />
    </>
  );
};
