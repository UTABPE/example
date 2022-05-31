import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Link } from 'react-router-dom';
import { BlueSpan } from '../atoms/Span';
import Title from 'antd/lib/typography/Title';
import { Button, Divider } from 'antd';
import { useState } from 'react';

import covid_1 from '@assets/images/Covid_1.png';
// import covid_1_grey from '@assets/images/Covid_1_grey.png';
// import covid_2_grey from '@assets/images/Covid_2_grey.png';
import covid_bg from '@assets/images/Covid_bg.png';
// import covid_bg_grey from '@assets/images/Covid_bg_grey.png';
import { HealthCenter, SecurityFund } from '@components/atoms/Icon';
import { Arrow_Button } from '@modules/landing/components/atoms/ArrowButton';

const Section = styled.section`
  ${tw`w-full h-[547px] flex flex-row items-start bg-clip-border`}

  .left-part {
    ${tw`w-[554px] h-[502px]`}
    span {
      ${tw`h-[42px] text-xs leading-[14px]`}
    }
    .covid-container {
      ${tw`w-full h-[507px] overflow-hidden z-0`}
      background-image: url(${covid_bg});
      filter: sepia(100%) hue-rotate(190deg) saturate(200%);
      .covid_1 {
        ${tw`w-[97%] h-[104%] relative left-[-120px] z-10 transition-all`}
        top: 0px;
      }
      .covid_2 {
        ${tw`w-[42%] h-[45%] relative top-[-610px] z-10 transition-all`}
        left:400px;
      }
    }
    .logo-container {
      ${tw`w-full h-[148px] flex flex-row items-start gap-8  relative bottom-[148px] z-30`}
      a {
        ${tw`h-12 flex flex-row items-center gap-2`}
      }
      svg {
        font-size: 2em !important;
      }
      padding: 48px 20px 52px;
      background-color: rgba(255, 255, 255, 0.8);
    }
  }

  .right-part {
    width: 586px;
    height: 507px;
    padding: 40px 20px 48px 32px;
    ${tw`bg-white pt-10 pr-5 pb-12 pl-8 flex flex-col items-start gap-5 transition-all`}
    h1 {
      ${tw`h-16  flex items-center`}
      line-height: 57px;
    }
    h2 {
      ${tw`h-16 flex items-center`}
      line-height: 31px;
    }
    h3 {
      ${tw`flex items-center`}
      line-height: 28px;
    }
    button {
      ${tw`h-20 text-left px-0 border-0 flex flex-row items-center`}
    }
    div {
      span {
        ${tw`text-base font-normal`}
        line-height: 19px;
      }
    }
    main {
      height: 300px;
      ${tw`flex flex-col items-start`}
    }
    :hover {
    }
  }
  :hover {
    .left-part {
      .covid-container {
        filter: none;
        .covid_1 {
          top: 50px;
        }
        .covid_2 {
          left: 350px;
          filter: blur(2px);
        }
      }
    }
    .right-part {
      ${tw`bg-primary`}
      h1, h2, h3 {
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
  }
`;
//LeftPart

export const Covid = () => {
  const [hoverSection, setHoverSection] = useState<boolean>(false);
  const handlerEnter = () => {
    setHoverSection(true);
  };
  const handlerLeave = () => {
    setHoverSection(false);
  };
  return (
    <Section onMouseEnter={handlerEnter} onMouseLeave={handlerLeave}>
      <div className="left-part">
        <div className="covid-container ">
          <img src={`${covid_1}`} className="covid_1" alt={''} />
          <img src={`${covid_1}`} className="covid_2 " alt={''} />
        </div>
        <div className="logo-container">
          <Link to={`#`}>
            <HealthCenter />
            <BlueSpan className="w-52 ">
              Национальный центр общественного здравоохранения Министерства
              здравоохранения РК
            </BlueSpan>
          </Link>
          <Link to={`#`}>
            <SecurityFund />
            <BlueSpan className="w-24">Фонд медицинского страхования</BlueSpan>
          </Link>
        </div>
      </div>
      <div className="right-part">
        <main>
          <Title>Covid-19</Title>
          <Title level={2} className={`mb-2.5`}>
            Сводная информация по Covid-19
          </Title>
          <Arrow_Button hoverProps={hoverSection}>в Казахстане</Arrow_Button>
          <Arrow_Button hoverProps={hoverSection}>
            в разрезе АО «НАК «Казатомпром»
          </Arrow_Button>
        </main>
        <Divider className={`m-0`} />
        <div>
          <BlueSpan>
            Круглосуточно открыта горячая линия по вопросам нового короновируса.
          </BlueSpan>
          <Title level={3} className={`font-medium`}>
            Call center: 1406; + 7 7172 768 043
          </Title>
        </div>
      </div>
    </Section>
  );
};
