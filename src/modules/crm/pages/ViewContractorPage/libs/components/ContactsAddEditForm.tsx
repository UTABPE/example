import React, {
  FC,
  MouseEventHandler,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {
  Card,
  Col,
  Form,
  Input as InputAntd,
  Row,
  Select,
  Space,
  Tabs,
  Typography,
  Upload,
} from 'antd';
import { Button } from '@components/atoms/Button';
import tw from 'twin.macro';
import { CloudUpload, Plus, Trash } from '@components/atoms/Icon';
import { css } from '@emotion/react';
import { Input } from '@components/atoms/Input';
import { Contact } from '@modules/crm/types/Contact';
import { InputWithPreviousVal } from '@modules/crm/pages/ViewContractorPage/libs/components/InputWithPreviousVal';
import { SelectWithPreviousVal } from '@modules/crm/pages/ViewContractorPage/libs/components/SelectWithPreviousVal';

const Dragger = Upload.Dragger;

export const ContactsAddEditForm: FC<{
  edit?: boolean;
  contacts?: ReadonlyArray<Contact>;
  // currentContact: string;
  // contactTabs: ReadonlyArray<Record<string, unknown>>;
  // onContactsTabClick: (
  //   activeKey: string,
  //   e: React.KeyboardEvent<Element> | React.MouseEvent<Element, MouseEvent>
  // ) => void;
  // onRemoveContactClick: (index: number) => void;
}> = ({ edit, contacts }) => {
  // const handleContactsTabClick = useCallback(onContactsTabClick, []);
  // const handleRemoveContactClick = useCallback<
  //   (index: number) => MouseEventHandler<HTMLButtonElement>
  // >(
  //   (index) => (e) => {
  //     e.stopPropagation();
  //     console.log(index);
  //     onRemoveContactClick(index);
  //   },
  //   [onRemoveContactClick]
  // );
  const [contactTabs, setContactTabs] = useState<
    ReadonlyArray<Contact> | undefined
  >(contacts);
  const [currentContactId, setCurrentContactId] = useState('contact_0');
  const [currentContact, setCurrentContact] = useState(
    contacts && contacts.length > 0 ? contacts[0] : {}
  );

  const handleContactsTabClick = useCallback(
    (key, e: React.KeyboardEvent | React.MouseEvent) => {
      if (key === 'addNew') {
        setContactTabs((old) => (old ? [...old, {}] : [{}]));
      } else {
        setCurrentContactId(key);
        console.log(key.split('_'));
        console.log(parseInt(key.split('_')[1], 10));
        setCurrentContact(contactTabs?.[parseInt(key.split('_')[1], 10)] ?? {});
      }
    },
    []
  );
  useEffect(() => {
    console.log(currentContact);
  }, [currentContact]);
  const handleRemoveContactClick = useCallback<
    (index: number) => MouseEventHandler<HTMLButtonElement>
  >(
    (index) => (e) => {
      e.stopPropagation();
      console.log(index);
      setContactTabs((old) =>
        old ? old.slice(0, index).concat(old.slice(index + 1)) : []
      );
    },
    []
  );
  return (
    <>
      <div className="pt-8 pb-6">
        <Typography.Text type="secondary">Контактные лица</Typography.Text>
      </div>
      <Row gutter={24}>
        <Col span={24}>
          <Tabs
            activeKey={currentContactId}
            onTabClick={handleContactsTabClick}
          >
            {contactTabs?.map((tab, index) => (
              <Tabs.TabPane
                tab={
                  <span>
                    {index + 1}.{' '}
                    {`${tab.firstName} ${tab.lastName}` ??
                      `Контактное лицо ${index + 1}`}
                    <Button
                      type="text"
                      css={css`
                        padding-left: 3px;
                        ${tw`inline py-0 h-8 w-8 min-w-0 rounded-full text-gray-7
                         hover:(text-darkBlue-15 bg-blue-15)
                         active:(text-darkBlue-15 bg-blue-35)
                         disabled:(text-gray-5 bg-transparent)`}
                      `}
                      onClick={handleRemoveContactClick(index)}
                    >
                      <Trash />
                    </Button>
                  </span>
                }
                key={`contact_${index}`}
              />
            ))}

            <Tabs.TabPane
              tab={
                <Button
                  type="text"
                  css={css`
                    ${tw`inline p-0 text-gray-7 h-6 w-6 min-w-0 rounded-full bg-gray-1
                         hover:(text-darkBlue-15 bg-blue/25)
                         active:(text-darkBlue-15 bg-blue/40)
                         disabled:(text-gray-7 bg-gray-7)`}
                    font-size: 11px;
                    padding-left: 3px;
                  `}
                >
                  <Plus />
                </Button>
              }
              key="addNew"
            />
          </Tabs>
        </Col>
        <Col span={24}>
          <Card css={tw`border-0 pb-4`} bodyStyle={tw`bg-gray-0 pb-0`}>
            <Row gutter={24}>
              <Col span={8}>
                <div className="pt-4 px-4">
                  <Dragger className="py-8">
                    <p className="ant-upload-drag-icon text-[32px]">
                      <CloudUpload />
                    </p>
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
                  <Col span={12}>
                    <Form.Item label="Фамилия" labelCol={{ span: 24 }}>
                      {edit ? (
                        <InputWithPreviousVal value={currentContact.lastName} />
                      ) : (
                        <Input />
                      )}
                    </Form.Item>
                  </Col>

                  <Col span={12}>
                    <Form.Item label="Имя" labelCol={{ span: 24 }}>
                      {edit ? (
                        <InputWithPreviousVal
                          value={currentContact.firstName}
                        />
                      ) : (
                        <Input />
                      )}
                    </Form.Item>
                  </Col>

                  <Col span={12}>
                    <Form.Item label="Отчество" labelCol={{ span: 24 }}>
                      {edit ? (
                        <InputWithPreviousVal
                          value={`${currentContact.firstName} ${currentContact.lastName}`}
                        />
                      ) : (
                        <Input />
                      )}
                    </Form.Item>
                  </Col>

                  <Col span={12}>
                    <Form.Item label="Форма обращения" labelCol={{ span: 24 }}>
                      {edit ? (
                        <SelectWithPreviousVal defaultValue={'Mr.'}>
                          <Select.Option>Mr.</Select.Option>
                          <Select.Option>Ms.</Select.Option>
                          <Select.Option>Mrs.</Select.Option>
                        </SelectWithPreviousVal>
                      ) : (
                        <Select>
                          <Select.Option>Mr.</Select.Option>
                          <Select.Option>Ms.</Select.Option>
                          <Select.Option>Mrs.</Select.Option>
                        </Select>
                      )}
                    </Form.Item>
                  </Col>
                </Row>
              </Col>

              <Col span={12}>
                <Form.Item label="Должность" labelCol={{ span: 24 }}>
                  {edit ? (
                    <InputWithPreviousVal value={currentContact.workPosition} />
                  ) : (
                    <Input />
                  )}
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item label="Эл. адрес" labelCol={{ span: 24 }}>
                  {edit ? (
                    <InputWithPreviousVal value={currentContact.email} />
                  ) : (
                    <Input />
                  )}
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="Рабочий Телефон" labelCol={{ span: 24 }}>
                  {edit ? (
                    <InputWithPreviousVal value={currentContact.workPhone} />
                  ) : (
                    <Input />
                  )}
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="Мобильный Телефон" labelCol={{ span: 24 }}>
                  {edit ? (
                    <InputWithPreviousVal value={currentContact.mobilePhone} />
                  ) : (
                    <Input />
                  )}
                </Form.Item>
              </Col>
            </Row>
          </Card>

          <hr css={tw`border-gray-4 mt-4 pb-4`} />

          <div className="px-4 py-4">
            <Typography.Text type="secondary">Комментарий</Typography.Text>
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
        </Col>
      </Row>
    </>
  );
};
