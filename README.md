# eKap

This project uses React + Typescript and `craco` for customizing webpack and other features.

## Local development

In order to configure the local environment for development, you have to create `.env.local` file with the following contents:

```env
REACT_APP_KEYCLOAK_URL="https://test-idp.kazatomprom.kz/auth"
REACT_APP_KEYCLOAK_REALM="ekap-platform"
REACT_APP_KEYCLOAK_CLIENT_ID="ekap-frontend-app"
REACT_APP_URL="https://test-react-ekap.kazatomprom.kz/"
REACT_APP_API_GATEWAY_BASE_URL="https://test-api.kazatomprom.kz"
REACT_APP_API_KEY="TEST"
```

## Design System

Find the design system in Figma:

> [🎨 Design System in Figma](https://www.figma.com/file/Zm35yDZpGBBrVX50Lk9fZmyx/Layout?node-id=514%3A6223)

In order to implement design system following components were selected as a base:

- ant.design
- Tailwind
- emotion.js

## Components

### `PageMeta`

The `PageMeta` allows developers to manipulate following parts of the interface through the context:

- `openMenuKeys`: control `SideBarNavigation` component's open sub-menus
- `selectedMenuKeys`: `SideBarNavigation` component's active items
- `breadcrumbs`: Pass array of `BreadcrumbItemType` objects to form Breadcrumbs in the layout UI
- `title`: Manipulate `<title>` of the page using `react-helmet`

Each page should contain exactly one instance of the `PageMeta` component to ensure that the `SideMenu` would be active on page reload or direct URL visit and breadcrumbs are displayed correctly. Having the title on the page is also a crucial part of the user experience.

#### Example usage

```tsx
import { PageMeta } from '@context/PageMeta';

function SomePage() {
  return (
    <>
      <PageMeta
        title="Бизнес-процессы"
        openMenuKeys={['administration']}     // The submenu that should be open on this page
        selectedMenuKeys={['bp-constructor']} // The menu item that should be active on this page
        breadcrumbs={[
          // Each `BreadcrumbItemType` consists of `title` string (required)
          { title: 'Администрирование' },     
          // and `link` string, which is optional and would render as a plain text in the breadcrumbs
          { title: 'Бизнес-процессы', link: '/constructor/' }, 
        ]}
      />
      { /* Rest of the page */ }
    </>
  );
}
```

### Icons from design system

The icons are generated from the design system icon files. They behave as close as possible to ant.design icons and have following default parameters:

- `font-size: 1.6em;` allows icons to be `24px` in size when the parent `font-size` = `16px`. You can manipulate parent's `font-size` to achieve different results
- `stroke="currentColor"` allows icons to be the same color as the parent. It comes handy to manipulate icon color in different state without manually controlling the colors' state. Opposed to ant design's icons that use `fill="currentColor"`, the icons from this design system are using `stroke` instead of `fill`.

In case new icons were added to the design system you can perform following steps to update the code:

- Remove contents of the `./src/components/atoms/Icon` (except `_BaseIcon.tsx`) and `./src/assets/icons` (everything) folders
- Select icons in the Figma file and export them to `.svg` format
- Move downloaded files to `./src/assets/icons` folder
- Run `npm run generate-icons` command
- Commit updated files to repository

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### `npm run generate-icons`

Reads contents of `./src/assets/icon` folder and generates components and `index.tsx` file that export all of the icon from a single file. The svg files are also processed during that process to change the default `stroke` color to `currentColor` to achieve the ease of the color manipulation during development.

Check the `./src/cli/generateIcons.js` file for more info.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
