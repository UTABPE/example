import { FC, useContext, useState } from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Link, Outlet } from 'react-router-dom';
import { Layout, Breadcrumb as BreadcrumbAntd, Divider } from 'antd';

import { SideBar } from '@components/organisms/SideBar';
import { AppHeader } from '@components/organisms/AppHeader';
import { Breadcrumb } from '@components/atoms/Breadcrumb';
import { ChevronRight } from '@components/atoms/Icon';
import { PageMetaContext } from '@context/PageMetaContext';

const UserLayoutBase: FC = styled(Layout)`
  ${tw`h-screen bg-transparent`}
  .ant-space-item {
    display: flex;
  }
`;

const Content = styled(Layout.Content)`
  ${tw`p-6 bg-white`}
`;

const BreadcrumbItem = BreadcrumbAntd.Item;

export const UserLayout: FC = () => {
  const [isSideBarCollapsed, setIsSideBarCollapsed] = useState(false);
  const pageMetaContext = useContext(PageMetaContext);

  const layoutOffset = isSideBarCollapsed ? 'ml-[100px]' : 'ml-[17rem]';

  return (
    <UserLayoutBase>
      <SideBar
        isCollapsed={isSideBarCollapsed}
        setIsCollapsed={setIsSideBarCollapsed}
      />
      <Layout className={`transition-all ${layoutOffset}`}>
        <AppHeader
          isSideBarCollapsed={isSideBarCollapsed}
          setIsSideBarCollapsed={setIsSideBarCollapsed}
        />
        <Content>
          <Breadcrumb separator={<ChevronRight />}>
            {pageMetaContext.breadcrumbs?.map((breadcrumb, index) => (
              <BreadcrumbItem key={index}>
                {breadcrumb.link ? (
                  <Link to={breadcrumb.link}>{breadcrumb.title}</Link>
                ) : (
                  breadcrumb.title
                )}
              </BreadcrumbItem>
            ))}
          </Breadcrumb>
          <Divider className="mt-5 mb-0" />
          <div className="h-[calc(100%-20px)] relative">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </UserLayoutBase>
  );
};
