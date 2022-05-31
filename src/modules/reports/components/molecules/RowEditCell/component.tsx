import { Pencil, Plus, Trash } from '@components/atoms/Icon';
import { TableIconButton } from '@components/atoms/TableIconButton';
import { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type RowEditCellProps<RecordType extends object = any> = {
  value: number;
  record: RecordType;
  index: number;
  onEdit: (index: number) => void;
};

export const RowEditCell: React.FC<RowEditCellProps> = ({
  value,
  onEdit,
  index,
}) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="w-full flex px-4 justify-between items-center space-x-1.5"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <span>{index + 1}</span>

      {!isHover && <span>{value}</span>}
      {isHover && (
        <div className="flex space-x-1.5">
          <TableIconButton
            className="hover:bg-blue-10"
            onClick={() => onEdit(index)}
          >
            <Pencil />
          </TableIconButton>

          <TableIconButton className="hover:bg-blue-10">
            <Plus />
          </TableIconButton>
          <TableIconButton className="hover:bg-blue-10">
            <Trash />
          </TableIconButton>
        </div>
      )}
    </div>
  );
};
