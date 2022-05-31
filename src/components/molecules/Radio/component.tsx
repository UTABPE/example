import styled from '@emotion/styled';
import { Radio } from 'antd';
import tw from 'twin.macro';
import { RadioButtonProps } from './props';

export const RadioGroup = styled(Radio.Group)`
  ${tw`min-w-[40px] flex`}
`;

export const RadioButton = styled(Radio.Button)<RadioButtonProps>`
  font-size: 14px;
  color: rgba(138, 138, 139, 1);

  ${tw`flex items-center justify-center bg-gray-1 text-gray-6 border-gray-7 outline-none`}
  ${({ buttonSize }) => {
    switch (buttonSize) {
      case 'xl':
        return tw`h-14 w-14 min-w-[56px] text-base`;
      case 'lg':
        return tw`h-12 w-12 min-w-[48px] text-base`;
      case 'md':
        return tw`h-10 w-10 min-w-[40px] text-base`;
      case 'sm':
        return tw`h-9 w-9 min-w-[38px] text-base`;
      case 'xs':
        return tw`h-8 w-8 min-w-[32px] text-sm`;
      case 'xxs':
        return tw`h-6 w-6 min-w-[24px] text-xs`;
      default:
        return tw`h-10 w-10 min-w-[40px] text-base`;
    }
  }}


  &.ant-radio-button-wrapper-checked {
    ${tw`text-gray-7 border-gray-7`}

    &::before {
      ${tw`bg-gray-7`}
    }

    &:not(.ant-radio-button-wrapper-disabled) {
      &:first-of-type {
        ${tw`border-gray-7 border-r-gray-7`}
      }
      :hover {
        ${tw`border-gray-7`}

        &::before {
          ${tw`bg-gray-7`}
        }
      }
    }

    &:not([class*=' ant-radio-button-wrapper-disabled']).ant-radio-button-wrapper:first-of-type {
      ${tw`border-r-gray-7`}
    }
  }

  &:hover {
    background-color: rgba(73, 120, 224, 0.25);
    ${tw`text-darkBlue-15 border-gray-7`}
  }

  &:active {
    background-color: rgba(73, 120, 224, 0.4);
  }

  svg {
    stroke-width: 1.5px;
  }
`;
