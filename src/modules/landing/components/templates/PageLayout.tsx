import { FC, useContext, useState } from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Link, Outlet } from 'react-router-dom';
import { Layout, Breadcrumb as BreadcrumbAntd, Divider } from 'antd';

import { Breadcrumb } from '@components/atoms/Breadcrumb';
import { ChevronRight } from '@components/atoms/Icon';
import { PageMetaContext } from '@context/PageMetaContext';
import { AppHeader } from '../molecules/AppHeader';
import { AppFooter } from '../molecules/AppFooter';

const PageLayoutBase: FC = styled(Layout)`
  ${tw`bg-transparent`}
  .ant-space-item {
    display: flex;
  }
`;

const Content = styled(Layout.Content)`
  ${tw`bg-white mt-[112px]`}
`;

const BreadcrumbItem = BreadcrumbAntd.Item;

export const PageLayout: FC = () => {
  const pageMetaContext = useContext(PageMetaContext);

  return (
    <PageLayoutBase>
      <Layout className={`transition-all  items-center bg-white`}>
        <AppHeader />
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
          {/* <div className="h-[calc(100%-20px)]"> */}
          <Outlet />
          {/* </div> */}
        </Content>
        <AppFooter />
      </Layout>
    </PageLayoutBase>
  );
};
