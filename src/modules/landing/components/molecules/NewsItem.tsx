import tw from 'twin.macro';
import styled from '@emotion/styled';
import Title from 'antd/lib/typography/Title';
import { Button, List as antdList, Typography } from 'antd';
import * as antItem from 'antd/lib/list/Item';
import { Arrow_Button } from '../atoms/ArrowButton';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const monthNames = [
  'Января',
  'Февраля',
  'Марта',
  'Апреля',
  'Мая',
  'Июня',
  'Июля',
  'Августп',
  'Сентября',
  'Октября',
  'Ноября',
  'Декабря',
];
const data = [
  {
    id: 0,
    date: new Date(),
    title:
      'Главный директор по трансформации: \nВыполнение Плана коммуникации Департамента цифровой трансформации АО «НАК «Казатомпром»',
    author: 'Мурзалина Асель',
  },
  {
    id: 0,
    date: new Date(),
    title:
      'Hовости KAP: \nОнлайн-обучение на тему «Как пройти регистрацию для отслеживания вакансий АО «НАК «Казатомпром»',
    author: 'Система еКАР',
  },
  {
    id: 0,
    date: new Date(),
    title:
      'Главный директор по трансформации: Выполнение Плана коммуникации Департамента цифровой трансформации АО «НАК «Казатомпром»',
    author: 'Мурзалина Асель',
  },
  {
    id: 0,
    date: new Date(),
    title:
      'Hовости KAP: Онлайн-обучение на тему «Как пройти регистрацию для отслеживания вакансий АО «НАК «Казатомпром»',
    author: 'Система еКАР',
  },
];

const SystemNews = styled.div`
  ${tw`w-[781px] h-[656px] transition-all bg-white flex flex-col `}
  padding: 35px 32px 12px 20px;
  h1 {
    ${tw`mb-[20px] `}
  }
  h2 {
    /* margin-top: 22px; */
    ${tw`mb-4 `}
  }
  a {
    ${tw`text-sm mb-2 mt-1.5 leading-4`}
  }
  .ant-list-footer {
    ${tw`py-0`}
  }
  :hover {
    ${tw`bg-primary text-black`}
    h1,h2 {
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
const List = styled(antdList)`
  height: 100%;
`;
const Item = styled(antItem.default)`
  height: 99px;
`;

export const NewsItem = () => {
  const [hoverBtn, setHoverBtn] = useState(false);
  const handlerEnter = () => {
    setHoverBtn(true);
  };
  const handlerLeave = () => {
    setHoverBtn(false);
  };
  return (
    <SystemNews onMouseEnter={handlerEnter} onMouseLeave={handlerLeave}>
      <div>
        <Title>Новости</Title>
        <Title level={2}>Последние новости системы</Title>
      </div>
      <List
        itemLayout="horizontal"
        footer={<Arrow_Button hoverProps={hoverBtn}>Все новости</Arrow_Button>}
        dataSource={data}
        renderItem={(item: any) => (
          <Item className="border-b-2 border-gray-4">
            <Typography>
              <div
                className={`w-full flex flex-row justify-between mb-1.5 mt-2 text-gray-7`}
              >
                <span className={`text-xs`}>
                  {item.date.getDate()} {monthNames[item.date.getMonth()]}{' '}
                  {item.date.getFullYear()} г.,
                  {item.date.getHours()}:{item.date.getMinutes()}
                </span>
                <span className={`text-xs`}>
                  <span>Добавил(а): </span>
                  <span>Мурзалина Асель</span>
                </span>
              </div>
              <div>
                <Link
                  to={'#'}
                  className={`${
                    hoverBtn ? `text-blue-30` : `text-darkBlue-15`
                  }`}
                >
                  {item.title}
                </Link>
              </div>
            </Typography>
          </Item>
        )}
      />
    </SystemNews>
  );
};
