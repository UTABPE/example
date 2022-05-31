import { useFormik } from 'formik';
import React, { FC } from 'react';
import {
  Form as FormAntd,
  Select,
  Input as InputAntd,
  Divider,
  Space,
} from 'antd';
import { Input } from '@components/atoms/Input';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import * as Yup from 'yup';
import { Button } from '@components/atoms/Button';
import { moduleApi } from '@modules/admin/modules/business-modules/api/businessModulesApi';
import { useQuery } from 'react-query';
import {
  Module,
  ModuleSection,
} from '@modules/admin/modules/business-modules/types/Module';
import { getFormsList } from '../../api/bpmnApi';
import { ChevronDown } from '@components/atoms/Icon';

type FormValues = {
  name: string;
  moduleId: string;
  moduleSectionId: string;
  description?: string;
  formId: string;
};

type Props = {
  isLoading?: boolean;
  onCancel?: () => void;
  onSubmit?: (values: FormValues) => void;
};

const Form = styled(FormAntd)`
  label {
    ${tw`text-xs text-gray-7 flex flex-row-reverse justify-end before:ml-1`}
  }
`;

const defaultPageNumber = 0;
const defualtPageSize = 20;

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  moduleId: Yup.string().required(),
  description: Yup.string(),
  formId: Yup.string().required(),
});

export const NewBpForm: FC<Props> = (props) => {
  const formik = useFormik<FormValues>({
    initialValues: {
      name: '',
      moduleId: '',
      moduleSectionId: '',
      description: '',
      formId: '',
    },
    validationSchema,
    onSubmit(values) {
      if (props.onSubmit) {
        props.onSubmit(values);
      }
    },
  });

  const { data: modules, isLoading: isModulesLoading } = useQuery(
    'getAllModules',
    () =>
      moduleApi
        .getAllModules(defaultPageNumber, defualtPageSize)
        .then((res) => res.data),
    {
      refetchOnWindowFocus: false,
    }
  );

  const { data: moduleSections, isLoading: isModuleSectionsLoading } = useQuery(
    ['getModuleSections', formik.values.moduleId],
    () =>
      moduleApi
        .getModuleSections(formik.values.moduleId)
        .then((res) => res.data),
    {
      refetchOnWindowFocus: false,
    }
  );

  const { data: forms, isLoading: isFormsLoading } = useQuery(
    'getForms',
    () => getFormsList().then((res) => res.data),
    {
      refetchOnWindowFocus: false,
    }
  );
  console.log(forms);

  return (
    <Form
      layout="vertical"
      onSubmitCapture={() => {
        formik.submitForm();
      }}
    >
      <FormAntd.Item
        label="Наименование бизнес-процесса"
        validateStatus={formik.errors.name && 'error'}
        help={formik.errors.name}
        required
      >
        <Input
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
      </FormAntd.Item>

      <FormAntd.Item
        label="Модуль"
        required
        validateStatus={formik.errors.moduleId && 'error'}
        help={formik.errors.moduleId}
      >
        <Select
          value={formik.values.moduleId}
          loading={isModulesLoading}
          onChange={(val) => formik.setFieldValue('moduleId', val)}
          suffixIcon={<ChevronDown />}
        >
          {modules?.content.map((m: Module) => (
            <Select.Option key={m.moduleId} value={m.moduleId}>
              {m.name}
            </Select.Option>
          ))}
        </Select>
      </FormAntd.Item>

      <FormAntd.Item
        label="Раздел модуля"
        validateStatus={formik.errors.moduleSectionId && 'error'}
        help={formik.errors.moduleSectionId}
      >
        <Select
          disabled={formik.values.moduleId?.length <= 0}
          value={formik.values.moduleSectionId}
          onChange={(val) => formik.setFieldValue('moduleSectionId', val)}
          suffixIcon={<ChevronDown />}
        >
          {moduleSections?.content.map((s: ModuleSection) => (
            <Select.Option key={s.sectionId} value={s.sectionId}>
              {s.name}
            </Select.Option>
          ))}
        </Select>
      </FormAntd.Item>

      <FormAntd.Item label="Описание">
        <InputAntd.TextArea
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
        />
      </FormAntd.Item>

      <FormAntd.Item
        label="Форма для заполнения"
        required
        validateStatus={formik.errors.formId && 'error'}
        help={formik.errors.formId}
      >
        <Select
          value={formik.values.formId}
          onChange={(val) => formik.setFieldValue('formId', val)}
          suffixIcon={<ChevronDown />}
        >
          {forms?.content?.map((fo: any) => (
            <Select.Option key={fo.id} value={fo.id}>
              {fo.name}
            </Select.Option>
          ))}
        </Select>
      </FormAntd.Item>

      {/* <FormAntd.Item>
        <Checkbox disabled>Сделать доступным на странице «Сервисы»</Checkbox>
      </FormAntd.Item> */}

      <Divider />

      <Space align="center" className="flex justify-center">
        <Button
          type="default"
          loading={props.isLoading}
          onClick={props.onCancel}
        >
          Отменить
        </Button>

        <Button loading={props.isLoading} htmlType="submit">
          Создать
        </Button>
      </Space>
    </Form>
  );
};
