import type { HTMLAttributes } from 'react';

export type LogoProps = HTMLAttributes<HTMLAnchorElement> & {
  readonly size?: 'string';
};
