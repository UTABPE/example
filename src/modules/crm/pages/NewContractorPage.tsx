import React, { ChangeEvent, ChangeEventHandler, useCallback } from 'react';
import { PageMeta } from '@context/PageMetaContext';
import {
  Col,
  Row,
  Tabs,
  Typography,
  Upload,
  Select,
  Input as InputAntd,
  Card,
  Space,
  Form as FormAntd,
  notification,
} from 'antd';
import { Input } from '@components/atoms/Input';
import { CloudUpload } from '@components/atoms/Icon';
import { Button } from '@components/atoms/Button';
import { NoContacts } from '@modules/crm/pages/ViewContractorPage/libs/components/NoContacts';
import { Formik, Form as FormikForm, useFormik } from 'formik';
import { Contractor, ContractorPayload } from '@modules/crm/types/Contractor';
import { useMutation } from 'react-query';
import { contractorsApi } from '@modules/crm/api/contractorsApi';
import { useNavigate } from 'react-router-dom';
import { NoContactsAddedBlock } from '@modules/crm/pages/ViewContractorPage/libs/components/NoContactsAddedBlock';

const Dragger = Upload.Dragger;

const initialValues: ContractorPayload = {
  companyName: '',
  websiteUrl: '',
  language: '',
  email: '',
  phoneNumber: '',
  faxNumber: '',
  regionId: '',
  countryId: '',
  stateId: '',
  cityId: '',
  district: '',
  streetName: '',
  building: '',
  office: '',
  contacts: [],
  companyLogoUrl: '',
};

