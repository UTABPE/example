import { useEffect, useState } from 'react';
import { notification, Space, Tabs as TabsAntd } from 'antd';
import { Input } from '@components/atoms/Input';
import { AdjustmentsHorizontal, Plus, Search } from '@components/atoms/Icon';
import { BusinessProcessListTable } from '@modules/admin/modules/business-process/components/organisms/BPListTable';
import { Link } from 'react-router-dom';
import { PageMeta } from '@context/PageMetaContext';
import { useMutation, useQuery } from 'react-query';
import { Tabs } from '@components/atoms/Tabs';
import { TableIconButton } from '@components/atoms/TableIconButton';
import { Button } from '@components/atoms/Button';
import {
  getBpDefinitionList,
  getBpDraftList,
  postDraftBp,
} from '../api/bpmnApi';
import { CreateBPDraftPayload } from '../types/business-process/businessProcess';
import { Modal } from '@components/molecules/Modal';
import { NewBpForm } from '../components/organisms/NewBPForm';
import { useNavigate } from 'react-router';
import { PaginationPayload } from '@/types/Pagination';
import { Pagination } from '@components/molecules/Pagination';

type TabOptions = 'published' | 'drafts';

const TabItem = TabsAntd.TabPane;

const PAGE_SIZE = 20;

export const BusinessProcessListPage = () => {
  const [activeTab, setActiveTab] = useState<TabOptions>('published');
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const [isNewBpModalOpen, setIsNewBpModalOpen] = useState(false);

  const handleTabChange = (tab: TabOptions) => {
    setActiveTab(tab);
    setPage(0);
  };

  const bpListQuery = useQuery(['bpList', activeTab, page], async () => {
    const params: PaginationPayload = { page, size: PAGE_SIZE };

    switch (activeTab) {
      case 'published':
        return getBpDefinitionList(params).then((res) => res.data);
      case 'drafts':
        return getBpDraftList(params).then((res) => res.data);
      default:
        console.log('default');
        return;
    }
  });

  const createBpDraftRequest = useMutation(
    (pl: CreateBPDraftPayload) => postDraftBp(pl),
    {
      onSuccess(res) {
        setIsNewBpModalOpen(false);

        notification.success({ message: 'Драфт создан' });
        navigate(`/admin/bp/draft/${res.data}`);
      },
      onError() {
        notification.error({ message: 'Произошла ошибка' });
      },
    }
  );

  return (
    <>
      <PageMeta
        title="Бизнес-процессы"
        openMenuKeys={['administration']}
        selectedMenuKeys={['bp-constructor']}
        breadcrumbs={[
          { title: 'Администрирование' },
          { title: 'Бизнес-процессы', link: '/admin/bp' },
        ]}
      />

      <Space direction="vertical" className="w-full" size="middle">
        <Tabs
          activeKey={activeTab}
          onChange={(t) => handleTabChange(t as TabOptions)}
          className="w-full"
        >
          <TabItem tab="Опубликованные" key="published" />
          <TabItem tab="Черновики" key="drafts" />
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
            className="flex-1 py-0 px-2"
          />
          <Button icon={<Plus />} onClick={() => setIsNewBpModalOpen(true)}>
            Создать бизнес процесс
          </Button>
        </div>

        <Modal
          visible={isNewBpModalOpen}
          title="Создание нового бизнес-процесса"
          destroyOnClose
          footer={false}
          onCancel={() => setIsNewBpModalOpen(false)}
        >
          <NewBpForm
            isLoading={createBpDraftRequest.isLoading}
            onSubmit={(values) => {
              createBpDraftRequest.mutate(values);
            }}
            onCancel={() => setIsNewBpModalOpen(false)}
          />
        </Modal>

        <BusinessProcessListTable
          processes={bpListQuery.data?.content ?? []}
          isLoading={bpListQuery.isLoading}
          getBpLink={(bp) => `/admin/bp/${bp.id}`}
        />
        <Pagination
          onChange={(page, pageSize) => {
            setPage(page - 1);
          }}
          pageSize={PAGE_SIZE}
          showQuickJumper={true}
          total={bpListQuery.data?.totalItems}
        />
      </Space>
    </>
  );
};
