import { boolean } from 'yup';

export type ColorBadgeProps = {
  colorCode: string;
  title: string;
  isMainColor?: boolean;
};
