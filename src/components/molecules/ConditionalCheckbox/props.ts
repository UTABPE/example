import type { CheckboxProps as AntCheckboxProps } from 'antd';
import { ReactNode } from 'react';

export type ConditionalCheckboxProps = AntCheckboxProps & {
  readonly suffix?: ReactNode;
};
