import { Check1, Pencil, X } from '@components/atoms/Icon';
import { Input } from '@components/atoms/Input';
import { TableIconButton } from '@components/atoms/TableIconButton';
import { Divider, InputNumber } from 'antd';
import { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type EditableCellProps<RecordType extends object = any> = {
  value: number;
  record: RecordType;
  index: number;
};

export const EditableCell: React.FC<EditableCellProps> = ({
  value,
  record,
  index,
}) => {
  const [isEdited, setIsEdited] = useState(false);
  const [newValue, setNewValue] = useState(value);
  const [currentValue, setCurrentValue] = useState(value);

  const handleResetFilter = () => {
    setNewValue(currentValue);
    setIsEdited(false);
  };
  const handleSaveFilterClick = () => {
    setCurrentValue(newValue);
    setIsEdited(false);
  };

  if (!isEdited) {
    return (
      <div className="w-full flex p-1.5 justify-end items-center space-x-1.5">
        <span>{currentValue}</span>
        <TableIconButton
          className="hover:bg-blue-10"
          onClick={() => setIsEdited(true)}
        >
          <Pencil />
        </TableIconButton>
      </div>
    );
  }

  return (
    <div className="bg-gray-0 p-1.5 w-full h-full flex justify-between items-center space-x-2">
      {/* <InputNumber value={newValue} onChange={(e) => setNewValue(Number(e))} /> */}
      <Input
        value={newValue}
        onChange={(e) => {
          return setNewValue(
            Number(e.target.value)
              ? Number(e.target.value)
              : Number(e.target.value.slice(0, -1))
          );
        }}
      />

      <div className="flex flex-1 h-full items-center space-x-1">
        <TableIconButton
          className="text-danger hover:bg-danger-15"
          onClick={handleResetFilter}
          icon={<X />}
          buttonSize="xs"
        ></TableIconButton>
        <Divider type="vertical" className="m-0" />
        <TableIconButton
          buttonSize="xs"
          onClick={handleSaveFilterClick}
          className="text-success hover:bg-success-15"
          icon={<Check1 />}
        ></TableIconButton>
      </div>
    </div>
  );
};
