import type { HTMLAttributes } from 'react';

export type Lang = {
  readonly title: string;
  readonly code: string;
};

export type LanguageSelectorProps = HTMLAttributes<HTMLSelectElement> & {
  readonly langs: readonly Lang[];
  readonly currentLangCode: string;
  readonly onLangSwitch: (value: string) => void;
  readonly className?: string;
};
