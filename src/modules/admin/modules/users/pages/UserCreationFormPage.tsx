import { Button } from '@components/atoms/Button';
import { InfoCircleOutline, X } from '@components/atoms/Icon';
import { TableIconButton } from '@components/atoms/TableIconButton';
import { PageMeta } from '@context/PageMetaContext';
import styled from '@emotion/styled';
import {
  Col,
  Divider,
  Input,
  message,
  Row,
  Select,
  Tabs as TabsAntd,
  Typography,
} from 'antd';
import tw from 'twin.macro';
import { UserAvatar } from '../components/molecules/UserAvatar';
import * as yup from 'yup';
import AntField from '../components/molecules/AntField';
import { Form, Formik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import InputMask from 'react-input-mask';
import { useEffect, useState } from 'react';
import { createUser, getUser, updateUser } from '../api/usersApi';
import Modal from '../components/organisms/Modal';
import { User } from '../types/User';
import { AxiosError } from 'axios';

const { Title, Text } = Typography;
const { TabPane } = TabsAntd;

const Tabs = styled(TabsAntd)`
  ${tw`mt-4 mr-2`}
  .ant-tabs-content-holder {
    ${tw`hidden`}
  }
`;

const TitleWithIcon = styled(Text)`
  ${tw`text-lg text-gray-9 mt-8 flex items-center`}
  .anticon {
    margin-right: 10px;
  }
`;

const newUserValidationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Заполните обязательное поле!'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Заполните обязательное поле!'),
  iin: yup
    .string()
    .min(12, 'Enter valid iin')
    .required('Заполните обязательное поле!'),
  firstName: yup.string().required('Заполните обязательное поле!'),
  lastName: yup.string().required('Заполните обязательное поле!'),
  patronymicName: yup.string().required('Заполните обязательное поле!'),
  id: yup.string().required('Заполните обязательное поле!'),
  username: yup.string().required('Заполните обязательное поле!'),
});

const existingUserValidationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Заполните обязательное поле!'),
  iin: yup
    .string()
    .min(12, 'Enter valid iin')
    .required('Заполните обязательное поле!'),
  firstName: yup.string().required('Заполните обязательное поле!'),
  lastName: yup.string().required('Заполните обязательное поле!'),
  patronymicName: yup.string().required('Заполните обязательное поле!'),
  id: yup.string().required('Заполните обязательное поле!'),
});

const defaultValues = {
  authenticationPhone: '',
  contactPhones: [''],
  email: '',
  extraInfo: '',
  firstName: '',
  id: '84dfe457-279c-4ec9-a3c9-d1d373ef4e52',
  iin: '',
  isEnabled: true,
  lastName: '',
  password: '',
  patronymicName: '',
  photoUrl: '/img/profile.svg',
  username: '',
};

