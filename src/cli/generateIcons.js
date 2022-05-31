/**
 * This script is intended for CLI use to generate icon components. Example usage:
 * `npm run generateIcons`
 *
 * In case new icons were added to the design system you can perform following steps to update the code:
 * - Remove contents of the `./src/components/atoms/Icon` (except `_BaseIcon.tsx`) and `./src/assets/icons` (everything) folders
 * - Select icons in the Figma file and export them to `.svg` format
 * - Move downloaded files to `./src/assets/icons` folder
 * - Run `npm run generate-icons` command
 * - Commit updated files to repository
 */

const fs = require('fs');
const { exit } = require('process');

const files = fs.readdirSync('./src/assets/icons');

/**
 * Editing icons svg stroke property to match `currentColor` to match the color with the parent component
 */
files.forEach((file) => {
  const fileContents = fs.readFileSync('./src/assets/icons/' + file, 'utf8');

  const newContents = fileContents
    .split('stroke="#')
    .map((part, idx) => {
      if (idx === 0) {
        return part;
      }

      return 'stroke="currentColor"' + part.substring(7);
    })
    .join('');

  fs.writeFileSync('./src/assets/icons/' + file, newContents);
});

const iconSettings = files.map((iconName) => {
  const componentName = iconName
    .replace('.svg', '')
    .split('-')
    .map((iconNamePart) => iconNamePart.replace(/./, (c) => c.toUpperCase()))
    .join('')
    .split(' ')
    .map((iconNamePart) => iconNamePart.replace(/./, (c) => c.toUpperCase()))
    .join('');

  const componentCode = `
/**
 * ⚠️ DONT EDIT MANUALLY
 * This file is generated with \`./src/cli/generateIcons.js\`, check it for the detailed information
 */
import BaseIcon from './_BaseIcon';

import { ReactComponent as ${componentName}Icon } from "@assets/icons/${iconName}";

export const ${componentName} = () => {
  return <BaseIcon component={${componentName}Icon} style={{ fontSize: "1.5em" }} />
}
`;

  return {
    iconName,
    componentName,
    componentCode,
  };
});

iconSettings.forEach((settings) => {
  fs.writeFileSync(
    `./src/components/atoms/Icon/${settings.componentName}.tsx`,
    settings.componentCode
  );
});

const iconExports = iconSettings.map(
  ({ componentName }) => `export * from "./${componentName}";`
);
fs.writeFileSync(
  `./src/components/atoms/Icon/index.ts`,
  iconExports.join('\n')
);

console.log(
  `${iconSettings.length} icons were generated. Check \`./src/components/atoms/Icon/index.ts\` file that has all of the icons exported`
);

// console.log(iconSettings);
