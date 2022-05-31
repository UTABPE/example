import React from 'react';
import logoImg from '@assets/icons/Logo.svg';
import type { LogoProps } from './props';

export const Logo: React.FC<LogoProps> = () => {
  return (
    <a href="/">
      <img src={logoImg} alt="logo" />
    </a>
  );
};
