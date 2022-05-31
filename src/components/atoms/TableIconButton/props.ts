import type { ButtonProps as AntButtonProps } from 'antd';

export type ButtonSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs' | undefined;

export type TableIconButtonProps = AntButtonProps & {
  readonly buttonSize?: ButtonSize;
};
