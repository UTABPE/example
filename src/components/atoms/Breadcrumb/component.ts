import styled from '@emotion/styled';
import { Breadcrumb as BreadcrumbAntd } from 'antd';
import tw from 'twin.macro';
import type { BreadcrumbProps } from './props';

export const Breadcrumb = styled(BreadcrumbAntd)<BreadcrumbProps>`
  ${tw`flex flex-row`}
  span {
    ${tw`flex items-center`}
  }
`;
