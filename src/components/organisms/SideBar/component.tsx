import { FC } from 'react';
import { Layout, Menu } from 'antd';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { SidebarProps } from './props';
import { SideBarProfile } from '@components/molecules/SideBarProfile';
import { SideBarNavigation } from '../SideBarNavigation/component';
import { useKeycloak } from '@react-keycloak/web';

const { Sider } = Layout;

const SiderBase = styled(Sider)`
  ${tw`bg-white pt-4 border-r border-gray-4 border-solid fixed h-full`}
  padding: ${(props) => props.collapsed && tw`p-4`};
`;

export const SideBar: FC<SidebarProps> = ({ isCollapsed, setIsCollapsed }) => {
  // const kc = useKeycloak();
  const profile: any = null; // kc.keycloak.profile;

  const fullName = profile
    ? `${profile.firstName} ${profile.lastName}`
    : 'Ivan Pupkin';

  return (
    <SiderBase
      trigger={null}
      collapsible
      collapsed={isCollapsed}
      onCollapse={() => setIsCollapsed(!isCollapsed)}
      width="17rem"
      collapsedWidth={100}
    >
      <SideBarProfile
        name={fullName}
        initials="IP"
        isSideBarCollapsed={isCollapsed}
      />
      <SideBarNavigation isSideBarCollapsed={isCollapsed} />
    </SiderBase>
  );
};
