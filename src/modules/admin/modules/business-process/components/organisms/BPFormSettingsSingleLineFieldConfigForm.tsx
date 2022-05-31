import { Button } from '@components/atoms/Button';
import { FlexibleInput } from '@components/molecules/FlexibleInput';
import { Input } from '@components/atoms/Input';
import { ConditionalCheckbox } from '@components/molecules/ConditionalCheckbox/component';
import { RadioButton, RadioGroup } from '@components/molecules/Radio';
import styled from '@emotion/styled';
import { Typography, Radio, Divider, Row, Form, Col } from 'antd';
import { FC } from 'react';
import { useFormik } from 'formik';
import tw from 'twin.macro';
import { BusinessProcessFormSettingsAdditionalSettings } from './BPFormSettingsAdditionalSettings';
import { BPFormInputWrapper } from '../atoms/BPFormInputWrapper';
import { BPFormBase } from '../atoms/BPFormBase';
import * as Yup from 'yup';

const { Text } = Typography;

const Title = styled(Text)`
  ${tw`text-gray-9 font-medium`}
`;

type FormValues = {
  inputLabel: string;
};

type Props = {
  onSubmit?: (vals: FormValues) => void;
};

const validationSchema = Yup.object().shape({
  inputLabel: Yup.string().required(),
});

export const BusinessProcessFormSettingsSingleFieldConfigForm: FC<
  Props
> = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      inputLabel: '',
    },
    validationSchema,
    onSubmit(values) {
      console.log('submit input details', values);
    },
  });

  return (
    <BPFormBase
      className="w-full"
      layout="vertical"
      onSubmitCapture={(event) => {
        console.log('submit?');
        event.preventDefault();
        event.stopPropagation();
        // formik.submitForm();
      }}
    >
      <Title>Основные настройки</Title>
      <Form.Item
        label={
          <Text className="text-gray-9 text-sm p-0">
            Воспринимать значениe:
          </Text>
        }
        className="my-6 min-h-max"
      >
        <Radio.Group className="mt-3">
          <Radio value={1}>Все</Radio>
          <Radio value={2}>Только буквы</Radio>
          <Radio value={3}>Только цифры</Radio>
        </Radio.Group>
      </Form.Item>
      <ConditionalCheckbox
        suffix={
          <BPFormInputWrapper>
            <Col span={18}>
              <Form.Item>
                <Input size="small" />
              </Form.Item>
            </Col>
          </BPFormInputWrapper>
        }
      >
        Значение по умолчанию (автоматическое заполненние поля)
      </ConditionalCheckbox>
      <ConditionalCheckbox
        suffix={
          <BPFormInputWrapper align="bottom">
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
          </BPFormInputWrapper>
        }
      >
        Ограничение по символам
      </ConditionalCheckbox>
      <Divider type="horizontal" />
      <Row align="middle" justify="space-between" className="w-full">
        <Title>Предварительный просмотр</Title>
        {/* <RadioGroup>
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
        </RadioGroup> */}
      </Row>
      <FlexibleInput labelText="E-mail" />
      {/* <BusinessProcessFormSettingsAdditionalSettings /> */}
      <Row justify="center">
        <Button className="flex self-center" htmlType="submit" disabled>
          Применить
        </Button>
      </Row>
    </BPFormBase>
  );
};
