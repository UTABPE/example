import { MenuProps } from 'antd';

export type SideBarMenuProps = MenuProps & {
  readonly isSideBarCollapsed?: boolean;
};
