import styled from '@emotion/styled';
import { Checkbox as CheckboxAntd } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox/Checkbox';
import { FC, useState } from 'react';
import tw from 'twin.macro';
import { ConditionalCheckboxProps } from './props';

const Checkbox = styled(CheckboxAntd)`
  ${tw`ml-0! my-2`}
  span:last-child {
    ${tw`text-sm text-gray-9`}
  }
`;

export const ConditionalCheckbox: FC<ConditionalCheckboxProps> = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  function onChange(e: CheckboxChangeEvent) {
    setIsChecked(e.target.checked);
  }
  return (
    <div>
      <Checkbox {...props} onChange={onChange} checked={isChecked} />
      {isChecked && props.suffix}
    </div>
  );
};
