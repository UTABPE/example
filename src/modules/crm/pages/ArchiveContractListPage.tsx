import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs as TabsAntd, Typography } from 'antd';
import { Tabs } from '@components/atoms/Tabs';
import { PageMeta } from '@context/PageMetaContext';

export const ArchiveContractListPage = () => {
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

      <Tabs activeKey={'archive'} className="w-full">
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

      <Typography.Title>Тут будет Архив</Typography.Title>
    </>
  );
};
