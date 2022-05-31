import styled from '@emotion/styled';
import type { InputProps } from './props';
import { Input as InputAntd } from 'antd';
import tw from 'twin.macro';

export const Input = styled(InputAntd)<InputProps>`
  ${tw`rounded-none font-normal flex items-center`}
  &.ant-input::placeholder {
    ${tw`text-base font-normal text-white!`}
  }
  &.ant-input-sm {
    ${tw`text-sm`}
  }
  .ant-input-prefix {
    ${tw`mr-2`}
    svg {
      ${tw`text-gray-6 w-5 h-5`}
    }
  }
`;

Input.defaultProps = {};
