import styled from '@emotion/styled';
import { Form as FromAntd } from 'antd';
import tw from 'twin.macro';
import type { FormProps } from './props';

export const Form = styled(FromAntd)<FormProps>`
  label {
    ${tw`text-gray-7 font-medium text-xs`}
    &::before {
      ${tw`hidden!`}
    }
    &.ant-form-item-required::after {
      display: inline-block;
      color: #ff4466;
      font-size: 14px;
      line-height: 1;
      margin-left: 2px;
      content: '*';
    }
  }
`;
