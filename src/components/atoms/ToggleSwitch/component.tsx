import styled from '@emotion/styled';
import { Switch } from 'antd';
import tw from 'twin.macro';

export const ToggleSwitch = styled(Switch)`
  ${tw`bg-gray-4 hover:bg-gray-5`}
  &:hover {
    box-shadow: #c8d7f6 0px 1px 1px, #c8d7f6 0px 0px 0px 1px;
  }
  &.ant-switch-checked {
    ${tw`bg-darkBlue-30`}
  }
`;
