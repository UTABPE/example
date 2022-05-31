import styled from '@emotion/styled';
import { Space, Typography } from 'antd';
import { FC } from 'react';
import tw from 'twin.macro';
import { StatusProps, TASK_STATUS } from './props';

const { Text } = Typography;

const StatusWrapper = styled(Space)`
  ${tw`flex items-center`}
`;
const StatusTitle = styled(Text)`
  ${tw`text-gray-8 text-sm`}
`;

const StatusEllipse = styled.span<StatusProps>`
  ${tw`flex items-center justify-center rounded-full w-4 h-4 border border-gray-7`}
`;
const StatusIndicator = styled.span<StatusProps>`
  ${tw`w-2.5 h-2.5 rounded-full`}
  ${({ status }) => {
    switch (status) {
      case TASK_STATUS.NEW:
        return tw`bg-blue`;
      case TASK_STATUS.IN_PROGRESS:
        return tw`bg-warning`;
      case TASK_STATUS.PENDING:
        return tw`bg-pending`;
      case TASK_STATUS.COMPLETED:
        return tw`bg-success`;
      case TASK_STATUS.REJECTED:
        return tw`bg-danger`;
    }
  }};
`;

export const TaskStatus: FC<StatusProps> = ({ title, status }) => {
  return (
    <StatusWrapper>
      <StatusEllipse>
        <StatusIndicator status={status} />
      </StatusEllipse>
      <StatusTitle>{title}</StatusTitle>
    </StatusWrapper>
  );
};
