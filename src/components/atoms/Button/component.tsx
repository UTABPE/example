import styled from '@emotion/styled';
import type { ButtonProps } from './props';
import { Button as ButtonAntd } from 'antd';
import tw from 'twin.macro';

export const Button = styled(ButtonAntd, {
  shouldForwardProp: (p) => p !== 'buttonSize',
})<ButtonProps>`
  ${tw`flex items-center justify-center font-normal`}
  &.ant-btn-default {
    ${tw`bg-transparent`}
  }
  &.ant-btn-text {
    ${tw`text-primary`}
  }
  &.ant-btn-action {
    ${tw`bg-primaryGold border-none`}
  }
  &.ant-btn-secondary:hover {
    ${tw`hover:bg-blue-15 focus:bg-blue-35`}
  }
  &.ant-btn-primary:hover {
    ${tw`hover:bg-darkBlue-75 focus:bg-darkBlue-45`}
  }
  &.ant-btn-primary[disabled] {
    ${tw`border-none`}
  }
  &.ant-btn[disabled]:hover {
    ${tw`bg-gray-3`}
  }
  &.ant-btn-link:hover,
  &.ant-btn-link:focus {
    ${tw`bg-transparent`}
  }
  &.ant-btn-icon-only {
    ${({ buttonSize }) => {
      switch (buttonSize) {
        case 'xl':
          return tw`w-[56px]`;
        case 'lg':
          return tw`w-[48px]`;
        case 'md':
          return tw`w-[40px]`;
        case 'sm':
          return tw`w-[38px]`;
        case 'xs':
          return tw`w-[32px]`;
        case 'xxs':
          return tw`w-[24px]`;
        default:
          return tw`w-[40px]`;
      }
    }}
  }
  ${({ buttonSize }) => {
    switch (buttonSize) {
      case 'xl':
        return tw`h-14 min-w-[56px] text-base`;
      case 'lg':
        return tw`h-12 min-w-[48px] text-base`;
      case 'md':
        return tw`h-10 min-w-[40px] text-base`;
      case 'sm':
        return tw`h-9 min-w-[38px] text-base`;
      case 'xs':
        return tw`h-8 min-w-[32px] text-sm`;
      case 'xxs':
        return tw`h-6 min-w-[24px] text-xs`;
      default:
        return tw`h-10 min-w-[40px] text-base`;
    }
  }}
`;

Button.defaultProps = {
  type: 'primary',
};
