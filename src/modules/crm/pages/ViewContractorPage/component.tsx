import React, { useCallback, useMemo, useState } from 'react';
import { PageMeta } from '@context/PageMetaContext';
import { Col, Row, Tabs, Typography, Upload } from 'antd';
import { Pencil, X } from '@components/atoms/Icon';
import { Button } from '@components/atoms/Button';
import tw from 'twin.macro';
import { css } from '@emotion/react';
import { useParams } from 'react-router-dom';
import { CONTRACTORS_MOCK_DATA } from '@modules/crm/utils/mockData';
import { ContractorDetails } from '@modules/crm/pages/ViewContractorPage/libs/components/ContractorDetails';
import { ContractorEdit } from '@modules/crm/pages/ViewContractorPage/libs/components/ContractorEdit';
import { ContactsAddEditForm } from '@modules/crm/pages/ViewContractorPage/libs/components/ContactsAddEditForm';
import { useQuery } from 'react-query';
import { Contractor } from '@modules/crm/types/Contractor';
import { contractorsApi } from '@modules/crm/api/contractorsApi';

export const ViewContractorPage = () => {
  const params = useParams();
  // const contractor = useMemo(
  //   () =>
  //     CONTRACTORS_MOCK_DATA.find((item) => item.id.toString() === params.id),
  //   [params.id]
  // );
  const { data: contractor } = useQuery<Contractor | undefined>(
    'contractorsList',
    () =>
      params.id
        ? contractorsApi.getCounterpartyById(params.id).then((res) => res.data)
        : undefined
  );
  const [stage, setStage] = useState('contractor_details');

  const handleStageChange = useCallback((key) => {
    setStage(key);
  }, []);

  const handleAddContactClick = useCallback(() => {
    console.log('contacts');
    setStage('contacts');
  }, []);

  const handleEditContractor = useCallback(() => {
    setStage('contractor_edit');
  }, []);
  return (
    <>
      <PageMeta
        title="CRM: Контрагенты"
        openMenuKeys={['crm']}
        selectedMenuKeys={['crm', 'contractors']}
        breadcrumbs={[
          { title: 'CRM', link: '/crm' },
          { title: 'Контрагенты', link: '/crm/contractors' },
          { title: 'Новый контакт', link: '/crm/contractors/newcontact' },
        ]}
      />
      <Row>
        <Col span={24}>
          <div css={tw`my-2 flex justify-between`}>
            <Typography.Text css={tw`text-darkBlue-15 font-medium mt-1`}>
              {contractor?.companyName}
            </Typography.Text>
            <div css={tw`flex`}>
              <Button
                css={css`
                  ${tw`min-w-0 w-8 h-8 p-0 mr-5 border-none rounded-full
                        text-darkBlue-15 bg-blue-10 shadow-none hover:(bg-blue-35)`}
                  span {
                    ${tw`mb-0.5`}
                  }
                `}
                onClick={handleEditContractor}
              >
                <Pencil />
              </Button>
              <Button
                css={css`
                  ${tw`min-w-0 w-8 h-8 p-0 border-none rounded-full
                        text-gray-7 bg-transparent shadow-none hover:(bg-blue-35)`}
                  span {
                  }
                `}
              >
                <X />
              </Button>
            </div>
          </div>
          <hr css={tw`border-gray-4`} />
        </Col>
        <Col span={18}>
          {stage === 'contractor_details' && (
            <ContractorDetails
              contractor={contractor}
              onAddContactClick={handleAddContactClick}
            />
          )}

          {stage === 'contacts' && <ContactsAddEditForm />}

          {stage === 'contractor_edit' && (
            <ContractorEdit
              contractor={contractor}
              onAddContactClick={handleAddContactClick}
            />
          )}
        </Col>

        <Col span={6}>
          <div className="px-4 py-8">
            <Tabs
              activeKey={stage}
              onTabClick={handleStageChange}
              tabPosition="right"
              css={tw`block`}
            >
              <Tabs.TabPane tab="Данные компании" key="contractor_details" />
              <Tabs.TabPane tab="Контактные лица" key="contacts" />
              <Tabs.TabPane tab="Комментарий" key="comment" />
              <Tabs.TabPane tab="История изменений" key="history" />
            </Tabs>
          </div>
        </Col>
      </Row>
    </>
  );
};