export const UserCreationForm = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [initialValues, setInitialValues] = useState<User | undefined>();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      setInitialValues(defaultValues);
      return;
    }
    getUser(id).then((res) => {
      const { data } = res;
      setInitialValues(data);
    });
  }, [id]);

  const createNewUser = (user: User) => {
    createUser(user).then((res) => {
      message.success({
        content: `Пользователь ${user.firstName} был успешно создан`,
        transitionName: 'move-down',
        className: 'custom-ant-message-success',
      });
      navigate('/admin/users');
    });
  };

  const updateCurrentUser = (user: User) => {
    updateUser(user)
      .then((res) => {
        message.success({
          content: `Данные ${user.firstName} были успешно сохранены`,
          transitionName: 'move-down',
          className: 'custom-ant-message-success',
        });
        navigate('/admin/users');
      })
      .catch((error) => {
        const err = error as AxiosError;
        console.log(err.message);
        message.error(
          {
            content: `Произошла ошибка`,
            className: 'custom-ant-message-error',
            transitionName: 'move-down',
          },
          10
        );
      });
  };

  const handleSubmit = (values: User) => {
    if (id) {
      updateCurrentUser(values);
    } else {
      createNewUser(values);
    }
  };

  const handleModalAccept = () => {
    setModalVisible(false);
    navigate('/admin/users');
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };

  const getValidationSchema = (id: string | undefined) => {
    return id ? existingUserValidationSchema : newUserValidationSchema;
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
          {
            title: 'Создать пользователя',
            link: '/admin/users/create-user',
          },
        ]}
      />
      <Modal
        visible={modalVisible}
        onOk={handleModalAccept}
        onCancel={handleModalCancel}
      >
        <Col className="mt-2 flex flex-col items-center justify-center text-gray-8 text-center">
          <p className="mb-2">Вы хотите отменить создание пользователя?</p>
          <p>Все внесенные данные несохранятся.</p>
        </Col>
      </Modal>
      <div className="ant-form-vertical">
        <Row align="middle" justify="space-between" className="mt-6">
          <Title className="text-primary font-medium text-base">
            Создать пользователя
          </Title>
          <TableIconButton
            onClick={() => navigate('/admin/users/')}
            icon={<X />}
            className="text-gray-7"
          />
          <Divider />
        </Row>
        {initialValues && (
          <Row justify="space-between" className="pt-2 pb-8">
            <Col span={17}>
              <Formik
                initialValues={initialValues}
                validationSchema={getValidationSchema(id)}
                onSubmit={(values: User) => {
                  return handleSubmit(values);
                }}
              >
                <Form>
                  <>
                    <Text id="personalInfo" className="text-lg text-gray-9">
                      Личные сведения
                    </Text>
                    <Row gutter={24} className="mt-6">
                      <Col
                        span={4}
                        className="flex flex-col justify-start items-center"
                      >
                        <UserAvatar />
                        <Text className="text-xs text-gray-8 text-center mt-2">
                          Допустимые форматы загрузки изображения: jpg, png,
                          svg.
                        </Text>
                      </Col>
                      <Col span={10}>
                        <AntField
                          label="Почта"
                          requiredLabel={true}
                          name="email"
                        />
                        <AntField
                          label="Имя"
                          requiredLabel={true}
                          name="firstName"
                        />
                        <AntField
                          label="Отчетсво"
                          requiredLabel={true}
                          name="patronymicName"
                        />
                        <AntField
                          label="Контактный телефон"
                          name="contactPhones[0]"
                        >
                          <InputMask mask={'+7 (999) 999 9999'}>
                            {(inputProps: any) => (
                              <Input className="text-gray-8" {...inputProps} />
                            )}
                          </InputMask>
                        </AntField>
                      </Col>
                      <Col span={10}>
                        <AntField label="ИИН" requiredLabel={true} name="iin" />
                        <AntField
                          label="Фамилия"
                          requiredLabel={true}
                          name="lastName"
                        />
                        <AntField
                          label="Телефон для авторизации"
                          name="authenticationPhone"
                        >
                          <InputMask mask={'+7 (999) 999 9999'}>
                            {(inputProps: any) => (
                              <Input className="text-gray-8" {...inputProps} />
                            )}
                          </InputMask>
                        </AntField>
                        <AntField
                          label="Дополнительная информация"
                          name="extraInfo"
                        />
                      </Col>
                    </Row>
                  </>
                  <Divider />
                  <>
                    <Text id={'jobInfo'} className="text-lg text-gray-9">
                      Сведения о работе
                    </Text>
                    <Row gutter={24} className="mt-6">
                      <Col span={12}>
                        <AntField
                          label="Наименование компании"
                          name="companyName"
                          requiredLabel={true}
                          children={<Select disabled />}
                        />
                        <AntField
                          label="Департамент"
                          name="department"
                          requiredLabel={true}
                          children={<Select disabled />}
                        />
                        <AntField
                          label="Настройка рассылок"
                          name="newsettler"
                          requiredLabel={true}
                          children={<Select disabled />}
                        />
                      </Col>
                      <Col span={12}>
                        <AntField
                          label="Подразделение"
                          name="pod"
                          requiredLabel={true}
                          children={<Select disabled />}
                        />
                        <AntField
                          label="Должность"
                          name="role"
                          requiredLabel={true}
                          children={<Select disabled />}
                        />
                      </Col>
                    </Row>
                  </>
                  <Divider />
                  <>
                    <Text id={'accountInfo'} className="text-lg text-gray-9">
                      Учетная запись
                    </Text>
                    <Row gutter={24} className="mt-6">
                      <Col span={12}>
                        <AntField
                          label="Username"
                          name="username"
                          requiredLabel={true}
                        />
                        <AntField
                          label="ID пользователя"
                          name="id"
                          requiredLabel={true}
                        />
                        <AntField
                          label="Тип аутентификации"
                          name="auth"
                          children={<Select disabled />}
                        />
                      </Col>
                      <Col span={12}>
                        <AntField
                          label="Пароль"
                          name="password"
                          requiredLabel={true}
                        />
                        <AntField
                          label="Роль"
                          name="auth"
                          children={<Select disabled />}
                          requiredLabel={true}
                        />
                        <AntField
                          label="Статус"
                          name="isEnabled"
                          children={<Select disabled />}
                          requiredLabel={true}
                        />
                      </Col>
                    </Row>
                  </>
                  {id ? (
                    <Row justify="center" gutter={24}>
                      <Col span={6}>
                        <Button className="w-full" htmlType="submit">
                          Сохранить
                        </Button>
                      </Col>
                    </Row>
                  ) : (
                    <Row justify="center" gutter={24}>
                      <Col span={6}>
                        <Button className="w-full" htmlType="submit">
                          Создать
                        </Button>
                      </Col>
                      <Col span={6}>
                        <Button
                          onClick={() => setModalVisible(true)}
                          className="w-full"
                          htmlType="button"
                          type="default"
                        >
                          Отмена
                        </Button>
                      </Col>
                    </Row>
                  )}
                </Form>
              </Formik>
            </Col>
            <Col span={6}>
              <Text className="text-lg text-gray-9">Содержание карточки</Text>
              <Tabs tabPosition="right">
                <TabPane tab="Личные сведения" key="1" />
                <TabPane tab="Сведения о работе" key="2" />
                <TabPane tab="Учетная запись" key="3" />
              </Tabs>
              <TitleWithIcon className="">
                <InfoCircleOutline />
                Информация о пользователе
              </TitleWithIcon>
              <Divider />
            </Col>
          </Row>
        )}
      </div>
    </>
  );
};
