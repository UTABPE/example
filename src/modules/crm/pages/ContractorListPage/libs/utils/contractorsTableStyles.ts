import tw from 'twin.macro';
import { css } from '@emotion/react';

export const contractorsTableStyles = css`
  .ant-table-thead {
    > tr {
      > th {
        ${tw`py-3`}
        &:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
          ${tw`h-12`}
        }
      }
    }
  }
  .ant-table-tbody {
    > tr {
      > td {
        ${tw`py-1 h-14`}
        &.ant-table-cell-row-hover {
          ${tw``}
        }
      }
    }
  }
  .ant-table-cell {
    line-height: 23px;
  }
`;
