import type { SwitchProps } from 'antd';

export type ButtonSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs' | undefined;

export type ToggleButtonProps = SwitchProps & {
  readonly size?: undefined;
};
