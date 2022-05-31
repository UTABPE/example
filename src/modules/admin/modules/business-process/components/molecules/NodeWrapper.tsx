import { Settings, Start } from '@components/atoms/Icon';
import styled from '@emotion/styled';
import { Space, Typography } from 'antd';
import { FC } from 'react';
import tw from 'twin.macro';
import { NodeComponentProps } from 'react-flow-renderer';

const { Text } = Typography;

type Props = Omit<
  NodeComponentProps,
  'id' | 'type' | 'data' | 'isConnectable'
> & {
  onClick?: () => void;
  data?: {
    onAction?: () => void;
  };
  title?: string;
  subtitle?: string;
  draggable?: boolean;
};
const IconWrapper = styled.span`
  ${tw`w-12 h-12 absolute border rounded-full bg-gray-1 flex items-center justify-center border-gray-7 text-gray-7`}
  top:50%;
  left: 0;
  transform: translate(-50%, -50%);
`;

const Wrapper = styled.div`
  ${tw`relative w-52 h-20 pt-4 pr-2 pl-9 bg-white border border-gray-7 hover:border-darkBlue-15 cursor-pointer hover:shadow-dropdown`};
  &:hover {
    ${IconWrapper} {
      ${tw`border-darkBlue-15 text-darkBlue-15 bg-blue-20 shadow-dropdown`}
    }
  }
`;

const Title = styled(Text)`
  ${tw`text-sm text-primary font-medium`}
`;
const Subtitle = styled(Text)`
  ${tw`text-xs flex items-center text-gray-8`}
  svg {
    ${tw`mr-1`}
  }
`;

export const NodeWrapper: FC<Props> = (props) => {
  return (
    <Wrapper onClick={props.onClick} draggable>
      <IconWrapper>
        <Start />
      </IconWrapper>
      <Space direction="vertical" onClick={props.data?.onAction} size={12}>
        <Title className="">{props.title}</Title>
        <Subtitle>
          <Settings />
          {props.subtitle}
        </Subtitle>
      </Space>
    </Wrapper>
  );
};
