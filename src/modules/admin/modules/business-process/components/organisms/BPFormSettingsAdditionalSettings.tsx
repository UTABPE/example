import { Input } from '@components/atoms/Input';
import { ConditionalCheckbox } from '@components/molecules/ConditionalCheckbox/component';
import styled from '@emotion/styled';
import { Col, Divider, Form, Row, Typography } from 'antd';
import { FC } from 'react';
import tw from 'twin.macro';

const { Title } = Typography;

const FormItemInputWrapper = styled(Row)`
  ${tw`bg-gray-0 hover:bg-blue-5 py-4 px-5 mt-3 mb-6`}
  .ant-form-item:hover {
    .ant-form-item-label > label {
      ${tw`text-darkBlue-15`}
    }
  }
  .ant-form-item-label > label {
    ${tw`font-medium text-xs text-gray-7`}
  }
`;

export const BusinessProcessFormSettingsAdditionalSettings: FC = () => {
  return (
    <>
      <Divider />
      <Title className="text-gray-9 font-medium text-base">
        Дополнительные настройки
      </Title>
      <ConditionalCheckbox
        suffix={
          <FormItemInputWrapper>
            <Col span={18}>
              <Form.Item>
                <Input size="small" />
              </Form.Item>
            </Col>
          </FormItemInputWrapper>
        }
      >
        Текст-плейсхолдер
      </ConditionalCheckbox>
      <ConditionalCheckbox
        suffix={
          <FormItemInputWrapper>
            <Col span={18}>
              <Form.Item>
                <Input size="small" />
              </Form.Item>
            </Col>
          </FormItemInputWrapper>
        }
      >
        Маска ввода текста
      </ConditionalCheckbox>
      <Divider type="horizontal" />
      <ConditionalCheckbox
        suffix={
          <FormItemInputWrapper>
            <Col span={18}>
              <Form.Item>
                <Input size="small" />
              </Form.Item>
            </Col>
          </FormItemInputWrapper>
        }
      >
        Вспомогательный текст
      </ConditionalCheckbox>
      <ConditionalCheckbox
        suffix={
          <FormItemInputWrapper>
            <Col span={18}>
              <Form.Item>
                <Input size="small" />
              </Form.Item>
            </Col>
          </FormItemInputWrapper>
        }
      >
        Подсказка (тултип)
      </ConditionalCheckbox>
      <Divider type="horizontal" />
    </>
  );
};
