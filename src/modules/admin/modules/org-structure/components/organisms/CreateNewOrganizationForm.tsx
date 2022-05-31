import { Button } from '@components/atoms/Button';
import { Form } from '@components/atoms/Form';
import { ChevronDown } from '@components/atoms/Icon';
import { Input } from '@components/atoms/Input';
import { Divider, Row, Select, Form as FormAntd } from 'antd';

export const CreateNewOrganizationForm = () => {
  return (
    <Form layout="vertical">
      <FormAntd.Item label="Наименование организации" required>
        <Input placeholder="Введите наименование" />
      </FormAntd.Item>
      <FormAntd.Item label="Наименование организации">
        <Select
          placeholder="Выберите организацию"
          suffixIcon={<ChevronDown />}
        />
      </FormAntd.Item>
      <FormAntd.Item label="Дополнительная информация">
        <Input />
      </FormAntd.Item>
      <Divider />
      <Row justify="center">
        <Button type="default" className="mr-4">
          Отменть
        </Button>
        <Button disabled>Сохранить</Button>
      </Row>
    </Form>
  );
};
