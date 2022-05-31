import type { ButtonProps as AntButtonProps } from 'antd';

export type ButtonSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs' | undefined;

export type ButtonProps = AntButtonProps & {
  readonly fullWidth?: boolean;
  readonly buttonSize?: ButtonSize;
  // `size` prop is overrided. Use `buttonSize` prop instead
  readonly size?: undefined;
};
