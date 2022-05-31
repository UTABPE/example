import React, { ChangeEventHandler, useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Avatar,
  Col,
  Descriptions,
  Popover,
  Radio,
  Row,
  Space,
  Table,
  Tabs as TabsAntd,
} from 'antd';
import { Tabs } from '@components/atoms/Tabs';
import { PageMeta } from '@context/PageMetaContext';
import {
  AdjustmentsHorizontal,
  Card1,
  ChevronDown,
  ChevronRight,
  List,
  Plus,
  Search,
} from '@components/atoms/Icon';
import { Button } from '@components/atoms/Button';
import { CONTRACTORS_MOCK_DATA } from '../../utils/mockData';
import { Input } from '@components/atoms/Input';
import { TableIconButton } from '@components/atoms/TableIconButton';
import { CardContractor } from '@modules/crm/components/molecules/CardContractor';
import tw from 'twin.macro';
import { AvatarContactGroup } from '@modules/crm/pages/ContractorListPage/libs/components/AvatarContactGroup';
import { contractorsTableStyles } from '@modules/crm/pages/ContractorListPage/libs/utils/contractorsTableStyles';
import { descriptionsStyles } from '@modules/crm/pages/ContractorListPage/libs/utils/descriptionsStyles';
import { Highlighted } from '@components/atoms/Highlighted';
import { RadioButton } from './libs/components/RadioButton';
import { contractorsApi } from '@modules/crm/api/contractorsApi';
import { useQuery } from 'react-query';
import { SortTypes } from '@modules/crm/types/SortTypes';
import { Pagination } from '@components/molecules/Pagination';
import { Contractor } from '@modules/crm/types/Contractor';
import { Contact } from '@modules/crm/types/Contact';