export const NewContractorPage = () => {
  const navigate = useNavigate();
  const handleAddContact = useCallback(() => {
    console.log('contacts');
  }, []);

  const createContractorMutation = useMutation(
    (contractor: ContractorPayload) =>
      contractorsApi.createCounterparty(contractor),
    {
      onSuccess(res) {
        console.log(res);
        notification.success({ message: 'Контрагент создан' });
        navigate(`/crm/contractors`);
      },
      onError(err) {
        notification.error({ message: 'Произошла ошибка' });
      },
    }
  );

  const formik = useFormik<ContractorPayload>({
    initialValues: initialValues,
    onSubmit: (values) => {
      createContractorMutation.mutate(values);
      console.log(values);
    },
  });

  const handleSelectChange = useCallback(
    (name: string) => (val: string) => {
      formik.setValues((vals) => ({
        ...vals,
        [name]: val,
      }));
      console.log(name, val);
    },
    [formik]
  );
  return (
    <>
      <PageMeta
        title="CRM: Контрагенты"
        openMenuKeys={['crm']}
        selectedMenuKeys={['crm', 'contractors']}
        breadcrumbs={[
          { title: 'CRM', link: '/crm' },
          { title: 'Контрагенты', link: '/crm/contractors' },
          { title: 'Новый контрагент', link: '/crm/contractors/new' },
        ]}
      />

      <Row>
        <Col span={18}>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
              console.log(values, actions);
            }}
          >
            <FormAntd
              layout="vertical"
              onSubmitCapture={() => formik.submitForm()}
            >
              <div className="px-4 py-8">
                <Typography.Text type="secondary">
                  Данные компании
                </Typography.Text>
              </div>

              <Row gutter={24}>
                <Col span={8}>
                  <div className="pt-4 px-4">
                    <Dragger className="py-8">
                      <p className="ant-upload-drag-icon text-[32px]">
                        <CloudUpload />
                      </p>

                      <Typography.Text type="secondary">
                        Лого компании
                      </Typography.Text>
                    </Dragger>
                  </div>

                  <div className="text-center mt-4">
                    <Typography.Text type="secondary">
                      Допустимые форматы загрузки изображения: jpg, png, svg.
                    </Typography.Text>
                  </div>
                </Col>

                <Col span={16}>
                  <Row gutter={24}>
                    <Col span={24}>
                      <FormAntd.Item label="Наименование" required>
                        <Input
                          name="companyName"
                          onChange={formik.handleChange}
                        />
                      </FormAntd.Item>
                      {/*<Form.Item label="Наименование" labelCol={{ span: 24 }}>*/}
                      {/*  <Input name="companyName" />*/}
                      {/*</Form.Item>*/}
                    </Col>

                    <Col span={18}>
                      <FormAntd.Item label="Сайт компании" required>
                        <Input
                          name="websiteUrl"
                          placeholder="http://site.com"
                          onChange={formik.handleChange}
                        />
                      </FormAntd.Item>
                    </Col>

                    <Col span={6}>
                      <FormAntd.Item label="Язык" labelCol={{ span: 24 }}>
                        <Select
                          value={formik.values['language']}
                          onChange={handleSelectChange('language')}
                        >
                          <Select.Option value="kk">Казахский</Select.Option>
                          <Select.Option value="ru">Русский</Select.Option>
                          <Select.Option value="en">Английский</Select.Option>
                        </Select>
                      </FormAntd.Item>
                    </Col>

                    <Col span={24}>
                      <FormAntd.Item label="Эл. почта" required>
                        <Input
                          type="email"
                          name="email"
                          onChange={formik.handleChange}
                        />
                      </FormAntd.Item>
                    </Col>

                    <Col span={12}>
                      <FormAntd.Item label="Телефон" required>
                        <Input
                          name="phoneNumber"
                          onChange={formik.handleChange}
                        />
                      </FormAntd.Item>
                    </Col>

                    <Col span={12}>
                      <FormAntd.Item label="Факс">
                        <Input
                          name="faxNumber"
                          onChange={formik.handleChange}
                        />
                      </FormAntd.Item>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <div className="px-4 py-4">
                <Typography.Text type="secondary">
                  Юридический адрес компании&nbsp;
                </Typography.Text>
              </div>

              <Row gutter={24} className="px-4">
                <Col span={8}>
                  <FormAntd.Item label="Регион" required>
                    <Select
                      value={formik.values['regionId']}
                      onChange={handleSelectChange('regionId')}
                    >
                      <Select.Option value="3fa85f64-5717-4562-b3fc-2c963f66afa6">
                        Регион по умолчанию
                      </Select.Option>
                    </Select>
                  </FormAntd.Item>
                </Col>

                <Col span={8}>
                  <FormAntd.Item label="Страна" required>
                    <Select
                      value={formik.values['countryId']}
                      onChange={handleSelectChange('countryId')}
                    >
                      <Select.Option value="3fa85f64-5717-4562-b3fc-2c963f66afa6">
                        Страна по умолчанию
                      </Select.Option>
                    </Select>
                  </FormAntd.Item>
                </Col>

                <Col span={8}>
                  <FormAntd.Item label="Штат/Область" required>
                    <Select
                      value={formik.values['stateId']}
                      onChange={handleSelectChange('stateId')}
                    >
                      <Select.Option value="3fa85f64-5717-4562-b3fc-2c963f66afa6">
                        Штат по умолчанию
                      </Select.Option>
                    </Select>
                  </FormAntd.Item>
                </Col>

                <Col span={8}>
                  <FormAntd.Item label="Город" required>
                    <Select
                      value={formik.values['cityId']}
                      onChange={handleSelectChange('cityId')}
                    >
                      <Select.Option value="3fa85f64-5717-4562-b3fc-2c963f66afa6">
                        Город по умолчанию
                      </Select.Option>
                    </Select>
                  </FormAntd.Item>
                </Col>

                <Col span={8}>
                  <FormAntd.Item label="Улица" required>
                    <Input name="streetName" onChange={formik.handleChange} />
                  </FormAntd.Item>
                </Col>

                <Col span={4}>
                  <FormAntd.Item label="Строение" required>
                    <Input name="building" onChange={formik.handleChange} />
                  </FormAntd.Item>
                </Col>

                <Col span={4}>
                  <FormAntd.Item label="Офис" required>
                    <Input name="office" onChange={formik.handleChange} />
                  </FormAntd.Item>
                </Col>
              </Row>

              <div className="px-4 py-4">
                <Typography.Text type="secondary">
                  Контактные лица
                </Typography.Text>
              </div>

              <Row className="px-4">
                <Col span={24}>
                  <NoContactsAddedBlock onAddContactClick={handleAddContact} />
                </Col>
              </Row>

              <div className="px-4 py-4">
                <Typography.Text type="secondary">Комментарий</Typography.Text>
              </div>

              <Row className="px-4">
                <Col span={24}>
                  <FormAntd.Item>
                    <InputAntd.TextArea placeholder="Оставить комментарий..." />
                  </FormAntd.Item>
                </Col>
              </Row>

              <div className="flex justify-center">
                <Space>
                  <Button htmlType="submit">Сохранить</Button>
                  <Button type="default">Отменить</Button>
                </Space>
              </div>
            </FormAntd>
          </Formik>
        </Col>
        <Col span={6}>
          <div className="px-4 py-8">
            <Tabs defaultActiveKey={'contractor_details'} tabPosition="right">
              <Tabs.TabPane tab="Данные компании" key="contractor_details" />
              <Tabs.TabPane tab="Контактные лица" key="contacts" />
              <Tabs.TabPane tab="Комментарий" key="comment" />
            </Tabs>
          </div>
        </Col>
      </Row>
    </>
  );
};
