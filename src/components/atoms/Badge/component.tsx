import styled from '@emotion/styled';
import { Badge as BadgeAntd } from 'antd';
import tw from 'twin.macro';

import type { BadgeProps } from './props';

export const Badge = styled(BadgeAntd)<BadgeProps>`
  .ant-badge-count {
    ${tw`shadow-none`}
  }
  &.badge-success {
    sup {
      ${tw`bg-success-10 text-success-80`}
    }
  }
`;
