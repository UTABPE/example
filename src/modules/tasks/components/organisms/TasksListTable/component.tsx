import {
  DatePicker as DatePickerAntd,
  Select,
  Space,
  Table as TableAntd,
  Typography,
} from 'antd';
import { FC } from 'react';
import {
  Ascending,
  CalendarEvent,
  ChevronRight,
  Search,
} from '@components/atoms/Icon';
import { Input } from '@components/atoms/Input';
import tw from 'twin.macro';
import { TaskStatus } from '@components/molecules/TaskStatus';
import { Button } from '@components/atoms/Button';
import styled from '@emotion/styled';
import { Link, useNavigate } from 'react-router-dom';
import { getAllActiveTasks } from '@modules/tasks/api/tasksApi';
import { useQuery } from 'react-query';
import { Task } from '@modules/tasks/types/tasks';

const { Text } = Typography;

const data = [
  {
    key: 1,
    name: '«Опасное условие» (ID 12345)',
    createdDate: '01 ноя. 2021 г.',
    responsiblePerson: 'Иванов Иван Иванович',
    status: <TaskStatus title="Новая" status={1} />,
    executionPeriod: '01 ноя. 2021 г.',
  },
  {
    key: 2,
    name: 'Бизнес-процесс “Название процесса”',
    createdDate: '01 ноя. 2021 г.',
    responsiblePerson: 'Иванов Иван Иванович',
    status: <TaskStatus title="На доработке" status={3} />,
    executionPeriod: '01 ноя. 2021 г.',
  },
  {
    key: 3,
    name: 'Бизнес-процесс “Название процесса”',
    createdDate: '01 ноя. 2021 г.',
    responsiblePerson: 'Иванов Иван Иванович',
    status: <TaskStatus title="В ожидании" status={2} />,
    executionPeriod: '01 ноя. 2021 г.',
  },
  {
    key: 4,
    name: 'Бизнес-процесс “Название процесса”',
    createdDate: '01 ноя. 2021 г.',
    responsiblePerson: 'Иванов Иван Иванович',
    status: <TaskStatus title="Завершена" status={4} />,
    executionPeriod: '01 ноя. 2021 г.',
  },
];

const ColumnTitle: React.FC<{ title: string }> = ({ title }) => (
  <div className="flex items-center justify-between w-full">
    {title}
    <Ascending />
  </div>
);

const Table = styled(TableAntd)`
  .ant-table-row {
    ${tw`text-gray-8`}
    &:hover {
      cursor: pointer;
      td {
        ${tw`text-primary`}
      }
    }
  }
  .ant-table-row-expand-icon-cell {
    ${tw`px-0 py-4`}
    border-right: none !important;
    button {
      ${tw`text-gray-8`}
    }
  }
`;
const DatePicker = styled(DatePickerAntd)`
  input {
    ${tw`text-sm`}
  }
`;

export const TasksListTable: FC = () => {
  const navigate = useNavigate();

  const { data: tasksList, isLoading } = useQuery(
    'getAllActiveTasks',
    () => getAllActiveTasks().then((res) => res.data),
    {
      refetchOnWindowFocus: false,
    }
  );

  console.log(tasksList?.content);

  return (
    <Table
      bordered
      dataSource={tasksList?.content}
      // expandable={{
      //   columnWidth: 20,
      //   rowExpandable: () => true,
      //   expandedRowRender: (item) => <Text>Hello </Text>,
      //   expandIcon: ({ record: item, onExpand }) => (
      //     <Space wrap>
      //       <Button
      //         type="text"
      //         buttonSize="xxs"
      //         onClick={(event) => {
      //           onExpand(item, event);
      //         }}
      //         icon={<ChevronRight />}
      //       />
      //     </Space>
      //   ),
      // }}
      pagination={false}
      className="w-full"
    >
      <TableAntd.Column
        title={<ColumnTitle title="Название задачи" />}
        dataIndex="name"
        render={(name, record: Task) => (
          <Link to={`/tasks/${record.businessKey}`}>{name}</Link>
        )}
      />
      <TableAntd.Column
        title={
          <Space direction="vertical" css={tw`w-full`}>
            <ColumnTitle title="Создано" />
            <DatePicker
              size="small"
              placeholder="ЧЧ мес. ГГГГ"
              className="w-full"
              suffixIcon={<CalendarEvent />}
            />
          </Space>
        }
        dataIndex="startDate"
        render={() => '27.05.2022'}
      />
      <TableAntd.Column
        title={
          <Space direction="vertical" className="w-full">
            <ColumnTitle title="Ответственный" />
            <Input
              size="small"
              placeholder="Ф.И.О."
              prefix={<Search />}
              className="py-0.5 px-2"
            />
          </Space>
        }
        render={() => 'Абдугалимов Галымжан'}
      />
      <TableAntd.Column
        title={
          <Space direction="vertical" className="w-full">
            <ColumnTitle title="Статус" />
            <Select className="w-full" size="small" />
          </Space>
        }
        dataIndex="name"
        render={() => <TaskStatus title="Новая" status={1} />}
      />

      <TableAntd.Column
        title={
          <Space direction="vertical" className="w-full">
            <ColumnTitle title="Срок выполнения" />
            <DatePicker
              size="small"
              placeholder="ЧЧ мес. ГГГГ"
              className="w-full"
              suffixIcon={<CalendarEvent />}
            />
          </Space>
        }
        render={() => '27.05.2022'}
      />
    </Table>
  );
};
