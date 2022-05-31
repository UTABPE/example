import { Table as TableAntd, TablePaginationConfig } from 'antd';
import { Desascending } from '@components/atoms/Icon';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { BPDefinition } from '../../types/business-process/businessProcess';
import styled from '@emotion/styled';
import tw from 'twin.macro';

const ColumnTitle: React.FC<{ title: string }> = ({ title }) => (
  <div className="flex items-center justify-between">
    {title}
    <Desascending />
  </div>
);

type Props = {
  processes: Record<string, unknown>[];
  getBpLink?: (bp: BPDefinition) => string;
  isLoading?: boolean;
};

const Table = styled(TableAntd)`
  .ant-table-row {
    ${tw`text-gray-8`}
  }
  .ant-table-row:hover {
    ${tw`text-darkBlue-15`}
  }
  .ant-table-row a {
    ${tw`text-gray-8`}
  }
  .ant-table-row:hover a {
    ${tw`text-darkBlue-15`}
  }
  .ant-table-row-expand-icon-cell {
    ${tw`px-0 py-4`}
    border-right: none !important;
    button {
      ${tw`text-gray-8`}
    }
  }
`;

export const BusinessProcessListTable: FC<Props> = (props) => {
  return (
    <Table
      loading={props.isLoading}
      className="w-full"
      dataSource={props.processes}
      pagination={false}
    >
      <TableAntd.Column
        title={<ColumnTitle title="Название бизнес-процесса" />}
        dataIndex="name"
        render={(d, bp: BPDefinition) =>
          (
            <Link
              className="text-gray-8 text-sm"
              to={props.getBpLink ? props.getBpLink(bp) : '#'}
            >
              {d}
            </Link>
          ) || '-'
        }
      />
      <TableAntd.Column
        title={<ColumnTitle title="Описание" />}
        dataIndex="description"
        render={(d) => d || '-'}
      />
      <TableAntd.Column
        title={<ColumnTitle title="Модуль" />}
        dataIndex="moduleId"
        render={(d) => d || '-'}
      />
      <TableAntd.Column
        title={<ColumnTitle title="Автор" />}
        dataIndex="authorId"
        render={(d) => d || '-'}
      />
    </Table>
  );
};
