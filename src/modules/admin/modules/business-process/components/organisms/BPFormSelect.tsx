import { Button } from '@components/atoms/Button';
import { ChevronRight } from '@components/atoms/Icon';
import styled from '@emotion/styled';
import {
  Dropdown as DropdownAntd,
  Menu,
  Space,
  Typography,
  Tree as TreeAntd,
} from 'antd';
import { FC, useState } from 'react';
import tw from 'twin.macro';
import { PERMISSIONS_GROUPS_LIST } from '../../constants/PermissionsGroups';
const { Text } = Typography;

const Dropdown = styled(DropdownAntd)`
  &.ant-dropdown-trigger {
    ${tw`w-full text-gray-8 text-left justify-start mt-6 font-normal p-2 border-gray-5`}
    span:first-of-type {
      transform: rotate(0deg);
    }
  }
  &.ant-dropdown-open {
    ${tw`border-darkBlue-30 text-darkBlue-15 bg-blue-5 shadow-dropdown text-darkBlue-15 border-darkBlue-30`}
    span > svg {
      transform: rotate(90deg);
      ${tw`transition-transform`}
    }
  }
`;

const Tree = styled(TreeAntd)`
  .ant-tree-switcher {
    ${tw`hidden`}
  }
  .ant-tree-indent {
    ${tw`hidden`}
  }
  .ant-tree-treenode:first-child {
    ${tw`py-2.5 px-3 text-gray-8 hover:bg-blue-15 hover:text-primary w-full`}
    .ant-tree-checkbox-checked {
      .ant-tree-checkbox-inner::after {
        content: ' ' !important;
      }
    }
    .ant-tree-checkbox-indeterminate {
      .ant-tree-checkbox-inner {
        ${tw`bg-primary border-none`}
      }
    }
    .ant-tree-checkbox {
      .ant-tree-checkbox-inner::after {
        content: '-';
        background-color: transparent;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .ant-tree-treenode:not(:first-child) {
    ${tw`py-2.5 px-3 w-full text-gray-8 hover:bg-blue-15 hover:text-primary`}
  }
  .ant-tree-node-content-wrapper {
    ${tw`hover:bg-transparent`}
  }
`;

export const BusinessProcessFormSelect: FC<{
  title?: string;
  placeholderTitle?: string;
  onChange: (checkedKeys: any) => void;
}> = ({ title, placeholderTitle, onChange }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  return (
    <Space className="w-full" direction="vertical">
      <Text className="text-lg text-gray-9">{title}</Text>
      <Dropdown
        overlayClassName="business-process-form-dropdown"
        overlay={
          <Menu className="mt-1 shadow-dropdown border border-primary rounded-none p-0 w-full">
            <Tree
              showIcon
              defaultExpandAll
              checkable={true}
              treeData={PERMISSIONS_GROUPS_LIST}
              onSelect={onChange}
              onCheck={onChange}
              selectable={false}
            />
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
          <ChevronRight />
          {placeholderTitle}
        </Button>
      </Dropdown>
    </Space>
  );
};
