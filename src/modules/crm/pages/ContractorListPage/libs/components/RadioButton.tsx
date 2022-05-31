import { RadioButtonProps } from 'antd/es/radio/radioButton';
import { Radio } from 'antd';
import { FC } from 'react';
import { css } from '@emotion/react';
import tw from 'twin.macro';

export const RadioButton: FC<RadioButtonProps> = ({ children, ...rest }) => (
  <Radio.Button
    className="h-10 leading-9"
    css={css`
      ${tw`text-gray-6 border-gray-5! border-r-gray-5! bg-gray-1 hover:(text-darkBlue-15 bg-blue-35) active:(bg-blue-35)`}
      &.ant-radio-button-wrapper::before {
        ${tw`bg-gray-5!`}
      }
      &.ant-radio-button-wrapper-checked {
        ${tw`bg-white hover:(text-darkBlue-15 bg-blue-35) text-gray-7`}
      }
    `}
    {...rest}
  >
    {children}
  </Radio.Button>
);
