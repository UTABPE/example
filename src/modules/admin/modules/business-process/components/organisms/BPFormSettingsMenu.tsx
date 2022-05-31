import { ChevronRight } from '@components/atoms/Icon';
import styled from '@emotion/styled';
import { BPFormInputType } from '../../types/BusinessProcessForm';
import { Menu } from 'antd';
import { FC } from 'react';
import tw from 'twin.macro';

const { SubMenu } = Menu;

const SideBarMenu = styled(Menu)`
  ${tw`w-[272px] bg-primary text-white text-sm border-none h-full`}
  .ant-menu-sub {
    ${tw`bg-primary text-white`}
  }
  .ant-menu-submenu-title {
    ${tw`hover:bg-darkBlue-30 hover:text-white h-10 px-3! w-full`}
    span:first-of-type {
      ${tw`text-[16px]`}
    }
    .ant-menu-submenu-arrow {
      display: none;
    }
  }
  .ant-menu-submenu-open {
    .ant-menu-submenu-title {
      span:first-of-type {
        transform: rotate(90deg);
        transition: all 0.4s ease;
      }
    }
  }
  .ant-menu-item {
    ${tw`hover:bg-darkBlue-30 hover:text-white text-sm h-10 pl-5! w-full`}
    .ant-menu-title-content {
      ${tw`flex justify-between w-full items-center border-l border-white p-8`};
    }
  }
  .ant-menu-item:after {
    border-right: transparent;
  }
  .ant-menu-item-selected {
    ${tw`bg-darkBlue-30! text-white!`}
  }
  .ant-menu-submenu-selected {
    .ant-menu-submenu-title {
      ${tw`bg-primary text-white!`}
    }
  }
`;

export const BusinessProcessFormSettingsMenu: FC<{
  onMenuItemClick: ({ key }: { key: string }) => void;
}> = ({ onMenuItemClick }) => {
  return (
    <div>
      <SideBarMenu
        mode="inline"
        theme="dark"
        defaultOpenKeys={['textFields']}
        onClick={onMenuItemClick}
      >
        <SubMenu
          key="textFields"
          title="Текстовое поле"
          icon={<ChevronRight />}
        >
          <Menu.Item key={BPFormInputType.SingleTextField}>
            Однострочное поле
          </Menu.Item>
          {/* <Menu.Item key={BPFormInputType.TextArea}>
            Текстовая область
          </Menu.Item>
          <Menu.Item key={BPFormInputType.FormattedText}>
            Форматируемый текст
          </Menu.Item> */}
        </SubMenu>
        <SubMenu
          key="numberFields"
          title="Числовое поле"
          icon={<ChevronRight />}
        >
          {/* <Menu.Item key={BPFormInputType.NumberInteger}>Целое число</Menu.Item> */}
          <Menu.Item key={BPFormInputType.NumberFraction}>
            Дробное число
          </Menu.Item>
        </SubMenu>
        {/* <SubMenu
          key="percentageFields"
          title="Поле для указания %"
          icon={<ChevronRight />}
        >
          <Menu.Item key={BPFormInputType.PercentInteger}>
            Целое число
          </Menu.Item>
          <Menu.Item key={BPFormInputType.PercentFraction}>
            Дробное число
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="dateFields"
          title="Поле даты и времени"
          icon={<ChevronRight />}
        >
          <Menu.Item key={BPFormInputType.Date}>Дата</Menu.Item>
          <Menu.Item key={BPFormInputType.DateTime}>Дата и время</Menu.Item>
          <Menu.Item key={BPFormInputType.DatePeriod}>Период с - по</Menu.Item>
        </SubMenu>
        <SubMenu
          onTitleClick={onMenuItemClick}
          key={BPFormInputType.UploadFile}
          title="Поле загрузки файла"
          icon={<ChevronRight />}
        />
        <SubMenu
          key={BPFormInputType.List}
          title="Список"
          icon={<ChevronRight />}
          onTitleClick={onMenuItemClick}
        /> */}
      </SideBarMenu>
    </div>
  );
};
