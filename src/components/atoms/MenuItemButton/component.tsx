import styled from '@emotion/styled';
import { Button } from 'antd';
import tw from 'twin.macro';
import { MenuItemButtonProps } from './props';

export const MenuItemButton = styled(Button)<MenuItemButtonProps>`
  font-size: 14px;
  color: rgba(138, 138, 139, 1);

  ${tw`flex items-center justify-center`}
  ${({ backgroundOn }) => (backgroundOn ? tw`bg-gray-1` : ``)}
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

  &:hover {
    background-color: rgba(73, 120, 224, 0.25);
    ${tw`text-darkBlue-15`}
  }

  &:active {
    background-color: rgba(73, 120, 224, 0.4);
  }

  svg {
    stroke-width: 1.5px;
  }
`;

MenuItemButton.defaultProps = {
  type: 'link',
  shape: 'circle',
  buttonSize: 'md',
};
