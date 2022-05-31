import AntdTheme from '../antd-theme';
import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';
import { DocsPage, DocsContainer } from '@storybook/addon-docs';
import { addDecorator, configure } from '@storybook/react';
import { addParameters } from '@storybook/react';
import { GlobalStyle } from '@components/templates/GlobalStyle';

import tw from 'twin.macro';

const ThemeDefault = {
  primary: 'black',
};

const GlobalWrapper = (storyFn) => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
);

addDecorator(GlobalWrapper);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});
