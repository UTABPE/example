import styled from '@emotion/styled';
import type { TableIconButtonProps } from './props';
import { Button as ButtonAntd } from 'antd';
import tw from 'twin.macro';

export const TableIconButton = styled(ButtonAntd)<TableIconButtonProps>`
  ${tw`flex items-center justify-center border-none px-0 bg-transparent shadow-none`}

  ${({ buttonSize }) => {
    switch (buttonSize) {
      case 'xl':
        return tw`h-14 w-14 min-w-[52px] text-base`;
      case 'lg':
        return tw`h-12 w-12 min-w-[48px] text-base`;
      case 'md':
        return tw`h-10 w-10 min-w-[40px] text-base`;
      case 'sm':
        return tw`h-9 w-9 min-w-[36px] text-base`;
      case 'xs':
        return tw`h-8 w-8 min-w-[32px] text-sm`;
      case 'xxs':
        return tw`h-6 w-6 min-w-[24px] text-xs`;
      default:
        return tw`h-10 w-10 min-w-[40px] text-base`;
    }
  }}
`;

TableIconButton.defaultProps = {
  shape: 'circle',
};
