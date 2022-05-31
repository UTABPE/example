import { Button } from '@components/atoms/Button';
import { SettingsAutomation, Template, X } from '@components/atoms/Icon';
import { TableIconButton } from '@components/atoms/TableIconButton';
import { RadioButton, RadioGroup } from '@components/molecules/Radio';
import { PageMeta } from '@context/PageMetaContext';
import { Divider, Row, Typography, Form as AntdForm, notification } from 'antd';
import { FC, useState } from 'react';
import { useFormik } from 'formik';
import { BusinessProcessFormTable } from '../components/organisms/BPFormTable';
import { BusinessProcessNewFormPartButton } from '../components/molecules/BPNewFormPartButton';
import { BusinessProcessFormSelect } from '../components/organisms/BPFormSelect';
import { BusinessProcessFormTags } from '../components/molecules/BPFormTags';
import { Form } from '@components/atoms/Form';
import {
  BPFormSectionElement,
  BPSectionFormValues,
  NewBPFormPayload,
} from '../types/BusinessProcessForm';
import { useMutation } from 'react-query';
import { createBpForm } from '../api/formApi';
import * as Yup from 'yup';
import { Input } from '@components/atoms/Input';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router';

const FormItem = AntdForm.Item;

const { Title } = Typography;

type Props = {
  onClose?: () => void;
};

interface FormValues {
  title?: string;
  // selectedBPGroup?: number[];
  // selectedGroupForTaskCreation?: number[];
  formSectionSettings: BPSectionFormValues[];
}

const validationSchema = Yup.object().shape({
  title: Yup.string().required(),
  formSectionSettings: Yup.array(),
});

