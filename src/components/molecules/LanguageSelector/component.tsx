import { Menu, Dropdown as DropdownAntd } from 'antd';
import { LanguageSelectorProps } from './props';
import { FC, useState } from 'react';
import { ChevronRight, World } from '@components/atoms/Icon';
import { Button } from '@components/atoms/Button';
import styled from '@emotion/styled';
import tw from 'twin.macro';

const Dropdown = styled(DropdownAntd)`
  ${tw`flex items-center p-2 rounded-none`}
  border: 1px solid #bbbbbb;
  right: 1px;
  &.ant-dropdown-open {
    border: 1px solid #2e51a0;
    color: #284892;
    background: #f6f8fd !important;
    .anticon:last-child {
      transform: rotate(270deg);
      transition: all 0.4s ease;
    }
  }
  &:hover {
    background: transparent !important;
  }
  &:active,
  &:focus {
    box-shadow: rgb(40 72 146 / 15%) 0px 0px 0px 2px;
    background: #f6f8fd !important;
    color: #284892;
    border: 1px solid #2e51a0;
    box-shadow: rgba(40, 72, 146, 0.15) 0px 0px 0px 2px;
  }
  .anticon:last-child {
    transform: rotate(90deg);
  }
  span {
    ${tw`font-normal flex items-center`}
  }
`;

export const LanguageSelector: FC<LanguageSelectorProps> = ({ langs }) => {
  const [selectedLang, setSelectedLang] = useState('Ru');
  const handleMenuItemClick = (l: string) => setSelectedLang(l);

  return (
    <Dropdown
      overlay={
        <Menu className="language-selector-menu">
          {langs.map((l) => (
            <Menu.Item onClick={() => handleMenuItemClick(l.code)} key={l.code}>
              {l.title}
            </Menu.Item>
          ))}
        </Menu>
      }
      trigger={['click']}
    >
      <Button buttonSize="md" type="default">
        <World />
        {selectedLang}
        <ChevronRight />
      </Button>
    </Dropdown>
  );
};
