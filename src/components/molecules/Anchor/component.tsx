import styled from '@emotion/styled';
import type { AnchorProps } from './props';
import { Anchor as AnchorAntd, Col, Divider, Typography } from 'antd';
import tw from 'twin.macro';
import { FC } from 'react';
import { InfoCircleOutline } from '@components/atoms/Icon';

const { Link } = AnchorAntd;
const { Text } = Typography;

const AnchorBase = styled(AnchorAntd)`
  ${tw`mt-5 ml-2`}
  .ant-anchor-ink {
    :before {
      ${tw`bg-gray-4`}
    }
    .ant-anchor-ink-ball {
      ${tw`w-[2px] h-[40px] border-none rounded-none bg-primary`}
      transform: translateX(-50%);
      transition: top 0.1s ease-in-out;
    }
  }
  .ant-anchor-link {
    ${tw`pt-[10px] pl-6`}
    a {
      ${tw`text-base font-normal text-gray-8 `}
      :hover {
        ${tw`text-primary`}
      }
    }
  }
`;

const TitleWithIcon = styled(Text)`
  ${tw`text-lg text-gray-9 mt-12 flex items-center font-normal`}
  .anticon {
    margin-right: 10px;
    ${tw`text-gray-7`}
  }
`;

export const Anchor: FC<AnchorProps> = (props) => {
  return (
    <Col span={6}>
      <Text className="text-lg text-gray-9">Содержание задачи</Text>
      <AnchorBase showInkInFixed>
        <Link href="#Общие сведения" title="Общие сведения" />
        <Link
          href="#Определение опасности и корректирующего мероприятия"
          title="Определение опасности"
        />
        <Link href="#История изменений" title="История изменений"></Link>
      </AnchorBase>
      <TitleWithIcon>
        <InfoCircleOutline />
        Информация по задаче
      </TitleWithIcon>
      <Divider className="my-4" />
    </Col>
  );
};
