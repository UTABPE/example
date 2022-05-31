import { Divider, Tooltip, Typography } from 'antd';
import { FC } from 'react';
import tw from 'twin.macro';
import styled from '@emotion/styled';
import { ColorBadgeProps } from './props';

const Wrapper = styled.div`
  ${tw`w-full text-white text-sm p-3 flex justify-between`}
  span:last-child {
    ${tw`opacity-0 cursor-pointer`}
  }
  transition: width 0.2s;
  &:hover {
    border-radius: 0 4px 4px 0;
    width: calc(100% + 12px);
    span:last-child {
      ${tw`opacity-100`}
    }
  }
`;

export const ColorBadge: FC<ColorBadgeProps> = ({
  colorCode,
  title,
  isMainColor,
}) => {
  const onCopyClick = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(colorCode);
    }
  };
  return (
    <Wrapper
      style={{
        backgroundColor: colorCode,
        fontWeight: isMainColor ? 'bold' : 'normal',
      }}
    >
      <span>{title}</span>
      <Tooltip title="Copy">
        <span onClick={onCopyClick}>{colorCode}</span>
      </Tooltip>
    </Wrapper>
  );
};
