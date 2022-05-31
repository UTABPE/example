import { Desascending, Ascending, Neutral } from '@components/atoms/Icon';
import { MenuItemButton } from '@components/atoms/MenuItemButton';
import { TableIconButton } from '@components/atoms/TableIconButton';
import { Button } from 'antd';
import Text from 'antd/lib/typography/Text';

type Props = {
  dataIndex: string;
  title: string;
  index: number;
  activeSortColumn: number;
  columnSortStatus: 'asc' | 'desc';
  onClick: (currentColumnIndex: number, key: string) => void;
};

const getSortIcon = (state: string) => {
  switch (state) {
    case 'asc':
      return <Ascending />;
    case 'desc':
      return <Desascending />;
  }
  return <Neutral />;
};

const ColumnTitle: React.FC<Props> = ({
  dataIndex,
  index,
  title,
  columnSortStatus = 'asc',
  activeSortColumn,
  onClick,
}) => {
  const isActive = index === activeSortColumn;

  const activeClass = isActive ? 'text-darkBlue-15' : 'text-gray-6';

  return (
    <div className="flex items-center justify-between w-full">
      <Text className="text-darkBlue-15">{title}</Text>
      <TableIconButton
        shape="circle"
        type="text"
        buttonSize="xs"
        className={`${activeClass} p-1.5 hover:bg-blue-15 hover:text-darkBlue-15 focus:bg-blue-35 focus:text-darkBlue-15 rounded-full`}
        icon={
          index === activeSortColumn
            ? getSortIcon(columnSortStatus)
            : getSortIcon('')
        }
        onClick={() => onClick(index, dataIndex)}
      />
    </div>
  );
};

export default ColumnTitle;
