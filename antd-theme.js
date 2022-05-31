/**
 * This file overrides ant.design less variables to look like desired design system.
 *
 * Full list of variables is available here:
 * @link https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
 */

module.exports = {
  // -------- Colors -----------
  // >>> Primary
  '@primary-color': '#284892',
  '@processing-color': '#284892',

  // >>> Success
  '@success-color': '#15AC76',

  // >>> Warning
  '@warning-color': '#FF7426',

  // >>> Error
  '@error-color': '#FF4466',

  // LINK
  '@link-color': '#1CA1FB',

  //Typography
  '@typography-title-margin-top': '0',
  '@typography-title-margin-bottom': '0',
  '@heading-1-size': '48px',
  '@heading-2-size': '26px',
  '@heading-3-size': '24px',
  '@heading-4-size': '20px',
  '@heading-5-size': '18px',
  '@dropdown-font-size': '16px',
  '@font-family': 'Roboto, sans-serif',
  '@font-size-base': '16px',
  '@font-size-lg': '@font-size-base + 2px',
  '@font-size-sm': '14px',

  // Border color
  '@border-color-base': '#BBBBBB', // base border outline a component

  // Disabled states
  '@disabled-color': '#8A8A8B',
  '@disabled-bg': '#ECECEC',

  // height rules
  '@height-base': '48px',
  '@height-lg': '56px',
  '@height-sm': '40px',

  //Select
  '@select-item-selected-font-weight': '400',
  '@select-item-selected-color': '#727173',
  '@select-item-selected-bg': '#F6F6F6',
  '@select-item-active-bg': '#F6F8FD',
  '@select-multiple-item-height-lg': '40px',
  '@select-dropdown-font-size': '@dropdown-font-size',

  //Button
  '@btn-border-radius-base': '0',
  '@btn-border-radius-sm': '0',
  '@btn-disable-color': '@disabled-color',
  '@btn-disable-bg': '@disabled-bg',
  '@btn-disable-border': '#8A8A8B',
  '@btn-font-weight': 500,
  '@btn-font-size-lg': '@font-size-lg',
  '@btn-font-size-sm': '@font-size-base',
  '@btn-padding-horizontal-base': '@padding-lg',
  '@btn-padding-horizontal-lg': '@padding-lg',
  '@btn-padding-horizontal-sm': '@padding-lg',
  '@btn-default-color': '@primary-color',
  '@btn-default-border': '@primary-color',
  '@btn-text-hover-bg': 'transparent',

  // Avatar
  '@avatar-size-base': '40px',
  '@avatar-size-lg': '64px',
  '@avatar-font-size-lg': '16px',
  '@avatar-font-size-base': '16px',
  '@avatar-bg': '#F6F8FD',
  '@avatar-color': '@primary-color',

  //Divider
  '@divider-text-padding': '8px',
  '@divider-color': '#D4D3D4',

  // Menu
  '@menu-inline-toplevel-item-height': '48px',
  '@menu-item-height': '48px',
  '@menu-collapsed-width': '100px',
  '@menu-popup-bg': '@component-background',
  '@menu-item-color': '#727173',
  '@menu-icon-margin-right': '12px',
  '@menu-inline-submenu-bg': 'white',
  '@menu-highlight-color': '@primary-color',
  '@menu-item-active-bg': '#EDF2FC',
  '@menu-item-vertical-margin': '0',
  '@menu-item-boundary-margin': '0',

  // dark theme
  '@menu-dark-bg': '@primary-color',
  '@menu-dark-inline-submenu-bg': '@primary-color',
  '@menu-dark-item-active-bg': '#2E51A0',
  '@menu-dark-item-hover-bg': '#2E51A0',

  // Input
  '@input-border-color': '#BBBBBB',
  '@input-padding-horizontal-sm': '12px',
  '@input-padding-vertical-sm': '8px',
  '@input-placeholder-color': '#A3A2A3',
  '@input-icon-color': '@input-placeholder-color',
  '@input-hover-border-color': '@primary-color',
  '@input-height-sm': '32px',
  '@input-height-base': '40px',
  '@input-height-lg': '48px',

  // Tables
  '@table-header-bg': '#F2F6FD',
  '@table-header-color': '#284892',
  '@table-row-hover-bg': '#E4EBFA',
  '@table-border-color': '#ECECEC',
  '@table-selected-row-bg': '#BFD0F4',
  '@table-selected-row-color': '#284892',
  '@table-font-size': '14px',

  //Breadcrumb
  '@breadcrumb-base-color': '#A3A2A3',
  '@breadcrumb-last-item-color': '@primary-color',
  '@breadcrumb-icon-font-size': '@font-size-base',
  '@breadcrumb-link-color': '@breadcrumb-base-color',
  '@breadcrumb-link-color-hover': '#727173',
  '@breadcrumb-separator-color': '@breadcrumb-base-color',
  '@breadcrumb-separator-margin': '0 @padding-sm',

  // Badge
  '@badge-height': '24px',
  '@badge-dot-size': '10px',
  '@badge-font-size': '@font-size-base',
  '@badge-font-weight': '500',
  '@badge-text-color': '@primary-color',
  '@badge-color': '#FFC56C',

  // Checkbox
  '@checkbox-border-radius': '0',
  '@checkbox-group-item-margin-right': '12px',
};
