import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Tree as TreeAntd } from 'antd';
import { TreeProps } from './props';

export const Tree = styled(TreeAntd)<TreeProps>`
  .ant-tree-treenode {
    ${tw`text-gray-8 text-xs hover:bg-blue-15 w-full font-normal p-0`}
    .ant-tree-indent-unit::before,
    .ant-tree-switcher-leaf-line::before,
    .ant-tree-switcher-leaf-line::after {
      ${tw`border-gray-3`}
    }
    :hover {
      .ant-tree-node-content-wrapper,
      .ant-tree-switcher {
        ${tw`bg-blue-15 text-primary`}
      }
    }
  }
  .ant-tree-treenode-selected {
    ${tw`bg-blue-35! text-primary`}
    .ant-tree-node-content-wrapper,
    .ant-tree-switcher {
      ${tw`bg-blue-35! text-primary`}
    }
    :hover {
      ${tw`bg-blue-35! text-primary`}
      .ant-tree-node-content-wrapper,
      .ant-tree-switcher {
        ${tw`bg-blue-35! text-primary`}
      }
    }
  }
  .ant-tree-node-content-wrapper {
    ${tw`border-b border-gray-3 rounded-none w-full py-3 pl-4`}
  }
  .ant-tree-node-content-wrapper-normal {
    ${tw`ml-4`}
  }
  .ant-tree-switcher_close {
    svg {
      transform: rotate(270deg) !important;
    }
  }
  .ant-tree-switcher_open,
  .ant-tree-switcher_close {
    ${tw`border-b border-gray-3 flex items-center w-[32px]`}
    span {
      ${tw`w-[32px] h-[32px] flex items-center justify-center`}
      &:hover {
        ${tw`text-darkBlue-15! rounded bg-blue-25! rounded-full`}
      }
    }
  }
  .ant-tree-switcher-leaf-line::after {
    ${tw`w-6 h-6`}
  }
  .ant-tree-treenode-leaf-last .ant-tree-switcher-leaf-line::before {
    ${tw`h-6!`}
  }
`;
