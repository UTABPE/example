import { ButtonProps } from 'antd';

/**
 * Sizes breakdown
 * `xl`: 56px, icon: 24px
 * `lg`: 48px, icon: 24px
 * `md`: 40px, icon: 24px  // default size
 * `sm`: 38px, icon: 20px
 * `xs`: 32px, icon: 24px
 * `xxs`: 24px, icon: 16px
 */
export type MenuItemButtonSize =
  | 'xl'
  | 'lg'
  | 'md'
  | 'sm'
  | 'xs'
  | 'xxs'
  | undefined;

export interface MenuItemButtonProps extends Omit<ButtonProps, 'size'> {
  backgroundOn?: boolean;
  buttonSize?: MenuItemButtonSize;
  // `size` prop is overrided. Use `buttonSize` prop instead
  size?: undefined;
}
