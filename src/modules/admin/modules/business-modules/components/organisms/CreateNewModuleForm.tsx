import { Button } from '@components/atoms/Button';
import { Form } from '@components/atoms/Form';
import { Plus, Trash } from '@components/atoms/Icon';
import { Input } from '@components/atoms/Input';
import { MenuItemButton } from '@components/atoms/MenuItemButton';
import { useFormik } from 'formik';
import styled from '@emotion/styled';
import {
  Col,
  Divider,
  Row,
  Input as InputAntd,
  List as ListAntd,
  Typography,
  Form as FormAntd,
  message,
} from 'antd';
import tw from 'twin.macro';
import { FC } from 'react';
import { moduleApi } from '../../api/businessModulesApi';
import { useMutation } from 'react-query';

const { TextArea } = InputAntd;
const { Text } = Typography;

const List = styled(ListAntd)`
  ${tw`overflow-y-scroll max-h-[306px]`}
  ::-webkit-scrollbar {
    ${tw`w-1`}
  }
  ::-webkit-scrollbar-thumb {
    ${tw`bg-gray-6 rounded-[3px] h-[54px]`}
  }
`;
interface FormValues {
  name: string;
  description: string;
  moduleUrl: string;
  sections: {
    name: string;
    sectionUrl: string;
  }[];
}

export const CreateNewModuleForm: FC<{
  onCancel: () => void;
  refetchModulesList: () => void;
}> = ({ onCancel, refetchModulesList }) => {
  const mutation = useMutation(
    async (payload: FormValues) => moduleApi.createModule(payload),
    {
      onSuccess() {
        message.success({
          content: `Модуль был успешно создан`,
          transitionName: 'move-down',
          className: 'custom-ant-message-success',
        });
        void refetchModulesList();
        onCancel();
      },
    }
  );

  const formik = useFormik<FormValues>({
    initialValues: {
      name: '',
      description: '',
      moduleUrl: '',
      sections: [
        {
          name: '',
          sectionUrl: '',
        },
      ],
    },
    onSubmit: (values) => {
      mutation.mutate(values);
    },
  });

  const onAddSectionClick = () => {
    formik.setValues({
      sections: [
        ...formik.values.sections,
        {
          name: '',
          sectionUrl: '',
        },
      ],
      name: '',
      description: '',
      moduleUrl: '',
    });
  };

  return (
    <Form layout="vertical" onSubmitCapture={() => formik.submitForm()}>
      <Row align="middle" justify="space-between">
        <Col span={16}>
          <FormAntd.Item label="Модуль" required>
            <Input
              name="name"
              placeholder="Наименование модуля"
              onChange={formik.handleChange}
            />
          </FormAntd.Item>
        </Col>
        <Col>
          <Divider className="w-[12px]" />
        </Col>
        <Col>
          <FormAntd.Item label="URL модуля" required>
            <Input name="moduleUrl" onChange={formik.handleChange} />
          </FormAntd.Item>
        </Col>
      </Row>
      <List
        dataSource={formik.values.sections}
        className="my-8"
        renderItem={(item, index) => (
          <Row align="middle" className="w-full">
            <Col>
              <Text className="text-gray-6 text-base font-normal">
                {index + 1}.
              </Text>
            </Col>
            <Col className="h-[122px] mx-4">
              <Divider type="vertical" className="h-full" />
            </Col>
            <Col flex="auto">
              <ListAntd.Item>
                <Col span={16}>
                  <FormAntd.Item label="Раздел модуля" required>
                    <Input
                      name={`sections.${index}.name`}
                      placeholder="Наименование раздела"
                      onChange={formik.handleChange}
                    />
                  </FormAntd.Item>
                </Col>
                <Col flex="12px">
                  <Divider className="w-[12px]" />
                </Col>
                <Col span={4}>
                  <FormAntd.Item label="URL раздела" required>
                    <Input
                      name={`sections.${index}.sectionUrl`}
                      onChange={formik.handleChange}
                    />
                  </FormAntd.Item>
                </Col>

                <Col flex="40px">
                  <MenuItemButton icon={<Trash />} />
                </Col>
              </ListAntd.Item>
            </Col>
          </Row>
        )}
      />
      <Button type="text" className="pl-0 mt-6" onClick={onAddSectionClick}>
        <Plus /> Добавить раздел
      </Button>
      <FormAntd.Item label="Описание модуля">
        <TextArea name="description" onChange={formik.handleChange} />
      </FormAntd.Item>
      <Row justify="center">
        <Button type="default" className="mr-6" onClick={onCancel}>
          Отменить
        </Button>
        <Button htmlType="submit">Сохранить</Button>
      </Row>
    </Form>
  );
};
