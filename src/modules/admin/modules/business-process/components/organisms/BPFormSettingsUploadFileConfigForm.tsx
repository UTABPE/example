import { FileUpload } from '@components/atoms/Icon';
import { Input } from '@components/atoms/Input';
import { ConditionalCheckbox } from '@components/molecules/ConditionalCheckbox/component';
import { RadioButton, RadioGroup } from '@components/molecules/Radio';
import styled from '@emotion/styled';
import { Form, Row, Typography, Upload } from 'antd';
import { FC } from 'react';
import tw from 'twin.macro';
import { BusinessProcessFormSettingsAdditionalSettings } from './BPFormSettingsAdditionalSettings';
import { BusinessProcessFormSettingsUploadFileFormats } from './BPFormSettingsUploadFileFormats';
const { Title, Text } = Typography;
const { Dragger } = Upload;
const FormBase = styled(Form)`
  .ant-form-item {
    ${tw`mb-0`}
  }
`;
const FormItemInputWrapper = styled(Row)`
  ${tw`bg-gray-0 hover:bg-blue-5 py-4 px-5 mt-3 mb-6`}
  .ant-divider {
    ${tw`my-3`}
  }
  &:hover {
    .ant-divider {
      ${tw` border-blue-40`}
    }
  }
  .ant-form-item:hover {
    .ant-form-item-label > label {
      ${tw`text-darkBlue-15`}
    }
  }
  .ant-form-item-label > label {
    ${tw`font-medium text-xs text-gray-7`}
  }
  .ant-col:last-child {
    .ant-divider {
      ${tw`hidden`}
    }
  }
`;

export const BusinessPRocessFormSettingsUploadFileConfigForm: FC = () => {
  return (
    <FormBase className="w-full" layout="vertical">
      <Title className="text-gray-9 font-medium text-base">
        Основные настройки
      </Title>
      <ConditionalCheckbox
        suffix={
          <FormItemInputWrapper>
            <Form.Item>
              <Input size="small" />
            </Form.Item>
          </FormItemInputWrapper>
        }
      >
        Ограничения по размеру загружаемого файла*
      </ConditionalCheckbox>
      <ConditionalCheckbox
        suffix={
          <FormItemInputWrapper>
            <Form.Item>
              <Input size="small" />
            </Form.Item>
          </FormItemInputWrapper>
        }
      >
        Ограничение по количеству подгружаемых файлов*
      </ConditionalCheckbox>
      <ConditionalCheckbox
        suffix={
          <FormItemInputWrapper>
            <BusinessProcessFormSettingsUploadFileFormats />
          </FormItemInputWrapper>
        }
      >
        Ограничение принимаемых форматов
      </ConditionalCheckbox>
      <Row align="middle" justify="space-between" className="w-full">
        <Title className="text-gray-9 font-medium text-base">
          Предварительный просмотр
        </Title>
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
      <FormItemInputWrapper>
        <Form.Item label="Прикрепить файл (-ы)" className="w-full">
          <Dragger className="border-darkBlue-15 flex flex-row items-center justify-center py-4">
            <Text className="text-darkBlue-15 text-xs mr-4">
              Перетащите файл сюда
            </Text>
            <Text className="text-darkBlue-15 font-medium text-sm">
              <FileUpload /> Выберите файл
            </Text>
          </Dragger>
        </Form.Item>
      </FormItemInputWrapper>
      {/* <BusinessProcessFormSettingsAdditionalSettings /> */}
    </FormBase>
  );
};
