import { CircleMinus } from '@components/atoms/Icon';
import { Collapse, Input, Form } from 'antd';
const { Panel } = Collapse;

export const RowEditForm = () => {
  return (
    <Form layout="vertical">
      <Collapse defaultActiveKey={['1']}>
        <Panel key="1" header="1. Время работы" extra={<CircleMinus />}>
          <div className="flex justify-between space-x-4">
            <div className="flex-1">
              Закисление
              <Form.Item label="За отч. мес" required>
                <Input placeholder="дни" />
              </Form.Item>
            </div>
            <div className="flex-1">
              Выщелачивание
              <Form.Item label="За отч. мес" required>
                <Input placeholder="дни" />
              </Form.Item>
            </div>
          </div>
        </Panel>

        <Panel key="2" header="2. Количество скважин" extra={<CircleMinus />}>
          <div className="flex justify-between flex-col">
            <div className="flex-1">
              Откачных
              <div className="flex justify-between space-x-4">
                <div className="flex-1">
                  <Form.Item label="Всего" required>
                    <Input placeholder="дни" />
                  </Form.Item>
                </div>
                <div className="flex-1">
                  <Form.Item label="В работе" required>
                    <Input placeholder="дни" />
                  </Form.Item>
                </div>
              </div>
            </div>
            <div className="flex-1">
              Закачных
              <div className="flex justify-between space-x-4">
                <div className="flex-1">
                  <Form.Item label="Всего" required>
                    <Input placeholder="дни" />
                  </Form.Item>
                </div>
                <div className="flex-1">
                  <Form.Item label="В работе" required>
                    <Input placeholder="дни" />
                  </Form.Item>
                </div>
              </div>
            </div>
          </div>
        </Panel>

        <Panel key="3" header="3. Добыто ПР" extra={<CircleMinus />}>
          <div className="flex justify-between flex-col">
            <div className="flex-1">
              <Form.Item label="За отч. мес" required>
                <Input placeholder="дни" />
              </Form.Item>
            </div>
          </div>
        </Panel>

        <Panel key="4" header="4. Количество Ме в ПР" extra={<CircleMinus />}>
          <div className="flex justify-between flex-col">
            <div className="flex-1">
              <Form.Item label="За отч. мес" required>
                <Input placeholder="дни" />
              </Form.Item>
            </div>
          </div>
        </Panel>

        <Panel key="5" header="5. Подано Ме в ВР (МС)" extra={<CircleMinus />}>
          <div className="flex justify-between flex-col">
            <div className="flex-1">
              <Form.Item label="За отч. мес" required>
                <Input placeholder="дни" />
              </Form.Item>
            </div>
          </div>
        </Panel>

        <Panel key="6" header="6. Выпуск Ме в ГП" extra={<CircleMinus />}>
          <div className="flex justify-between flex-col">
            <div className="flex-1">
              <Form.Item label="За отч. мес" required>
                <Input placeholder="дни" />
              </Form.Item>
            </div>
          </div>
        </Panel>

        <Panel
          key="7"
          header="7. Подано растворов на закисление"
          extra={<CircleMinus />}
        >
          <div className="flex justify-between space-x-4">
            <div className="flex-1">
              Закисление
              <Form.Item label="За отч. мес" required>
                <Input placeholder="дни" />
              </Form.Item>
            </div>
            <div className="flex-1">
              Выщелачивание
              <Form.Item label="За отч. мес" required>
                <Input placeholder="дни" />
              </Form.Item>
            </div>
          </div>
        </Panel>

        <Panel key="8" header="8. Подано ВР" extra={<CircleMinus />}>
          <div className="flex justify-between flex-col">
            <div className="flex-1">
              <Form.Item label="За отч. мес" required>
                <Input placeholder="дни" />
              </Form.Item>
            </div>
          </div>
        </Panel>

        <Panel
          key="9"
          header="9. Расход серной кислоты"
          extra={<CircleMinus />}
        >
          <div className="flex justify-between space-x-4">
            <div className="flex-1">
              Закисление
              <Form.Item label="За отч. мес" required>
                <Input placeholder="дни" />
              </Form.Item>
            </div>
            <div className="flex-1">
              Выщелачивание
              <Form.Item label="За отч. мес" required>
                <Input placeholder="дни" />
              </Form.Item>
            </div>
          </div>
        </Panel>
      </Collapse>
    </Form>
  );
};
