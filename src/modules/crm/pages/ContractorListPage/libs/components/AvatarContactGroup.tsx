import styled from '@emotion/styled';
import { Avatar } from 'antd';
import tw from 'twin.macro';

export const AvatarContactGroup = styled(Avatar.Group)`
  ${tw`mt-2`}
  .ant-avatar-circle {
    ${tw`h-8 w-8`}
    .ant-avatar-string {
      ${tw`text-sm leading-8`}
    }
  }
`;
