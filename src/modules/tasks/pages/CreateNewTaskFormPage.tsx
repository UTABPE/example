import { Button } from '@components/atoms/Button';
import { Form } from '@components/atoms/Form';
import { ChevronDown, FileUpload, X } from '@components/atoms/Icon';
import { Input } from '@components/atoms/Input';
import { TableIconButton } from '@components/atoms/TableIconButton';
import { Anchor } from '@components/molecules/Anchor';
import { RadioButton, RadioGroup } from '@components/molecules/Radio';
import { PageMeta } from '@context/PageMetaContext';
import styled from '@emotion/styled';
import { BPFormInputType } from '@modules/admin/modules/business-process/types/BusinessProcessForm';
import {
  Col,
  Divider,
  Row,
  Input as InputAntd,
  Typography,
  Select as SelectAntd,
  Form as FormAntd,
} from 'antd';
import { ReactElement } from 'react';
import tw from 'twin.macro';

const FORM_SECTIONS = [
  {
    sectionTitle: 'Общие сведения',
    sectionElements: [
      {
        inputType: BPFormInputType.List,
        inputLabel: 'Ответственный',
        inputPermission: 'required',
        inputSettings: {
          placeholder: 'Иванов Алексей Иванович',
        },
      },
      {
        inputType: BPFormInputType.TextArea,
        inputLabel: 'Описание',
        inputPermission: '',
        inputSettings: {
          placeholder: 'В кабинете 0707: сломан механизм открытия окна.',
        },
      },
      {
        inputType: BPFormInputType.List,
        inputLabel: 'Место наступления события',
        inputPermission: 'required',
        inputSettings: {
          placeholder: 'Офис',
        },
      },
      {
        inputType: BPFormInputType.List,
        inputLabel: 'Месторождение/участок',
        inputPermission: 'required',
        inputSettings: {
          placeholder: '',
        },
      },
    ],
  },
  {
    sectionTitle: 'Определение опасности и корректирующего мероприятия',
    sectionElements: [
      {
        inputType: BPFormInputType.List,
        inputLabel: 'Классификация опасности (факторы влияния)',
        inputPermission: 'required',
        inputSettings: {
          placeholder: 'Другое',
        },
      },
      {
        inputType: BPFormInputType.List,
        inputLabel: 'Классификация по пирамиде Хейнрика',
        inputPermission: 'required',
        inputSettings: {
          placeholder: 'Другое',
        },
      },
      {
        inputType: BPFormInputType.List,
        inputLabel: 'Корректируещее мероприятие',
        inputPermission: 'required',
        inputSettings: {
          placeholder: 'Другое',
        },
      },
    ],
  },
];

const { Text, Title } = Typography;
const { TextArea } = InputAntd;

const Select = styled(SelectAntd)`
  .ant-select-selection-placeholder {
    ${tw`text-gray-8 font-normal text-base`}
  }
`;

export const CreateNewTaskFromPage = () => {
  const getSpecificInput: (placeholder: string) => {
    [key: string]: ReactElement;
  } = (placeholder: string) => ({
    textArea: (
      <TextArea
        placeholder={placeholder}
        className="placeholder:text-gray-8 placeholder:text-base placeholder:font-normal"
      />
    ),
    singleTextField: <Input placeholder={placeholder} />,
    numberFraction: <Input placeholder={placeholder} />,
    uploadFile: <FileUpload />,
    list: (
      <Select
        placeholder={placeholder}
        className="w-full"
        suffixIcon={<ChevronDown />}
      />
    ),
  });
  return (
    <>
      <PageMeta
        title="Панель задач"
        openMenuKeys={['tasks']}
        selectedMenuKeys={['created']}
        breadcrumbs={[
          { title: 'Панель задач', link: '/tasks/created' },
          { title: 'Создать задачу', link: '/tasks/new-task' },
        ]}
      />
      <Row align="middle" justify="space-between" className="mt-2">
        <Text className="text-primary font-medium text-base">
          Создать задачу
        </Text>
        <TableIconButton icon={<X />} className="text-gray-7" />
        <Divider type="horizontal" className="mt-2" />
      </Row>
      <Row justify="space-between" className="pt-2 pb-8">
        <Col span={16}>
          <Form layout="vertical">
            {FORM_SECTIONS.map((section) => (
              <div id={section.sectionTitle}>
                <Title className="text-gray-9 text-lg font-normal mb-6">
                  {section.sectionTitle}
                </Title>
                {section.sectionElements.map((el) => (
                  <FormAntd.Item
                    label={el.inputLabel}
                    required={el.inputPermission === 'required'}
                  >
                    {
                      getSpecificInput(el.inputSettings?.placeholder)[
                        el.inputType
                      ]
                    }
                  </FormAntd.Item>
                ))}
                <Divider className="my-8" />
              </div>
            ))}
          </Form>
          <Row justify="center" className="mb-4">
            <Button className="bg-darkBlue-75 border-none">
              Взять в работу
            </Button>
          </Row>
          <Divider className="my-8" />
          <Row
            align="middle"
            justify="space-between"
            className="w-full"
            id="История изменений"
          >
            <Title className="text-gray-9 font-normal text-lg">
              История изменений
            </Title>
            <RadioGroup>
              <RadioButton
                className="w-max font-medium text-xs rounded-none"
                buttonSize="xs"
              >
                Комментарии
              </RadioButton>
              <RadioButton
                className="w-max font-medium text-xs rounded-none"
                buttonSize="xs"
              >
                Вся история
              </RadioButton>
            </RadioGroup>
          </Row>
        </Col>
        <Anchor />
      </Row>
    </>
  );
};
