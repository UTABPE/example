import React, { FC, MouseEventHandler, useCallback } from 'react';
import { Contractor } from '@modules/crm/types/Contractor';
import {
  Card,
  Col,
  Form,
  Input as InputAntd,
  Row,
  Select,
  Space,
  Typography,
  Upload,
} from 'antd';
import tw from 'twin.macro';
import { Button } from '@components/atoms/Button';
import { CloudUpload, Plus } from '@components/atoms/Icon';
import { Input } from '@components/atoms/Input';
import { ContactsAddEditForm } from '@modules/crm/pages/ViewContractorPage/libs/components/ContactsAddEditForm';
import { NoContacts } from '@modules/crm/pages/ViewContractorPage/libs/components/NoContacts';
import { InputWithPreviousVal } from '@modules/crm/pages/ViewContractorPage/libs/components/InputWithPreviousVal';
import { SelectWithPreviousVal } from '@modules/crm/pages/ViewContractorPage/libs/components/SelectWithPreviousVal';

const Dragger = Upload.Dragger;

export const ContractorEdit: FC<{
  contractor?: Contractor;
  onAddContactClick: MouseEventHandler;
}> = ({ contractor, onAddContactClick }) => {
  const handleAddContactClick = useCallback(onAddContactClick, []);
  return (
    <>
      <div className="px-4 py-8">
        <Typography.Title level={5} css={tw`(text-gray-9 font-normal)!`}>
          Данные компании
        </Typography.Title>
      </div>

      <Row gutter={24}>
        <Col span={8}>
          <div className="pt-4 px-4">
            <Dragger className="py-8">
              <p className="ant-upload-drag-icon text-[32px]">
                <CloudUpload />
              </p>

              <Typography.Text type="secondary">Лого компании</Typography.Text>
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
              <Form.Item label="Наименование" labelCol={{ span: 24 }}>
                <InputWithPreviousVal value={contractor?.companyName} />
              </Form.Item>
            </Col>

            <Col span={18}>
              <Form.Item label="Сайт компании" labelCol={{ span: 24 }}>
                <InputWithPreviousVal
                  placeholder="http://site.com"
                  value={contractor?.websiteUrl}
                />
              </Form.Item>
            </Col>

            <Col span={6}>
              <Form.Item label="Язык" labelCol={{ span: 24 }}>
                <SelectWithPreviousVal defaultValue={contractor?.language}>
                  <Select.Option>Казахский</Select.Option>
                  <Select.Option>Русский</Select.Option>
                  <Select.Option>Английский</Select.Option>
                </SelectWithPreviousVal>
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item label="Эл. почта" labelCol={{ span: 24 }}>
                <InputWithPreviousVal value={contractor?.email} />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item label="Телефон" labelCol={{ span: 24 }}>
                <InputWithPreviousVal value={contractor?.phoneNumber} />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item label="Факс" labelCol={{ span: 24 }}>
                <InputWithPreviousVal value={contractor?.faxNumber} />
              </Form.Item>
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
          <Form.Item label="Регион" labelCol={{ span: 24 }}>
            <InputWithPreviousVal value={contractor?.regionId} />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item label="Страна" labelCol={{ span: 24 }}>
            <InputWithPreviousVal value={contractor?.countryId} />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item label="Город" labelCol={{ span: 24 }}>
            <InputWithPreviousVal value={contractor?.cityId} />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item label="Район/штат" labelCol={{ span: 24 }}>
            <InputWithPreviousVal value={contractor?.streetName} />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item label="Улица" labelCol={{ span: 24 }}>
            <InputWithPreviousVal value={contractor?.streetName} />
          </Form.Item>
        </Col>

        <Col span={4}>
          <Form.Item label="Строение" labelCol={{ span: 24 }}>
            <InputWithPreviousVal value={contractor?.building} />
          </Form.Item>
        </Col>

        <Col span={4}>
          <Form.Item label="Офис" labelCol={{ span: 24 }}>
            <InputWithPreviousVal value={contractor?.office} />
          </Form.Item>
        </Col>
      </Row>

      <div className="px-4 py-4">
        <hr css={tw`border-gray-4`} />
      </div>

      <Row className="px-4">
        <Col span={24}>
          {(contractor?.contacts.length === 0 && (
            <NoContacts onAddContactClick={handleAddContactClick} />
          )) || (
            <Row gutter={24} css={tw`mt-6`}>
              <Col span={24} css={tw`mb-6`}>
                <ContactsAddEditForm edit contacts={contractor?.contacts} />
              </Col>
            </Row>
          )}
        </Col>
      </Row>
      <div className="px-4 py-4">
        <hr css={tw`border-gray-4`} />
      </div>

      <div className="px-4 py-4">
        <Typography.Title level={5} css={tw`(text-gray-9 font-normal)!`}>
          Комментарий
        </Typography.Title>
      </div>

      <Row className="px-4">
        <Col span={24}>
          <Form.Item>
            <InputAntd.TextArea placeholder="Оставить комментарий..." />
          </Form.Item>
        </Col>
      </Row>

      <div className="flex justify-center">
        <Space>
          <Button disabled>Сохранить</Button>
          <Button type="default">Отменить</Button>
        </Space>
      </div>
    </>
  );
};