export const BusinessProcessFormCreationPage: FC<Props> = (props) => {
  const navigate = useNavigate();
  const formik = useFormik<FormValues>({
    initialValues: {
      title: '',
      // selectedBPGroup: [],
      // selectedGroupForTaskCreation: [],
      formSectionSettings: [
        {
          formSectionTitle: '',
          formSectionElements: [],
        },
      ],
    },
    validationSchema,
    onSubmit: (values) => {
      createFormMutation.mutate(values);
    },
  });

  const createFormMutation = useMutation(
    async (values: FormValues) => {
      const payload: NewBPFormPayload = {
        name: values.title ?? '',
        sections: values.formSectionSettings.map((_sect) => ({
          title: _sect.formSectionTitle ?? '',
          inputs: _sect.formSectionElements.map((_inp) => ({
            title: _inp.inputLabel,
            type: _inp.inputType,
          })),
        })),
      };

      return createBpForm(payload);
    },
    {
      onSuccess() {
        notification.success({ message: 'Форма создана' });

        navigate('/admin/bp');
      },
      onError(err: AxiosError) {
        notification.error({
          message: 'Произошла ошибка при создании формы',
          description: JSON.stringify(err.response, null, 2),
        });
      },
    }
  );

  const formSectionEmptyElement: BPFormSectionElement = {
    inputType: '',
    inputLabel: '',
    bpMember: undefined,
  };

  const handleCreateNewFormPart = () => {
    formik.setValues({
      title: '',
      formSectionSettings: [
        ...formik.values.formSectionSettings,
        {
          formSectionTitle: '',
          formSectionElements: [formSectionEmptyElement],
        },
      ],
    });
  };

  // const handleCreateNewRow = (formIndex: number) => {
  //   formik.setValues({
  //     formSectionSettings: formik.values.formSectionSettings.map((section, i) =>
  //       formIndex !== i
  //         ? section
  //         : {
  //             ...section,
  //             formSectionElements: [
  //               ...section.formSectionElements,
  //               formSectionEmptyElement,
  //             ],
  //           }
  //     ),
  //   });
  // };

  // function handleRemoveTagClick(
  //   fieldName: 'selectedBPGroup' | 'selectedGroupForTaskCreation'
  // ) {
  //   return function (tagIndex: number) {
  //     formik.setFieldValue(
  //       fieldName,
  //       formik.values[fieldName]?.filter((i: number) => i !== tagIndex)
  //     );
  //   };
  // }

  const onSettingsFormSort =
    (formIndex: number) =>
    ({ ...props }) => {
      // if (props.oldIndex !== props.newIndex) {
      //   const newData = arrayMoveImmutable(
      //     settingsFormsData[formIndex].children,
      //     props.oldIndex,
      //     props.newIndex
      //   ).filter((el: any) => !!el);
      //   setSettingsFormsData((prevVal) =>
      //     prevVal.map((formGroup, i) =>
      //       formIndex !== i ? formGroup : { ...formGroup, children: newData }
      //     )
      //   );
      // }
    };

  return (
    <>
      <PageMeta
        title="Бизнес-процессы"
        openMenuKeys={['administration']}
        selectedMenuKeys={['bp-constructor']}
        breadcrumbs={[
          { title: 'Администрирование' },
          { title: 'Бизнес-процессы', link: '/admin/bp' },
          { title: 'Создание формы', link: '/admin/bp/form' },
        ]}
      />
      <Form
        layout="vertical"
        onSubmitCapture={() => {
          formik.submitForm();
        }}
      >
        <Row align="middle" justify="space-between" className="mt-4">
          <Title className="text-primary font-medium text-lg">
            Компонент бизнес-процесса «Создание»
          </Title>
          <TableIconButton
            icon={<X />}
            className="text-gray-7"
            onClick={props.onClose}
          />
        </Row>
        <Divider type="horizontal" className="mt-4" />

        <FormItem
          label="Название формы"
          validateStatus={formik.errors.title && 'error'}
        >
          <Input
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
        </FormItem>

        {/* <BusinessProcessFormSelect
          title="Настройка групп доступа участников бизнес-процесса"
          placeholderTitle="Группа (-ы) прав доступа участников бизнес-процесса "
          onChange={(v) => formik.setFieldValue('selectedBPGroup', v)}
        />
        <BusinessProcessFormTags
          selectedGroups={formik.values.selectedBPGroup}
          onTagRemoveClick={handleRemoveTagClick('selectedBPGroup')}
        />
        <Divider type="horizontal" />
        <BusinessProcessFormSelect
          title="Настройка групп доступа для создания задачи"
          placeholderTitle="Группа (-ы) прав доступа, назначенная (-ые) для создания Бизнес-процесса"
          onChange={(v) =>
            formik.setFieldValue('selectedGroupForTaskCreation', v)
          }
        />
        <BusinessProcessFormTags
          selectedGroups={formik.values.selectedGroupForTaskCreation}
          onTagRemoveClick={handleRemoveTagClick(
            'selectedGroupForTaskCreation'
          )}
        /> */}
        <Divider type="horizontal" />

        <Row align="middle" justify="space-between" className="w-full">
          <Title className="text-gray-9 font-normal text-lg">
            Настройка элементов формы
          </Title>
          <RadioGroup>
            <RadioButton value={'minimize'}>
              <SettingsAutomation />
            </RadioButton>
            <RadioButton value={'fullscreen'}>
              <Template />
            </RadioButton>
          </RadioGroup>
        </Row>
        {formik.values.formSectionSettings?.map((section, i) => (
          <BusinessProcessFormTable
            sectionData={section}
            onSort={onSettingsFormSort(i)}
            // onAddRowClick={() => handleCreateNewRow(i)}
            onSubmit={(values) => {
              formik.setValues({
                ...formik.values,
                formSectionSettings: formik.values.formSectionSettings.map(
                  (_sect, _nextIndex) =>
                    _nextIndex === i ? { ...values } : _sect
                ),
              });
              console.log('table submit handle', values);
            }}
          />
        ))}
        <BusinessProcessNewFormPartButton
          onClick={handleCreateNewFormPart}
          title="Добавить раздел формы"
        />
        <Button className="mx-auto my-8 text-sm" htmlType="submit">
          Сохранить
        </Button>
      </Form>
    </>
  );
};
