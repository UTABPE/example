import { Global, css } from '@emotion/react';
import type { FC } from 'react';
import tw from 'twin.macro';

export const GlobalStyle: FC = () => (
  <Global
    styles={css`
    .dark {
      .docs-story {
      ${tw`bg-primary`}
      }
      .ant-btn-default {
        ${tw`border-white text-white`}
      }
    }
    .custom-ant-message-success {
      .ant-message-notice-content {
        background: #E8F7F1;
        color: #168F63;
      }
    }
    .custom-ant-message-error {
      .ant-message-notice-content {
        color: red;
      }
    }
    .ant-message {
      position: absolute;
      bottom: 30px !important;
      top: unset !important;
      .ant-message-notice-content {
        .ant-message-custom-content {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
    .user-label {
      label {
        ${tw`text-xs text-gray-7 flex flex-row-reverse justify-end before:ml-1`}
      }
    }
    .user-tooltip {
      .ant-tooltip-content {
        ${tw`-ml-4`}
        .ant-tooltip-inner {
          ${tw`border border-darkBlue-30 ring-2 ring-blue-15 px-4 py-3`}
        }
        .ant-tooltip-arrow {
          ${tw`-left-1`}
          span {
            background-color: blue;
          }
          .ant-tooltip-arrow-content {
            
          }
        }
      }
    }
    .user-popover {
      padding-top: 8px;
      .ant-popover-arrow {
        display: none;
      }
      .ant-popover-inner {
        ${tw`border border-darkBlue-30 ring-2 ring-blue-15`}
      }
      .ant-popover-inner-content {
        ${tw`px-0 py-1`}
      }
    }
    
    
      body {
      .ant-dropdown {
        .language-selector-menu {
          display: flex;
          flex-direction: column;
          border: 1px solid #2e51a0;
          border-radius: 0;
          box-shadow: rgb(40 72 146 / 15%) 0px 0px 0px 2px;
          width: 100%;
          .ant-dropdown-menu-item {
            color: #727173;
          }
          .ant-dropdown-menu-item:hover {
            background: #f6f8fd;
            color: #284892;
          }
          .ant-dropdown-menu-item:active {
            background: #e4ebfa;
            color: #284892;
          }
        }
        .table-settings-dropdown {
          border: 1px solid #284892;
          position: absolute;
          border-radius: 0;
          right: -50%;
          left: -50%;
          box-shadow: rgba(40, 72, 146, 0.15) 0px 0px 0px 2px;
          .ant-divider {
            margin: 0 0 4px 0;
          }
          .ant-dropdown-menu-item {
            padding: 12px;
            .ant-dropdown-menu-title-content {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
            .ant-checkbox-wrapper {
              color: #727173;
              font-weight: 400;
            }
            &:hover {
              background: #f6f8fd;
              color: #284892;
              .ant-checkbox-wrapper {
                color: #284892;
              }
              .ant-checkbox {
                border: 1px solid #284892;
                box-shadow: rgba(40, 72, 146, 0.15) 0px 0px 0px 2px;
              }
            }
          }
          .ant-dropdown-menu-item:first-of-type {
            .ant-dropdown-menu-title-content {
              color: #727173;
              width: 100%;
            }
            &:hover {
              background: transparent;
            }
          }
        }
      }
    `}
  />
);
