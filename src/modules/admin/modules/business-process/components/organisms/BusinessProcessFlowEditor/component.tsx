import React, { FC, useRef, useState } from 'react';
import { Col, Row, Space, Tabs as TabsAntd } from 'antd';
import ReactFlow, {
  Position,
  ReactFlowProvider,
  Controls,
  ControlButton,
} from 'react-flow-renderer';
import { withReactFlowEndpoints } from '../../../hocs/withReactFlowEndpoints';
import { useReactFlowBpState } from '../../../hooks/useReactFlowBpState';
import { BusinessProcessFlowEditorProps } from './props';
import { NodeType } from './types';
import { NodeWrapper } from '../../molecules/NodeWrapper';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Button } from '@components/atoms/Button';
import { Hand, ZoomIn, ZoomOut } from '@components/atoms/Icon';

const Tabs = styled(TabsAntd)`
  .ant-tabs-nav-wrap {
    ${tw`flex justify-center`}
    .ant-tabs-tab {
      ${tw`text-sm font-normal text-gray-8 py-4! px-2! m-0`}
    }
  }
`;

/**
 * 71px header
 * + 64px breadcrumbs
 * + 1px divider
 * + 47px constructor tabs
 * + 113px constructor footer
 * = 290px total area required for users' main work area
 */

const Flow = styled(ReactFlow)`
  ${tw`border border-gray-4`}
  height: calc(100vh - 290px);
  .react-flow__handle {
    ${tw`bg-white border border-gray-7`}
  }
  .react-flow__controls {
    ${tw`right-3 left-auto bottom-3`}
    button {
      ${tw`text-gray-8 w-10 h-10 p-0`}
      svg {
        ${tw`max-w-[24px] max-h-[24px] text-gray-7`}
      }
    }
  }
`;

const nodeTypes = {
  [NodeType.START]: withReactFlowEndpoints(
    NodeWrapper,
    {
      source: Position.Right,
    },
    'Создание',
    'Настройка компонента'
  ),
  [NodeType.EXECUTION]: withReactFlowEndpoints(
    NodeWrapper,
    {
      target: Position.Left,
      source: Position.Right,
    },
    'Исполнение',
    'Настройка компонента'
  ),
};

export const BusinessProcessFlowEditor: FC<BusinessProcessFlowEditorProps> = (
  props
) => {
  const { dataSet, addNode } = useReactFlowBpState({
    onStartClick: props.onEdit,
    onExecutionClick: props.onEdit,
  });

  const reactFlowWrapper = useRef<any>(null);

  return (
    <Row className="h-full w-full">
      <ReactFlowProvider>
        <Col span={18} ref={reactFlowWrapper}>
          <Flow
            className="bg-constructor-pattern bg-blue-5 "
            elements={dataSet}
            nodesDraggable={false}
            preventScrolling={false}
            zoomOnScroll={false}
            nodeTypes={nodeTypes}
          >
            <Controls
              showInteractive={false}
              showFitView={false}
              showZoom={false}
            >
              <ControlButton onClick={() => console.log("Hi I'm zoom")}>
                <ZoomIn />
              </ControlButton>
              <ControlButton>
                <ZoomOut />
              </ControlButton>
              <ControlButton>
                <Hand />
              </ControlButton>
            </Controls>
          </Flow>
        </Col>
        <Col span={6}>
          <Tabs>
            <TabsAntd.TabPane
              tab="Конструктор"
              key="1"
              className="flex justify-center pt-6"
            >
              <NodeWrapper
                onClick={() => addNode(NodeType.EXECUTION)}
                title="Исполнение"
                subtitle="Настройка компонента"
              />
            </TabsAntd.TabPane>
            <TabsAntd.TabPane tab="Шаблоны" key="2" disabled>
              Stub
            </TabsAntd.TabPane>
            <TabsAntd.TabPane tab="Черновики" key="3" disabled>
              Stub
            </TabsAntd.TabPane>
          </Tabs>
        </Col>
      </ReactFlowProvider>
      <Col span={18}>
        <Space
          direction="horizontal"
          size={24}
          className="flex justify-center w-full my-6"
        >
          <Button type="default" className="text-sm">
            Отменить
          </Button>
          <Button type="default" className="text-sm">
            Сохранить
          </Button>
          <Button className="text-sm" disabled>
            Опубликовать
          </Button>
        </Space>
      </Col>
    </Row>
  );
};
