import styled from '@emotion/styled';
import { Form } from 'antd';
import tw from 'twin.macro';

export const BPFormBase = styled(Form)`
  .ant-form-item {
    ${tw`mb-0`}
  }
  .ant-form-item-label {
    ${tw`p-0`}
  }
  label {
    ${tw`font-normal`}
  }
  .ant-form-item-control-input {
    min-height: auto;
  }
  .ant-radio-group {
    ${tw`mr-6`}
    span:last-child {
      ${tw`text-sm text-gray-9`}
    }
    .ant-radio-checked {
      .ant-radio-inner {
        ${tw`bg-primary border-primary`}
        &:after {
          ${tw`bg-white`}
        }
      }
    }
  }
`;
