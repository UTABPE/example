import { css } from '@emotion/react';
import tw from 'twin.macro';

export const descriptionsStyles = css`
  ${tw`my-2 pl-16`}
  .ant-descriptions-item {
    ${tw`pb-0`}
  }
  &::after {
    ${tw`left-8 h-full absolute border-l border-solid w-0 top-0`}
    content: '';
    border-color: #bbb;
  }
`;
