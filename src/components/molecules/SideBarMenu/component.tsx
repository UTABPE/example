import styled from '@emotion/styled';
import { Menu } from 'antd';
import tw from 'twin.macro';
import { SideBarMenuProps } from './props';

export const SideBarMenu = styled(Menu, {
  shouldForwardProp: (p) => p !== 'isSideBarCollapsed',
})<SideBarMenuProps>`
  ${tw`flex flex-col w-full`};
  max-height: 90vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0px;
  }
  ${({ isSideBarCollapsed }) =>
    (isSideBarCollapsed &&
      `width: 100%;
      padding: 48px 26px;
      .ant-menu-item {
        padding: 0 12px !important;
      }
      .ant-menu-item-selected {
        border-radius: 50%;
        width: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: center;
      }
      .ant-menu-title-content {
        display: none !important;
      }`) ||
    ``}

  .ant-menu-item {
    min-height: 48px;
    display: flex;
    align-items: center;
    .anticon {
      display: flex;
    }
    .ant-menu-title-content {
      ${tw`flex justify-between w-full items-center`};
    }
  }
  .ant-menu-item:after {
    border-right: transparent;
  }
  .ant-menu-item-selected {
    ${tw`font-medium`};
    border-right: none;
    color: #284892;
  }

  .ant-menu-submenu {
    .ant-menu-sub {
      .ant-menu-item-selected {
        .ant-menu-title-content {
          border-left: 1px solid #284892;
        }
      }
    }
    .ant-menu-sub {
      .ant-menu-title-content {
        padding: 32px;
        border-left: 1px solid #bbbbbb;
      }
      .ant-menu-item {
        padding-left: 36px !important;
      }
    }
    .ant-menu-submenu-title {
      .ant-menu-submenu-arrow {
        display: none;
      }
      .ant-menu-item-icon {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        span:last-child {
          margin-left: 0;
          font-size: inherit !important;
        }
      }
    }
  }
  .ant-menu-submenu-open {
    .ant-menu-submenu-title {
      .ant-menu-item-icon {
        span:last-child {
          transform: rotate(180deg);
        }
      }
    }
  }
`;
