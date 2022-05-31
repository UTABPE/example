import {
  EyeCheck,
  InfoCircleOutline,
  Pencil,
  UserPlus,
  X,
} from '@components/atoms/Icon';
import { BlockUser } from '@components/atoms/Icon/BlockUser';
import { UnblockUser } from '@components/atoms/Icon/UnblockUser';
import { TableIconButton } from '@components/atoms/TableIconButton';
import { PageMeta } from '@context/PageMetaContext';
import styled from '@emotion/styled';
import {
  Col,
  Descriptions as DescriptionsAntd,
  Divider,
  message,
  Row,
  Tabs as TabsAntd,
  Tooltip,
  Typography,
} from 'antd';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import tw from 'twin.macro';
import { getUser, updateStatus } from '../api/usersApi';
import { UserAvatar } from '../components/molecules/UserAvatar';
import Modal from '../components/organisms/Modal';
import { User } from '../types/User';

const { Title, Text } = Typography;
const { TabPane } = TabsAntd;

const Tabs = styled(TabsAntd)`
  ${tw`mt-4 mr-2`}
  .ant-tabs-content-holder {
    ${tw`hidden`}
  }
  .ant-tabs-tab {
    ${tw`text-gray-8 text-base`}
  }
`;

const TitleWithIcon = styled(Text)`
  ${tw`text-lg text-gray-9 mt-8 flex items-center`}
  .anticon {
    margin-right: 10px;
    ${tw`text-gray-7 w-6 h-6`}
  }
`;
const Descriptions = styled(DescriptionsAntd)`
  .ant-descriptions-row {
    ${tw`flex flex-col`}
  }
  .ant-descriptions-item-label {
    ${tw`text-gray-7 text-sm after:content-['']`}
    :after {
      margin: 0 4px 0 0;
    }
  }
  .ant-descriptions-item-content {
    ${tw`text-gray-9 text-sm`}
  }
`;

