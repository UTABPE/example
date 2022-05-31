import React, { FC } from 'react';
import { Select, SelectProps, Typography } from 'antd';
import { Input } from '@components/atoms/Input';
import tw from 'twin.macro';

export const SelectWithPreviousVal: FC<SelectProps> = ({
  defaultValue,
  children,
  ...rest
}) => (
  <>
    <Select {...rest}>{children}</Select>
    <div css={tw`w-full h-10 py-2.5 px-3 bg-gray-1`}>
      <Typography.Text css={tw`text-sm text-gray-7`}>
        {defaultValue}
      </Typography.Text>
    </div>
  </>
);
