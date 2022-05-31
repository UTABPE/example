const CracoAlias = require('craco-alias');
const CracoLessPlugin = require('craco-less');

const AntdTheme = require('./antd-theme');

module.exports = {
  babel: {
    // 處理部分新功能和 production  的優化 https://emotion.sh/docs/babel
    plugins: ['@emotion'],
    presets: [
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
          // 替換成 emotion 版本的 jsx 處理 css prop  https://emotion.sh/docs/css-prop#babel-preset
          importSource: '@emotion/react',
        },
      ],
    ],
  },
  plugins: [
    // Typescript Alias Configuration
    {
      plugin: CracoAlias,
      options: {
        baseUrl: './src',
        source: 'tsconfig',
        tsConfigPath: './tsconfig.paths.json',
      },
    },

    // Ant design customization
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: AntdTheme,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