export const UserProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState<User | undefined>();
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getUser(id as string).then((res) => {
      const { data } = res;
      console.log(data);
      setUser(data);
    });
  }, [id]);

  const handleBlock = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const handleOk = async () => {
    setModalVisible(false);
    try {
      const res = await updateStatus(user!);
      const updatedUser = { ...user! };
      updatedUser.isEnabled = !updatedUser.isEnabled;
      setUser(updatedUser);
      message.success(
        {
          content: `
          Пользователь ${user?.lastName} ${user?.firstName} успешно ${
            user?.isEnabled ? 'заблокирован' : 'разблокирован'
          }
        `,
          transitionName: 'move-down',
          className: 'custom-ant-message-success',
        },
        10
      );
    } catch (error) {
      message.error(
        {
          content: `Произошла ошибка`,
          className: 'custom-ant-message-error',
          transitionName: 'move-down',
        },
        10
      );
    }
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
          { title: 'Создать пользователя', link: '/admin/users/create-user' },
        ]}
      />
      {user && (
        <>
          <Modal visible={modalVisible} onCancel={handleCancel} onOk={handleOk}>
            <Text>{`${
              user.isEnabled ? 'Заблокировать' : 'Разблокировать'
            } пользователя ${user.lastName} ${user.lastName}?`}</Text>
          </Modal>
          <Col>
            <Row align="middle" justify="space-between" className="mt-2">
              <Title className="text-primary font-medium text-base">
                {user.lastName} {user.firstName} {user.patronymicName}
              </Title>
              <Row gutter={16}>
                <Tooltip
                  placement="bottom"
                  trigger="hover"
                  color="#182E62"
                  title="Редактировать"
                >
                  <TableIconButton
                    onClick={() =>
                      navigate(`/admin/users/create-user/${user.id}`)
                    }
                    disabled={!user.isEnabled}
                    icon={<Pencil />}
                    className="text-gray-7 hover:bg-blue-15 hover:text-darkBlue-5"
                  />
                </Tooltip>
                <Tooltip
                  placement="bottom"
                  trigger="hover"
                  color="#182E62"
                  title={user.isEnabled ? 'Заблокировать' : 'Разблокировать'}
                >
                  <TableIconButton
                    onClick={handleBlock}
                    icon={user.isEnabled ? <BlockUser /> : <UnblockUser />}
                    className="text-gray-7 hover:bg-blue-15 hover:text-darkBlue-5"
                  />
                </Tooltip>
                <Tooltip
                  placement="bottom"
                  trigger="hover"
                  color="#182E62"
                  title={
                    <div className="flex flex-col items-center">
                      <span>Притвориться</span>
                      <span>пользователем</span>
                    </div>
                  }
                >
                  <TableIconButton
                    icon={<EyeCheck />}
                    className="text-gray-7 hover:bg-blue-15 hover:text-darkBlue-5"
                  />
                </Tooltip>
                <TableIconButton
                  onClick={() => {
                    navigate('/admin/users/');
                  }}
                  icon={<X />}
                  className="text-gray-7"
                />
              </Row>
              <Divider type="horizontal" className="mt-2" />
            </Row>
            <Row justify="space-between" className="pt-2 pb-8">
              <Col span={16}>
                <Text className="text-lg text-gray-9">Личные сведения</Text>
                <Row gutter={24} className="mt-6">
                  <Col span={5} className="flex flex-col justify-start">
                    <UserAvatar />
                  </Col>
                  <Col span={10}>
                    <Descriptions>
                      <DescriptionsAntd.Item label="Имя">
                        {user.firstName}
                      </DescriptionsAntd.Item>
                      <DescriptionsAntd.Item label="Фамилия">
                        {user.lastName}
                      </DescriptionsAntd.Item>
                      <DescriptionsAntd.Item label="Отчество">
                        {user.patronymicName}
                      </DescriptionsAntd.Item>
                      <DescriptionsAntd.Item label="ИИН">
                        {user.iin}
                      </DescriptionsAntd.Item>
                      <DescriptionsAntd.Item label="Электронная почта">
                        <Link to="/">{user.email}</Link>
                      </DescriptionsAntd.Item>
                      <DescriptionsAntd.Item label="Телефон для авторизации">
                        {user.authenticationPhone}
                      </DescriptionsAntd.Item>
                      <DescriptionsAntd.Item label="Контактный телефон">
                        {user.contactPhones.map((contactPhone) => (
                          <span>{contactPhone}</span>
                        ))}
                      </DescriptionsAntd.Item>
                      <DescriptionsAntd.Item label="Дополнительная информация">
                        {user.extraInfo}
                      </DescriptionsAntd.Item>
                    </Descriptions>
                  </Col>
                </Row>
                <Divider />
                <Text className="text-lg text-gray-9">Сведения о работе</Text>
                <Col span={12} className="mt-6">
                  <Descriptions>
                    <DescriptionsAntd.Item label="Наименование компании">
                      ТОО “KAPTechnology”
                    </DescriptionsAntd.Item>
                    <DescriptionsAntd.Item label="Подразделение">
                      ТОО “KAPTechnology”
                    </DescriptionsAntd.Item>
                    <DescriptionsAntd.Item label="Департамент">
                      ТОО “KAPTechnology”
                    </DescriptionsAntd.Item>
                    <DescriptionsAntd.Item label="Должность">
                      Техник
                    </DescriptionsAntd.Item>
                    <DescriptionsAntd.Item label="Настройка рассылок">
                      Настройки
                    </DescriptionsAntd.Item>
                  </Descriptions>
                </Col>
                <Divider />
                <Text className="text-lg text-gray-9">Учетная запись</Text>
                <Col span={12} className="mt-6">
                  <Descriptions>
                    <DescriptionsAntd.Item label="ID пользователя">
                      {user.id}
                    </DescriptionsAntd.Item>
                    <DescriptionsAntd.Item label="Роль">
                      Админ
                    </DescriptionsAntd.Item>
                    <DescriptionsAntd.Item label="Подразделение">
                      ТОО “KAPTechnology”
                    </DescriptionsAntd.Item>
                    <DescriptionsAntd.Item label="Тип аутентификации">
                      С ActiveDirectory
                    </DescriptionsAntd.Item>
                    <DescriptionsAntd.Item label="Статус">
                      {user.isEnabled ? 'Активный' : 'Заблокирован'}
                    </DescriptionsAntd.Item>
                  </Descriptions>
                </Col>
              </Col>
              <Col span={6}>
                <Text className="text-lg text-gray-9">Содержание карточки</Text>
                <Tabs tabPosition="right">
                  <TabPane tab="Личные сведения" key="1" />
                  <TabPane tab="Сведения о работе" key="2" />
                  <TabPane tab="Учетная запись" key="3" />
                </Tabs>
                <TitleWithIcon>
                  <InfoCircleOutline />
                  Информация о пользователе
                </TitleWithIcon>
                <Divider />
              </Col>
            </Row>
          </Col>
        </>
      )}
    </>
  );
};
