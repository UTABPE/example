import React, { FC, useEffect, useState } from 'react';
import { Input } from '@components/atoms/Input';
import tw from 'twin.macro';
import { InputProps, Typography } from 'antd';

export const InputWithPreviousVal: FC<InputProps> = ({ value, ...rest }) => {
  const [previousVal, setPreviousVal] = useState(value);
  useEffect(() => {
    setPreviousVal(value);
  }, [value]);
  return (
    <>
      <Input value={value} {...rest} />
      <div css={tw`w-full h-10 py-2.5 px-3 bg-gray-1`}>
        <Typography.Text css={tw`text-sm text-gray-7`}>
          {previousVal}
        </Typography.Text>
      </div>
    </>
  );
};
