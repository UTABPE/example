import tw from 'twin.macro';
import styled from '@emotion/styled';
import Title from 'antd/lib/typography/Title';
import img1 from '@assets/images/img1.png';
import img2 from '@assets/images/img2.png';
import { Arrow_Button } from '../atoms/ArrowButton';
import { GraySpan } from '../atoms/Span';
import { useState } from 'react';

const Main = styled.div`
  ${tw`w-[359px] h-[656px] transition-all`}
  .img-container {
    ${tw`w-[359px] h-[385px] overflow-hidden`}
    img {
      ${tw`w-[359px]`}
      ${tw`absolute`}
      ${tw`transition-all`}
    }
  }
  .content {
    ${tw`w-[359px] h-[271px] pl-5 -mt-2 flex flex-col items-start border-l-2 border-gray-4`}
    h2 {
      ${tw`h-8 my-4 text-darkBlue-15`}
    }
    h4 {
      ${tw`text-xlLow text-darkBlue-15`}
    }
  }
  :hover {
    .bot {
      opacity: 0;
    }
    ${tw`bg-primary`}
    h2 {
      ${tw`text-blue-30`}
    }
    h4 {
      ${tw`text-blue-30`}
    }
    button {
      span {
        ${tw`text-blue-15`}
      }
    }
    span {
      ${tw`text-blue-60`}
    }
  }
`;
export const NewsMain = () => {
  const [hoverSection, setHoverSection] = useState(false);
  const handlerEnter = () => {
    setHoverSection(true);
  };
  const handlerLeave = () => {
    setHoverSection(false);
  };

  return (
    <Main onMouseEnter={handlerEnter} onMouseLeave={handlerLeave}>
      <div className="img-container">
        <img src={img1} alt="test" />
        <img src={img2} alt="test" className="bot" />
      </div>
      <div className="content">
        <Title level={2}>Новости Казатомпрома</Title>
        <div className="mb-4">
          <GraySpan>29 ноября 2021 г., 12:02</GraySpan>
          <Title level={4}>
            Казатампром объявил о производственных планах на 2023 год
          </Title>
        </div>
        <Arrow_Button hoverProps={hoverSection}>Все выпуски</Arrow_Button>
      </div>
    </Main>
  );
};
