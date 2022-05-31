import tw from 'twin.macro';
import styled from '@emotion/styled';
import { NewsItem } from '../molecules/NewsItem';
import { NewsMain } from '../molecules/NewsMain';

const Section = styled.section`
  width: 1140px;
  ${tw`relative flex flex-row items-center justify-center border-t-2 border-gray-4`}
  .id-href {
    ${tw`absolute w-full top-[-112px]`}
  }
`;

export const News = () => {
  return (
    <Section>
      <div id="news" className="id-href" />
      <NewsItem />
      <NewsMain />
    </Section>
  );
};
