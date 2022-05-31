import { Button } from '@components/atoms/Button';
import { Eye, EyeOff, Pencil, RequiredToFill } from '@components/atoms/Icon';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import styled from '@emotion/styled';
import { Dropdown, Menu } from 'antd';
import { useState } from 'react';
import tw from 'twin.macro';

const permissions = [
  { icon: <EyeOff />, title: 'Скрыто' },
  { icon: <RequiredToFill />, title: 'Обязательно' },
  { icon: <Pencil />, title: 'Опционально' },
  { icon: <Eye />, title: 'Только просмотр' },
];

const DropdownMenu = styled(Menu)`
  ${tw`shadow-dropdown border border-primary`}
  .ant-dropdown-menu-item {
    ${tw`flex items-center flex-row hover:bg-blue-15 hover:text-primary`}
    .ant-dropdown-menu-title-content {
      ${tw`text-gray-8 flex flex-row items-center text-sm`}
      span:first-of-type {
        ${tw`text-base! mr-2 w-6 h-6`}
      }
    }
    &:hover {
      .ant-dropdown-menu-title-content {
        ${tw`text-primary`}
      }
    }
  }
`;

export const BusinessProcessFormDropdown = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const defaultPermission = { icon: <Eye />, title: 'Только просмотр' };
  const [selectedPermission, setSelectedPermission] =
    useState(defaultPermission);
  const handleMenuItemClick = (per: {
    icon: EmotionJSX.Element;
    title: string;
  }) => {
    setSelectedPermission(per);
    setIsDropdownVisible(false);
  };
  return (
    <Dropdown
      overlay={
        <DropdownMenu>
          {permissions.map((per, index) => (
            <Menu.Item key={index} onClick={() => handleMenuItemClick(per)}>
              {per.icon}
              {per.title}
            </Menu.Item>
          ))}
        </DropdownMenu>
      }
      trigger={['click']}
      visible={isDropdownVisible}
    >
      <Button
        ghost
        icon={selectedPermission.icon}
        onClick={() => setIsDropdownVisible(!isDropdownVisible)}
        className="border border-gray-5 flex items-center h-8 rounded-2xl w-max pr-3 pl-1 text-gray-8 text-sm hover:bg-blue-5 hover:text-primary hover:border-primary hover:shadow-dropdown"
      >
        {selectedPermission.title}
      </Button>
    </Dropdown>
  );
};
