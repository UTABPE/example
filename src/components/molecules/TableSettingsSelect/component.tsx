import styled from '@emotion/styled';
import { Button } from '@components/atoms/Button';
import { Divider, Dropdown as DropdownAntd, Menu, Checkbox } from 'antd';
import tw from 'twin.macro';
import { ChevronRight, DragDots, X } from '../../atoms/Icon';
import { FC, useState } from 'react';
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
} from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';
import { TableIconButton } from '@components/atoms/TableIconButton';

const Dropdown = styled(DropdownAntd)`
  ${tw`flex items-center
    p-2 rounded-none border-gray-5 right-px hover:bg-blue-5 hover:shadow-dropdown `}
  width:max-content
  &.ant-dropdown-open {
    ${tw`border-darkBlue-30 text-darkBlue-15 bg-blue-5 shadow-dropdown text-darkBlue-15 border-darkBlue-30`}
    .anticon:last-child {
      transform: rotate(270deg);
      ${tw`transition-transform`}
    }
  }
  .anticon:last-child {
    transform: rotate(90deg);
  }
  span {
    ${tw`font-normal flex items-center`}
  }
`;

const CheckboxWrapper = styled.div`
  ${tw`pl-4 hover:text-primary hover:bg-blue-5 flex items-center justify-between`}
  &:hover {
    .ant-checkbox-wrapper {
      ${tw`text-primary`}
    }
  }
  .ant-checkbox-wrapper {
    ${tw`text-gray-8 text-sm`}
  }
`;

type SettingType = {
  label: string;
  value: string;
  checked: boolean;
};

type TableSettingSelectProps = {
  settingsList: SettingType[];
  setSettingsList: (settingsList: SettingType[]) => void;
};

export const TableSettingSelect: FC<TableSettingSelectProps> = ({
  settingsList,
  setSettingsList,
}) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const DragHandle = SortableHandle(() => (
    <TableIconButton
      icon={<DragDots />}
      className="text-gray-7 hover:bg-transparent hover:text-primary hover:cursor-grab"
    />
  ));

  const SortableItem = SortableElement(({ item }: { item: SettingType }) => (
    <CheckboxWrapper>
      <Checkbox value={item.value}>{item.label}</Checkbox>
      <DragHandle />
    </CheckboxWrapper>
  ));

  const SortableList = SortableContainer(
    ({ list }: { list: SettingType[] }) => {
      return (
        <ul className="w-full">
          {list.map((item, index) => (
            <SortableItem key={index} index={index} item={item} />
          ))}
        </ul>
      );
    }
  );

  const onChange = (checkedValues: any[]) => {
    const newSettingsList = settingsList.map((setting) => {
      const newSetting = { ...setting };
      newSetting.checked = checkedValues.indexOf(newSetting.value) !== -1;
      return newSetting;
    });
    setSettingsList(newSettingsList);
  };

  const onSortEnd = ({ ...props }) => {
    if (props.oldIndex !== props.newIndex) {
      const newData = arrayMoveImmutable(
        settingsList,
        props.oldIndex,
        props.newIndex
      ).filter((setting) => !!setting);
      setSettingsList(newData);
    }
  };

  const getDefaultValue = () => {
    return settingsList
      .filter((setting) => setting.checked)
      .map((setting) => setting.value);
  };

  return (
    <Dropdown
      overlay={
        <Menu className="table-settings-dropdown">
          <Menu.Item onClick={() => setIsDropdownVisible(false)}>
            Настройка таблицы <X />
          </Menu.Item>
          <Divider />
          <Checkbox.Group
            className="w-full"
            onChange={onChange}
            defaultValue={getDefaultValue()}
          >
            <SortableList
              useDragHandle
              disableAutoscroll
              onSortEnd={onSortEnd}
              list={settingsList}
            />
          </Checkbox.Group>
        </Menu>
      }
      trigger={['click']}
      visible={isDropdownVisible}
    >
      <Button
        buttonSize="md"
        type="default"
        onClick={() => setIsDropdownVisible(!isDropdownVisible)}
      >
        Настройка
        <ChevronRight />
      </Button>
    </Dropdown>
  );
};