export const ContractorListPage = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'list' | 'card'>('list');
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [sort, setSort] = useState<[string, SortTypes] | undefined>();
  const { data: contractorsListData } = useQuery('getCounterpartiesList', () =>
    contractorsApi
      .getCounterpartiesList(page, pageSize, sort)
      .then((res) => res.data)
  );
  const handleViewModeChange = useCallback((e) => {
    setViewMode(e.target.value);
  }, []);

  const handleSearchInputChange = useCallback<
    ChangeEventHandler<HTMLInputElement>
  >((e) => {
    setSearchTerm(e.target.value);
  }, []);

  const [searchTerm, setSearchTerm] = useState('');

  const handlePageSizeChange = useCallback((val: number) => {
    console.log(val);
  }, []);
  const handleContractorCardClick = useCallback(
    (contractorId: string) => () => {
      navigate(`/crm/contractors/${contractorId}`);
    },
    [navigate]
  );
  return (
    <>
      <PageMeta
        title="CRM: Контрагенты"
        openMenuKeys={['crm']}
        selectedMenuKeys={['crm', 'contractors']}
        breadcrumbs={[
          { title: 'CRM', link: '/crm' },
          { title: 'Контрагенты', link: '/crm' },
        ]}
      />

      <Space direction="vertical" className="w-full" size="middle">
        <Tabs activeKey={'contractors'} className="w-full">
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

        <div className="flex w-full space-x-4">
          <Input
            prefix={<Search />}
            suffix={
              <TableIconButton
                className="text-gray-6 h-6 min-w-[24px] p-0"
                icon={<AdjustmentsHorizontal />}
              />
            }
            placeholder="Поиск"
            className="flex-1 py-0 px-2 h-10"
            onChange={handleSearchInputChange}
          />
          <Link to="/crm/contractors/new">
            <Button icon={<Plus />} buttonSize="md">
              Добавить контрагента
            </Button>
          </Link>

          <Radio.Group
            size="middle"
            className="h-10"
            value={viewMode}
            onChange={handleViewModeChange}
          >
            <RadioButton value="card">
              <Card1 />
            </RadioButton>
            <RadioButton value="list">
              <List />
            </RadioButton>
          </Radio.Group>
        </div>
        {viewMode === 'list' ? (
          <>
            <Table
              css={contractorsTableStyles}
              className="w-full"
              rowKey="id"
              pagination={false}
              dataSource={contractorsListData?.content}
              expandable={{
                expandIcon: (r) => (
                  <Button
                    icon={r.expanded ? <ChevronDown /> : <ChevronRight />}
                    type="text"
                    buttonSize="xs"
                    shape="circle"
                    css={tw`h-8 w-8 min-w-0 rounded-full text-gray-7!
                         hover:(text-darkBlue-15 bg-darkBlue/25)
                         active:(text-darkBlue-15 bg-darkBlue/40)
                         disabled:(text-gray-5 bg-transparent)`}
                    onClick={(e) => r.onExpand(r.record, e)}
                  />
                ),
                defaultExpandAllRows: false,
                expandedRowRender: (record) => (
                  <Descriptions
                    css={descriptionsStyles}
                    labelStyle={{ color: '#8A8A8B' }}
                    column={1}
                  >
                    <Descriptions.Item label="Юридический адрес">
                      <Highlighted
                        text={`${record.streetName} ${record.building} ${
                          record.office && `, офис ${record.office}`
                        }`}
                        highlight={searchTerm}
                      />
                    </Descriptions.Item>
                    <Descriptions.Item label="Тел.">
                      <Highlighted
                        text={record.phoneNumber}
                        highlight={searchTerm}
                      />
                    </Descriptions.Item>
                    <Descriptions.Item label="Факс">
                      <Highlighted
                        text={record.faxNumber}
                        highlight={searchTerm}
                      />
                    </Descriptions.Item>
                    <Descriptions.Item label="Сайт">
                      <a href={record.websiteUrl}>
                        <Highlighted
                          text={record.websiteUrl}
                          highlight={searchTerm}
                        />
                      </a>
                    </Descriptions.Item>
                    {/*<Descriptions.Item label="Email">*/}
                    {/*  <a href={`mailto:${record.email}`}>*/}
                    {/*    <Highlighted*/}
                    {/*      text={record.email}*/}
                    {/*      highlight={searchTerm}*/}
                    {/*    />*/}
                    {/*  </a>*/}
                    {/*</Descriptions.Item>*/}
                  </Descriptions>
                ),
              }}
            >
              <Table.Column
                title="Контрагент"
                render={(d) => (
                  <Link to={`/crm/contractors/${d.id}`}>
                    <Highlighted text={d.companyName} highlight={searchTerm} />
                  </Link>
                )}
              />

              <Table.Column
                title="Регион"
                dataIndex="regionId"
                render={(d) => <Highlighted text={d} highlight={searchTerm} />}
              />

              <Table.Column
                title="Контактные лица"
                render={(d) => (
                  <AvatarContactGroup maxCount={3}>
                    {d.contacts.map((contact: Contact) => (
                      <Popover
                        title={`${contact.firstName} ${contact.lastName}`}
                        placement="bottom"
                        content={
                          <Descriptions
                            className="w-[300px]"
                            labelStyle={{ color: '#8A8A8B' }}
                            column={1}
                          >
                            <Descriptions.Item label="Должность">
                              {contact.workPosition}
                            </Descriptions.Item>
                            <Descriptions.Item label="Моб. тел.">
                              {contact.mobilePhone}
                            </Descriptions.Item>
                            <Descriptions.Item label="Раб. тел.">
                              {contact.workPhone}
                            </Descriptions.Item>
                            <Descriptions.Item label="Email">
                              <a href={`mailto:${contact.email}`}>
                                {contact.email}
                              </a>
                            </Descriptions.Item>
                          </Descriptions>
                        }
                        key={contact.email}
                      >
                        <Avatar src={contact.avatar} />
                      </Popover>
                    ))}
                  </AvatarContactGroup>
                )}
              />
            </Table>
            <Pagination
              total={10}
              onChange={handlePageSizeChange}
              pageSize={pageSize}
            />
          </>
        ) : (
          <div css={tw`w-full p-5`}>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              {contractorsListData?.content.map((contractor) => (
                <Col span={8} className="gutter-row">
                  <CardContractor
                    contractor={contractor}
                    searchTerm={searchTerm}
                    onClick={handleContractorCardClick(contractor.id)}
                  />
                </Col>
              ))}
            </Row>
          </div>
        )}
      </Space>
    </>
  );
};
