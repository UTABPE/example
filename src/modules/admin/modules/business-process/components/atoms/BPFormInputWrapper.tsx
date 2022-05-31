import styled from '@emotion/styled';
import { Row } from 'antd';
import tw from 'twin.macro';

export const BPFormInputWrapper = styled(Row)`
  ${tw`bg-gray-0 hover:bg-blue-5 py-4 px-5 mt-3 mb-6`}
  .ant-form-item:hover {
    .ant-form-item-label > label {
      ${tw`text-darkBlue-15`}
    }
  }
  .ant-form-item-label > label {
    ${tw`font-medium text-xs text-gray-7`}
  }
`;
