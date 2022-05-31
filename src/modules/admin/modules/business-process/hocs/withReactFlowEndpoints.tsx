import React, { FC } from 'react';
import { Handle, Position } from 'react-flow-renderer';
import { RequireAtLeastOne } from 'types/RequireAtLeastOne';

export function withReactFlowEndpoints<P>(
  Component: React.ComponentType<P>,
  endpointPosition: RequireAtLeastOne<{
    target?: Position;
    source?: Position;
  }>,
  title?: string,
  subtitle?: string
): React.ComponentType<P> {
  return (props: P) => (
    <>
      {endpointPosition?.target && (
        <Handle type="target" position={endpointPosition.target} />
      )}

      <Component {...props} title={title} subtitle={subtitle} />

      {endpointPosition?.source && (
        <Handle type="source" position={endpointPosition.source} />
      )}
    </>
  );
}
