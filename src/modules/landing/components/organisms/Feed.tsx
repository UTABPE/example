import tw from 'twin.macro';
import styled from '@emotion/styled';

import Title from 'antd/lib/typography/Title';
import { Button } from 'antd';

import { FeedItem } from '../molecules/FeedItem';
import { Arrow_Button } from '../atoms/ArrowButton';

const Section = styled.section`
  ${tw`relative w-full flex flex-col items-center justify-center border-t-2 border-gray-4 bg-gray-0 pt-10 pb-6 `}
  .id-href {
    ${tw`absolute w-full top-[-112px]`}
  }
`;
const Header = styled.div`
  ${tw`h-16 w-full mb-8 flex flex-row items-center justify-between`}
  button {
    width: 201px;
  }
`;

export const Feed = () => {
  return (
    <Section>
      <div id="feed" className="id-href" />
      <Header>
        <Title className={`ml-5 font-bold `}>Живая лента</Title>
        <Arrow_Button>Все события</Arrow_Button>
      </Header>
      <FeedItem />
    </Section>
  );
};
