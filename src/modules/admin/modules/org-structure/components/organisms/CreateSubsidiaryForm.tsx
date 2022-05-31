import { Divider, Form as FormAntd, Row, Select } from 'antd';
import { Input } from '@components/atoms/Input';
import { Button } from '@components/atoms/Button';
import { Form } from '@components/atoms/Form';

export const CreateSubsidiary = () => {
  return (
    <Form layout="vertical">
      <FormAntd.Item label="Наименование организации" required>
        <Input placeholder="Введите наименование" />
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
