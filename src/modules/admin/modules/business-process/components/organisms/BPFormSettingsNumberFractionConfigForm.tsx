import { Button } from '@components/atoms/Button';
import { Input } from '@components/atoms/Input';
import { ConditionalCheckbox } from '@components/molecules/ConditionalCheckbox/component';
import { FlexibleInput } from '@components/molecules/FlexibleInput';
import { RadioButton, RadioGroup } from '@components/molecules/Radio';
import styled from '@emotion/styled';
import { Typography, Divider, Row, Form, Col } from 'antd';
import { FC } from 'react';
import tw from 'twin.macro';
import { BusinessProcessFormSettingsAdditionalSettings } from './BPFormSettingsAdditionalSettings';
const { Text } = Typography;

const Title = styled(Text)`
  ${tw`text-gray-9 font-medium`}
`;
const FormBase = styled(Form)`
  .ant-form-item {
    ${tw`mb-0`}
  }
`;

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

export const BusinessProcessFormSettingsNumberFractionConfigForm: FC = () => {
  return (
    <FormBase className="w-full" layout="vertical">
      <Title>Основные настройки</Title>
      <ConditionalCheckbox
        suffix={
          <FormItemInputWrapper>
            <Form.Item>
              <Input size="small" />
            </Form.Item>
          </FormItemInputWrapper>
        }
      >
        Значение по умолчанию
      </ConditionalCheckbox>

      <ConditionalCheckbox
        suffix={
          <FormItemInputWrapper align="bottom">
            <Form.Item>
              <Input size="small" />
            </Form.Item>
          </FormItemInputWrapper>
        }
      >
        Число десятичных знаков
      </ConditionalCheckbox>
      <ConditionalCheckbox
        suffix={
          <FormItemInputWrapper align="bottom">
            <Col>
              <Form.Item label="Минимум от">
                <Input size="small" />
              </Form.Item>
            </Col>
            <Col className="h-10 flex items-center">
              <Divider className="w-4 min-w-[16px] mx-1" />
            </Col>
            <Col>
              <Form.Item label="Максимум до">
                <Input size="small" />
              </Form.Item>
            </Col>
          </FormItemInputWrapper>
        }
      >
        Минимальное и максимальное значение
      </ConditionalCheckbox>
      <ConditionalCheckbox
        suffix={
          <FormItemInputWrapper align="bottom">
            <Col>
              <Form.Item label="Минимум от">
                <Input size="small" />
              </Form.Item>
            </Col>
            <Col className="h-10 flex items-center">
              <Divider className="w-4 min-w-[16px] mx-1" />
            </Col>
            <Col>
              <Form.Item label="Максимум до">
                <Input size="small" />
              </Form.Item>
            </Col>
          </FormItemInputWrapper>
        }
      >
        Ограничение по символам без учета разделителя и знаков
      </ConditionalCheckbox>
      <Divider type="horizontal" />
      <Row align="middle" justify="space-between" className="w-full">
        <Title>Предварительный просмотр</Title>
        <RadioGroup>
          <RadioButton
            className="w-max font-medium text-xs rounded-none"
            buttonSize="xs"
          >
            По умолчанию
          </RadioButton>
          <RadioButton
            className="w-max font-medium text-xs rounded-none"
            buttonSize="xs"
          >
            С валидацией
          </RadioButton>
        </RadioGroup>
      </Row>
      <FlexibleInput labelText="Итого" />
      {/* <BusinessProcessFormSettingsAdditionalSettings /> */}
      <Button className="flex self-center" htmlType="submit" disabled>
        Применить
      </Button>
    </FormBase>
  );
};
