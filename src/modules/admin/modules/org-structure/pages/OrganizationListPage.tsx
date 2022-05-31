import { Col, Divider, Modal as AntdModal, Row } from 'antd';
import { Input } from '@components/atoms/Input';
import {
  AdjustmentsHorizontal,
  ChevronDown,
  InfoCircleOutline,
  Plus,
  Search,
  X,
} from '@components/atoms/Icon';
import { PageMeta } from '@context/PageMetaContext';
import { TableIconButton } from '@components/atoms/TableIconButton';
import { Button } from '@components/atoms/Button';
import { MenuItemButton } from '@components/atoms/MenuItemButton';
import { Tree } from '@components/molecules/Tree';
import { useState } from 'react';
import { CreateNewOrganizationForm } from '../components/organisms/CreateNewOrganizationForm';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { CreateSubsidiary } from '../components/organisms/CreateSubsidiaryForm';

const data = [
  {
    title: 'ТОО “Kap Technology',
    key: '0-0',
    children: [
      {
        title: 'ТОО «РУ-6»',
        key: '0-0-0',
        children: [
          {
            title: 'Руководство',
            key: '0-0-0-0',
            icon: false,
          },
          {
            title: 'Производственный персонал',
            key: '0-0-0-1',
            children: [],
          },
        ],
      },
      { title: 'ТОО «Байкен-U»', key: '0-0-1' },
    ],
  },
  {
    title: 'ТОО «Kazatomprom-SaUran»',
    key: '0-1',
    children: [],
  },
  {
    title: 'ТОО «Добывающее предприятие»',
    key: '0-2',
    children: [],
  },
  {
    title: 'ТОО «Каратау»',
    key: '0-3',
    children: [],
  },
  {
    title: 'ТОО «АППАК»',
    key: '0-4',
    children: [],
  },
];

const Modal = styled(AntdModal)`
  .ant-modal-header {
    padding: 16px 0;
    .ant-modal-title {
      ${tw`text-primary font-medium`}
    }
  }
  .ant-modal-content {
    ${tw`px-6`}
    .ant-modal-close-x {
      ${tw`flex items-center justify-center`}
    }
  }
  .ant-modal-body {
    ${tw`px-0 py-6`}
  }
`;
export const OrganizationListPage = () => {
  const [
    isCreateNewOrganizationModalVisible,
    setIsCreateNewOrganizationModalVisible,
  ] = useState(false);

  const [isCreateSubsidiaryModalVisible, setIsCreateSubsidiaryModalVisible] =
    useState(false);

  return (
    <>
      <PageMeta
        title="Орг структура"
        openMenuKeys={['administration']}
        selectedMenuKeys={['org-structure']}
        breadcrumbs={[
          { title: 'Администрирование' },
          { title: 'Орг структура', link: '/admin/org-structure' },
        ]}
      />

      <Row gutter={20} className="mt-4">
        <Col span={13}>
          <Input prefix={<Search />} placeholder="Поиск" />
        </Col>
        <Col span={4}>
          <Input
            placeholder="Фильтрация"
            suffix={
              <TableIconButton
                className="text-gray-6 h-6 min-w-[24px] p-0"
                icon={<AdjustmentsHorizontal />}
              />
            }
          />
        </Col>
        <Col span={6}>
          <Button
            icon={<Plus />}
            onClick={() => setIsCreateNewOrganizationModalVisible(true)}
          >
            Создать организацию
          </Button>
        </Col>
        <Col span={1} className="flex items-center justify-center">
          <MenuItemButton icon={<InfoCircleOutline />} backgroundOn />
        </Col>
      </Row>
      <Divider className="mb-0" />
      <Tree
        showLine={{ showLeafIcon: false }}
        switcherIcon={<ChevronDown />}
        defaultExpandedKeys={['0-0-0']}
        showIcon={false}
        treeData={data}
      />
      <Modal
        closeIcon={<X />}
        visible={isCreateNewOrganizationModalVisible}
        onCancel={() => setIsCreateNewOrganizationModalVisible(false)}
        title="Создать организацию "
        footer={false}
        width={752}
      >
        <CreateNewOrganizationForm />
      </Modal>
      <Modal
        width={752}
        closeIcon={<X />}
        visible={isCreateSubsidiaryModalVisible}
        onCancel={() => setIsCreateSubsidiaryModalVisible(false)}
        title="Создать организацию в “ТОО “Kap Technology””"
        footer={false}
      >
        <CreateSubsidiary />
      </Modal>
    </>
  );
};
