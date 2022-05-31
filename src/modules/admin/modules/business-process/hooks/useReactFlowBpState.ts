import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { Elements, isNode, Position } from 'react-flow-renderer';
import { NodeType } from '../components/organisms/BusinessProcessFlowEditor/types';

const NODE_WIDTH = 204;
const NODE_HEIGHT = 80;
const NODES_PER_ROW = 3;
const Y_NODE_OFFSET = 112;
const X_PADDING = 60;
const X_NODE_OFFSET = 136;
const Y_PADDING = 100;

const checkIsRowEven = (index: number) => {
  const rowNumber = Math.ceil((index + 1) / NODES_PER_ROW);
  const isRowEven = rowNumber % 2 === 0;

  return isRowEven;
};

const calcX = (index: number): number => {
  const rowNumber = Math.ceil((index + 1) / NODES_PER_ROW);
  const isRowEven = rowNumber % 2 === 0;

  const _inRowNumber = rowNumber * NODES_PER_ROW - index;

  if (isRowEven) {
    return X_PADDING + (_inRowNumber - 1) * (NODE_WIDTH + X_NODE_OFFSET);
  }

  return (
    X_PADDING + (NODES_PER_ROW - _inRowNumber) * (NODE_WIDTH + X_NODE_OFFSET)
  );
};

const calcY = (index: number): number => {
  const rowNumber = Math.ceil((index + 1) / NODES_PER_ROW);
  const y = Y_PADDING + (NODE_HEIGHT + Y_NODE_OFFSET) * (rowNumber - 1);

  return y;
};

// TODO: remove any
export const useReactFlowBpState = ({
  onStartClick,
  onExecutionClick,
}: {
  onStartClick?: () => void;
  onExecutionClick?: () => void;
}) => {
  const [dataSet, setDataSet] = useState<Elements>([
    {
      id: nanoid(),
      type: NodeType.START,
      data: { onAction: onStartClick },
      position: { x: X_PADDING, y: Y_PADDING },
    },
  ]);

  const addNode = (type: NodeType) => {
    setDataSet((prev) => {
      const nextId = nanoid();
      const nodes = prev.filter((el) => isNode(el));
      const lastNode = nodes[nodes.length - 1];
      const nextIndex = nodes.length;

      return [
        ...prev,
        {
          id: nextId,
          data: { onAction: onExecutionClick },
          type,
          sourcePosition: checkIsRowEven(nextIndex)
            ? Position.Left
            : Position.Right,
          targetPosition: checkIsRowEven(nextIndex)
            ? Position.Right
            : Position.Left,
          position: {
            y: calcY(nextIndex),
            x: calcX(nextIndex),
          },
        },
        {
          id: nanoid(),
          source: lastNode.id,
          label: 'Статус',
          target: nextId,
          type: 'smoothstep',
        },
      ];
    });
  };

  return {
    dataSet,
    addNode,
  };
};
