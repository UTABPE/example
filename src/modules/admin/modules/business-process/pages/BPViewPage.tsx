import { useEffect, useRef, useState } from 'react';
import { Typography } from 'antd';
import { PageMeta } from '@context/PageMetaContext';
import BpmnViewer from 'bpmn-js';
import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import { getBpDefinition } from '../api/bpmnApi';

export const BusinessProcessViewPage = () => {
  const params = useParams();
  const id = params.id ?? '';

  const [viewer, setViewer] = useState<BpmnViewer>();

  const containerRef = useRef<HTMLDivElement>(null);

  const bpDefinitionQuery = useQuery(['getBpDefinition', id], () =>
    getBpDefinition(id).then((res) => res.data)
  );

  useEffect(() => {
    if (!containerRef.current) return;

    const _viewer = new BpmnViewer({
      container: containerRef.current,
    });

    // _modeler.importXML();

    if (!viewer) {
      setViewer(_viewer);
    }

    return () => {
      // _viewer?.destroy();
    };
  }, []);

  useEffect(() => {
    if (viewer && bpDefinitionQuery.data?.bpmnContent) {
      viewer.importXML(bpDefinitionQuery.data?.bpmnContent);
    }
  }, [bpDefinitionQuery.data?.bpmnContent, viewer]);

  return (
    <>
      <PageMeta
        title="Бизнес-процессы"
        openMenuKeys={['administration']}
        selectedMenuKeys={['bp-constructor']}
        breadcrumbs={[
          { title: 'Администрирование' },
          { title: 'Бизнес-процессы', link: '/admin/bp' },
          { title: bpDefinitionQuery.data?.name ?? id },
        ]}
      />

      {bpDefinitionQuery.data && (
        <div className="my-4">
          <Typography>
            <b>Процесс</b>: {bpDefinitionQuery.data.name}
          </Typography>
          <Typography>
            <b>Описание</b>: {bpDefinitionQuery.data.description}
          </Typography>
          <Typography>
            <b>Модуль</b>: {bpDefinitionQuery.data.moduleId}
          </Typography>
          <Typography>
            <b>Секция модуля</b>: {bpDefinitionQuery.data.moduleSectionId}
          </Typography>
        </div>
      )}

      <div
        ref={containerRef}
        className="w-full h-full border border-gray-4 grow"
      />
    </>
  );
};
