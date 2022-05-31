import styled from '@emotion/styled';
import type { AvatarProps } from './props';
import { Avatar as AvatarAntd } from 'antd';
import tw from 'twin.macro';

export const Avatar = styled(AvatarAntd)<AvatarProps>`
  ${tw`flex items-center justify-center`}
`;
