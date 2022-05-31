import { Button } from '@components/atoms/Button';
import { InfoCircleOutline } from '@components/atoms/Icon';
import { ConditionalCheckbox } from '@components/molecules/ConditionalCheckbox/component';
import { RadioButton, RadioGroup } from '@components/molecules/Radio';
import styled from '@emotion/styled';
import {
  Typography,
  Radio as RadioAntd,
  Divider,
  Form,
  Row,
  Input,
  Col,
} from 'antd';
import { FC, useState } from 'react';
import tw from 'twin.macro';
import { BusinessProcessFormSettingsAdditionalSettings } from './BPFormSettingsAdditionalSettings';

const { Text } = Typography;
const { TextArea } = Input;
const Title = styled(Text)`
  ${tw`text-gray-9 font-medium items-start mb-8`}
`;

const FormBase = styled(Form)`
  ${tw`w-full`}
  .ant-form-item {
    ${tw`mb-0`}
  }
`;

const Radio = styled(RadioAntd)`
  span:last-child {
    ${tw`text-sm text-gray-9`}
  }
  .ant-radio-checked {
    .ant-radio-inner {
      ${tw`bg-primary border-primary`}
      &:after {
        ${tw`bg-white`}
      }
    }
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

export const BusinessProcessFormSettingsTextAreaConfigForm: FC = () => {
  const [formType, setFormType] = useState('validation');

  const handleFormTypeToggle = (value: string) => {
    setFormType(value);
  };

  return (
    <FormBase layout="vertical">
      <Title>Основные настройки</Title>
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
        Значение по умолчанию (автоматическое заполненние поля)
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
        Ограничение по символам
      </ConditionalCheckbox>
      <Divider type="horizontal" />
      <Row align="middle" justify="space-between" className="w-full">
        <Title>Предварительный просмотр</Title>
        <RadioGroup
          onChange={({ target: { value } }) => {
            if (value === 'default' || value === 'validation') {
              handleFormTypeToggle(value);
            }
          }}
        >
          <RadioButton
            value={'default'}
            className="w-max font-medium text-xs rounded-none"
            buttonSize="xs"
          >
            По умолчанию
          </RadioButton>
          <RadioButton
            value={'validation'}
            className="w-max font-medium text-xs rounded-none"
            buttonSize="xs"
          >
            С валидацией
          </RadioButton>
        </RadioGroup>
      </Row>
      <FormItemInputWrapper>
        <Col span={18}>
          <Form.Item label="Описание">
            <TextArea rows={4} />
          </Form.Item>
        </Col>
      </FormItemInputWrapper>
      <Title>Дополнительные настройки</Title>
      {/* {formType === 'default' ? (
        <BusinessProcessFormSettingsAdditionalSettings />
      ) : (
        <>
          <Row className="text-darkBlue-80 bg-blue-5 border border-darkBlue-80 p-3 flex flex-row text-sm mt-5 flex-nowrap">
            <InfoCircleOutline />
            <Text className="text-darkBlue-80 ml-2">
              Тексты ошибок, представленных в видах проверки на валидность поля
              являются значениями, отображаемыми по умолчанию. Для просмотра
              примера текста ошибки в поле предварительного просмотра - кликните
              на радиобаттон соответствующего пункта.
            </Text>
          </Row>
          <Form.Item className="mt-5">
            <Radio>Проверка на заполненность обязательного поля</Radio>
          </Form.Item>
          <Form.Item>
            <Radio>Проверка на минимальное количество символов</Radio>
          </Form.Item>
          <Form.Item>
            <Radio>Проверка на максимальное количество символов</Radio>
          </Form.Item>
        </>
      )} */}
      <Button className="flex self-center" htmlType="submit">
        Применить
      </Button>
    </FormBase>
  );
};
