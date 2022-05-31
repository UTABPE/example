import {
  Col,
  Empty,
  Modal as AntdModal,
  Row,
  Skeleton,
  Typography,
  Tree as TreeAntd,
} from 'antd';
import { Input } from '@components/atoms/Input';
import {
  AdjustmentsHorizontal,
  Ascending,
  ChevronDown,
  InfoCircleOutline,
  Pencil,
  Plus,
  Search,
} from '@components/atoms/Icon';
import { PageMeta } from '@context/PageMetaContext';
import { TableIconButton } from '@components/atoms/TableIconButton';
import { Button } from '@components/atoms/Button';
import { MenuItemButton } from '@components/atoms/MenuItemButton';
import { Tree } from '@components/molecules/Tree';
import { FC, Key, useEffect, useState } from 'react';
import emptyIcon from '@assets/img/emptyTable.svg';
import styled from '@emotion/styled';
import { X } from '@components/atoms/Icon';
import tw from 'twin.macro';
import { Pagination } from '@components/molecules/Pagination';
import { CreateNewModuleForm } from '../components/organisms/CreateNewModuleForm';
import { SingleModuleDescription } from '../components/organisms/SingleModuleDescription';
import { moduleApi } from '../api/businessModulesApi';
import { ModuleWithSections } from '../types/Module';
import { useQuery } from 'react-query';

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
const { Title } = Typography;
const { TreeNode } = TreeAntd;

export const BusinessModulesListPage = () => {
  const [isCreateNewModuleModalVisible, setIsCreateNewModuleModalVisible] =
    useState(false);
  const [pageSize, setPageSize] = useState(20);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalRecordsCount, setTotalRecordsCount] = useState(0);
  const [isModuleDescriptionVisible, setIsModuleDescriptionVisible] =
    useState(false);
  const [singleModule, setSingleModule] = useState<ModuleWithSections>();

  const onModuleClick = (e: Key[]) => {
    setIsModuleDescriptionVisible(true);
    moduleApi.getSingleModuleWithSections(e[0].toString()).then((res) => {
      setSingleModule(res.data);
    });
  };

  const { data, isLoading, refetch } = useQuery(
    'getAllModules',
    () =>
      moduleApi
        .getAllModulesWithSections(pageNumber, pageSize)
        .then((res) => res.data),
    {
      refetchOnWindowFocus: false,
    }
  );

  const TreeNodeTitle: FC<{ title: string }> = ({ title }) => {
    return (
      <div className="flex items-center justify-between">
        {title}
        <MenuItemButton
          icon={<Pencil />}
          backgroundOn
          buttonSize="xs"
          className="mr-1.5"
        />
      </div>
    );
  };

  return (
    <>
      <PageMeta
        title="Модули"
        openMenuKeys={['administration']}
        selectedMenuKeys={['org-structure']}
        breadcrumbs={[
          { title: 'Администрирование' },
          { title: 'Модули', link: '/admin/modules' },
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
            onClick={() => setIsCreateNewModuleModalVisible(true)}
          >
            Создать модуль
          </Button>
        </Col>
        <Col span={1} className="flex items-center justify-center">
          <MenuItemButton
            onClick={() =>
              setIsModuleDescriptionVisible(!isModuleDescriptionVisible)
            }
            icon={<InfoCircleOutline />}
            backgroundOn
          />
        </Col>
      </Row>
      <Row className="h-full mt-4">
        <Col className="h-full relative" flex="auto">
          <Row
            align="middle"
            justify="space-between"
            className="py-1.5 pl-5 pr-3 bg-blue-7 border-t border-gray-4"
          >
            <Title className="text-primary text-xs">Наименование модуля</Title>
            <TableIconButton icon={<Ascending />} buttonSize="xs" />
          </Row>

          {data ? (
            <Tree
              showLine={{ showLeafIcon: false }}
              switcherIcon={<ChevronDown />}
              showIcon={false}
              onSelect={onModuleClick}
            >
              {data.content.map((module) => (
                <TreeNode
                  title={<TreeNodeTitle title={module.name} />}
                  key={module.moduleId}
                >
                  {module.sections.map((section) => (
                    <TreeNode
                      title={<TreeNodeTitle title={section.name} />}
                      key={section.sectionId}
                    />
                  ))}
                </TreeNode>
              ))}
            </Tree>
          ) : (
            <Empty
              className="flex flex-col items-center mt-[150px]"
              image={emptyIcon}
              imageStyle={{
                height: 151,
                width: 264,
              }}
              description={
                <span className="text-sm text-gray-7">
                  Здесь пока ничего нет <br /> Создайте модуль с помощью кнопки{' '}
                  <br />
                  “Создать модуль”
                </span>
              }
            />
          )}
          {isLoading && <Skeleton />}
          <Pagination
            onPageSizeChange={(pageSize) => {
              setPageSize(pageSize);
            }}
            onChange={(page, pageSize) => {
              setPageNumber(page - 1);
            }}
            pageSize={pageSize}
            showQuickJumper={true}
            total={totalRecordsCount}
          />
        </Col>
        {singleModule && (
          <SingleModuleDescription
            visible={isModuleDescriptionVisible}
            module={singleModule}
          />
        )}
      </Row>
      <Modal
        closeIcon={<X />}
        visible={isCreateNewModuleModalVisible}
        onCancel={() => setIsCreateNewModuleModalVisible(false)}
        title="Создание нового модуля"
        footer={false}
        width={752}
      >
        <CreateNewModuleForm
          onCancel={() => setIsCreateNewModuleModalVisible(false)}
          refetchModulesList={refetch}
        />
      </Modal>
    </>
  );
};
