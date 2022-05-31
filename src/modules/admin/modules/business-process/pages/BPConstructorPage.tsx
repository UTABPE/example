import { useState } from 'react';
import { notification, Tabs as TabsAntd } from 'antd';
import tw from 'twin.macro';
import { BusinessProcessFlowEditor } from '@modules/admin/modules/business-process/components/organisms/BusinessProcessFlowEditor';
import { PageMeta } from '@context/PageMetaContext';
import { BusinessProcessFormCreationPage } from './BPFormCreationPage';
import { X } from '@components/atoms/Icon';
import styled from '@emotion/styled';
import { BpmnModeler } from '../components/organisms/BpmnModeler';
import { useMutation } from 'react-query';
import { postBpmn } from '../api/bpmnApi';
import { useParams, useNavigate } from 'react-router-dom';

type TabOptions = 'published' | 'drafts' | string;

const Tabs = styled(TabsAntd)`
  ${tw`w-full h-full`}
  .ant-tabs-content {
    ${tw`h-full`}
  }
  .ant-tabs-nav {
    ${tw`m-0`}
    .ant-tabs-nav-wrap {
      .ant-tabs-nav-list {
        .ant-tabs-tab {
          ${tw`border-0 p-3`}
        }
        .ant-tabs-tab-active {
          ${tw`border-b-2 border-primary`}
        }
      }
    }
  }
`;

export const BusinessProcessConstructorPage = () => {
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();

  const submitBpmn = useMutation(
    async (xml: string) => {
      postBpmn(params.id ?? '', xml);
    },
    {
      onSuccess() {
        notification.success({ message: 'BPMN опубликован' });

        navigate('/admin/bp');
      },
      onError() {
        notification.error({
          message: 'Произошла ошибка при публикации BPMN',
        });
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
          { title: 'Создание нового Бизнес-процесса' },
        ]}
        extraHeadContent={[
          <link
            rel="stylesheet"
            href="https://unpkg.com/bpmn-js-properties-panel/dist/assets/properties-panel.css"
          />,
        ]}
      />

      <BpmnModeler
        className="h-full"
        onPublish={(bpmn) => submitBpmn.mutate(bpmn)}
      />
    </>
  );
};
