import React from 'react';
import { Link } from 'react-router-dom';
import { Space, Tabs as TabsAntd, Typography } from 'antd';
import { Tabs } from '@components/atoms/Tabs';
import { PageMeta } from '@context/PageMetaContext';

export const ContractListPage = () => {
  return (
    <>
      <PageMeta
        title="CRM: Сделки"
        openMenuKeys={['crm']}
        selectedMenuKeys={['crm', 'contracts']}
        breadcrumbs={[
          { title: 'CRM', link: '/crm' },
          { title: 'Контрагенты', link: '/crm' },
        ]}
      />

      <Space direction="vertical" className="w-full" size="middle">
        <Tabs activeKey={'contracts'} className="w-full">
          <TabsAntd.TabPane
            tab={<Link to="/crm/contracts">Сделки</Link>}
            key="contracts"
          />
          <TabsAntd.TabPane
            tab={<Link to="/crm/contractors">Контрагенты</Link>}
            key="contractors"
          />
          <TabsAntd.TabPane
            tab={<Link to="/crm/archive">Архив</Link>}
            key="archive"
          />
        </Tabs>
      </Space>

      <Typography.Title>Тут будут сделки</Typography.Title>
    </>
  );
};
