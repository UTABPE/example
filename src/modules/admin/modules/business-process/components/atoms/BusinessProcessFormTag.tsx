import { Button } from '@components/atoms/Button';
import { Check1, X } from '@components/atoms/Icon';
import { TableIconButton } from '@components/atoms/TableIconButton';
import styled from '@emotion/styled';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { FC } from 'react';
import tw from 'twin.macro';

type Props = {
  title: CheckboxValueType;
  onRemoveClick?: () => void;
};

const Tag = styled.div`
  ${tw`text-gray-8 bg-white border border-gray-5 py-2 px-3 mr-2 rounded-2xl text-sm whitespace-nowrap flex items-center mb-3 cursor-pointer relative`}
  span {
    font-size: 1.2rem !important;
    ${tw`ml-3`}
  }
  .ant-btn {
    ${tw`absolute invisible opacity-0 right-1 text-primary`}
    transition: visibility 0s, opacity 0.5s linear;
    span {
      ${tw`ml-0`}
    }
  }
  &:hover {
    ${tw`shadow-dropdown text-primary border border-primary bg-blue-5`}
    span {
      ${tw`invisible opacity-0`}
    }
    .ant-btn,
    .ant-btn > span {
      ${tw`visible! opacity-100!`}
    }
  }
`;

export const BusinessProcessFormTag: FC<Props> = (props) => {
  return (
    <Tag>
      {props.title}
      <Check1 />
      <TableIconButton type="text" onClick={props.onRemoveClick} icon={<X />} />
    </Tag>
  );
};
