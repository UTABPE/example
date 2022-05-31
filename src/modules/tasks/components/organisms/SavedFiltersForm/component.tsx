import { FC, useState } from 'react';
import tw from 'twin.macro';
import styled from '@emotion/styled';
import {
  Col,
  Divider,
  List,
  Row,
  Typography,
  Form as FormAntd,
  Space,
} from 'antd';
import { Input } from '@components/atoms/Input';
import { Check1, X } from '@components/atoms/Icon';
import { Button } from '@components/atoms/Button';
import { TableIconButton } from '@components/atoms/TableIconButton';
const { Text } = Typography;

const savedFiltersList = ['По умолчанию'];

const Form = styled(FormAntd)`
  ${tw`flex flex-col w-80  items-start p-5`}
  .ant-space-item {
    ${tw`w-full`}
  }
  .ant-form-item {
    ${tw`mb-0`}
  }
`;

const FormTitle = styled(Text)`
  ${tw`text-lg text-gray-9 flex self-center font-normal`}
`;
const FormList = styled(List)`
  ${tw`w-full mt-8`}
  .ant-list-item {
    ${tw`text-gray-8 text-sm w-full py-[14px] px-2 border-b border-gray-4`}
  }
  .ant-list-item: last-child {
    border-bottom: 1px solid #d4d3d4;
  }
`;

const FormBottomText = styled(Text)`
  ${tw`text-gray-7 text-sm text-center flex my-5`}
`;

export const SavedFiltersForm: FC = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [data, setData] = useState(savedFiltersList);
  const [form] = FormAntd.useForm();

  const handleSaveFilterClick = () => {
    setData(data.concat('Новый фильтр'));
    setIsEditable(false);
  };

  const handleResetFilter = () => {
    form.resetFields();
    setIsEditable(false);
  };

  return (
    <Form form={form}>
      <FormTitle>Отображение таблицы</FormTitle>
      <FormList
        size="large"
        dataSource={data}
        renderItem={(item: any) => <List.Item>{item}</List.Item>}
      />
      {isEditable && (
        <Row align="middle" className="mt-2 w-full" justify="space-between">
          <Col span={18}>
            <FormAntd.Item name="filter">
              <Input size="small" />
            </FormAntd.Item>
          </Col>
          <TableIconButton
            className="text-danger hover:bg-danger-15"
            onClick={handleResetFilter}
            icon={<X />}
            buttonSize="xs"
          ></TableIconButton>
          <Divider type="vertical" className="m-0" />
          <Col span={2}>
            <TableIconButton
              buttonSize="xs"
              onClick={handleSaveFilterClick}
              className="text-success hover:bg-success-15"
              icon={<Check1 />}
            ></TableIconButton>
          </Col>
        </Row>
      )}
      <Space direction="vertical">
        {/* <Divider /> */}
        <FormBottomText>
          Сохраняйте различные настройки отображения таблицы с примененной
          фильтрацией, поиском и сортировкий для быстрого доступа к нужной
          информации.
        </FormBottomText>
        <Button
          type="primary"
          htmlType="submit"
          className="w-full"
          onClick={() => setIsEditable(true)}
          disabled={isEditable}
        >
          Сохранить
        </Button>
      </Space>
    </Form>
  );
};
