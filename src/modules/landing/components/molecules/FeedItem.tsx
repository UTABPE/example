import tw from 'twin.macro';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { GraySpan, BlueSpan as BSpan } from '../atoms/Span';
import { Content } from 'antd/lib/layout/layout';

import { Avatar } from '@components/atoms/Avatar';
import { DotsHorizontal } from '../../../../components/atoms/Icon/DotsHorizontal';
import { ArrowForwardUp, Comment, Eye, Like } from '@components/atoms/Icon';
import { Button } from 'antd';

const Section = styled.section`
  ${tw`px-5 mb-6`}
  .item {
    ${tw`w-full h-full flex flex-row items-start border-b-2  border-t-2 border-gray-4`}
    .left-part {
      ${tw`w-[274px] flex flex-col items-start`}
      .info-list {
        ${tw`w-60 border-b-2 border-gray-4 pb-3 mt-5 `}
        .info-list-item {
          ${tw`flex flex-col gap-y-2 mb-3`}
        }
      }
    }
    .right-part {
      ${tw`w-[826px] min-h-[298px] text-sm text-darkBlue-15 border-l-2 border-gray-4 bg-white`}
      .content-header {
        ${tw` flex flex-row justify-between m-5`}
        .user-info {
          ${tw`flex flex-col items-start ml-3`}
        }
      }
      .content {
        ${tw`m-5 p-5 bg-blue-5 border-t-2 border-b-2 border-gray-4`}
      }
      .button-line {
        ${tw`px-2.5 py-3 m-5 flex flex-row items-center`}
        button {
          ${tw`mr-5 pl-5 pr-6 flex items-center border-0`}
          span {
            ${tw`ml-3 font-medium`}
          }
          :hover {
            ${tw`bg-blue-15`}
          }
          :active {
            ${tw`bg-blue-35`}
          }
        }
      }
    }
  }
`;
const BlueSpan = styled(BSpan)`
  ${tw`leading-4`}
`;

const data = {
  feeds: [
    {
      id: 1,
      date: new Date(),
      person: {
        name: 'Адильбекова Асель Сериковна',
        position: 'менеджер',
        block: 'Административно-управленческий персонал',
        department: 'Департамент управления человеческими ресурсами',
      },
      content: {
        view: 24,
        commentAmount: 7,
        message:
          'Доброе утро! Коллеги, напоминаем, что работникам, указанным во вложении (список для ВШК 24.11.2021г. для рассылки) – предоставлен доступ к Виртуальной школе Казатомпрома (ВШК). Просим активно пользоваться предоставленным материалом в ВШК (курсы, библиотека МИФ), для закрытия своих индивидуальных планов развития (ИПР), которые необходимо исполнить до 31.12.2021г.',
        imgUrl: '',
      },
    },
    {
      id: 2,
      date: new Date(),
      person: {
        name: 'Алтаев Жандос Амантаевич',
        avatarUrl: '',
        position: 'менеджер',
        block: 'Административно-управленческий персонал',
        department: 'Департамент управления человеческими ресурсами',
      },
      content: {
        view: 1000,
        commentAmount: 7000,
        message:
          'Для получения актуальной и последней информации касательно всех мероприятий, новостей и событий в нашей организации, приглашаю всех желающих вступить в наш Telegram-канал!',
        imgUrl: '',
      },
    },
    {
      id: 3,
      date: new Date(),
      person: {
        name: 'Попов Поп Попович',
        avatarUrl: '',
        position: 'менеджер',
        block: 'Административно-управленческий персонал',
        department: 'Департамент управления человеческими ресурсами',
      },
      content: {
        view: 500,
        commentAmount: 200,
        message:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda dicta deleniti vel, esse ipsum eveniet, voluptatibus aspernatur, illo in repudiandae eos quaerat tempore asperiores eaque corporis beatae impedit cum ut. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda dicta deleniti vel, esse ipsum eveniet, voluptatibus aspernatur, illo in repudiandae eos quaerat tempore asperiores eaque corporis beatae impedit cum ut. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda dicta deleniti vel, esse ipsum eveniet, voluptatibus aspernatur, illo in repudiandae eos quaerat tempore asperiores eaque corporis beatae impedit cum ut. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda dicta deleniti vel, esse ipsum eveniet, voluptatibus aspernatur, illo in repudiandae eos quaerat tempore asperiores eaque corporis beatae impedit cum ut. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda dicta deleniti vel, esse ipsum eveniet, voluptatibus aspernatur, illo in repudiandae eos quaerat tempore asperiores eaque corporis beatae impedit cum ut. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda dicta deleniti vel, esse ipsum eveniet, voluptatibus aspernatur, illo in repudiandae eos quaerat tempore asperiores eaque corporis beatae impedit cum ut. ',
        imgUrl: '',
      },
    },
  ],
};

export const FeedItem = () => {
  return (
    <Section>
      {data.feeds.map((item) => {
        return (
          <div className="item ">
            <div className="left-part">
              <div className={`info-list`}>
                <div className="info-list-item">
                  <GraySpan>Должность:</GraySpan>
                  <BlueSpan>{item.person.position}</BlueSpan>
                </div>
                <div className="info-list-item">
                  <GraySpan>Блок:</GraySpan>
                  <BlueSpan>{item.person.block}</BlueSpan>
                </div>
                <div className="info-list-item">
                  <GraySpan>Департамент/отдел:</GraySpan>
                  <BlueSpan>{item.person.department}</BlueSpan>
                </div>
              </div>
              <span className="flex flex-row mt-6 ">
                <GraySpan className="mr-6 text-base flex flex-row items-center">
                  <Eye />
                  <span className="ml-2.5">{item.content.view}</span>
                </GraySpan>
                <GraySpan className="text-base flex flex-row items-center">
                  <Comment />
                  <span className="ml-2">{item.content.commentAmount}</span>
                </GraySpan>
              </span>
            </div>
            <div className="right-part">
              <Content className="content-header">
                <div className="flex flex-row items-center">
                  <Avatar src={item.person.avatarUrl} />
                  <div className="user-info">
                    <Link to={`#`}>
                      <BlueSpan className={`text-sm leading-4 font-medium`}>
                        {item.person.name}
                      </BlueSpan>
                    </Link>
                    <GraySpan className={`text-xs`}>
                      Date: {item.date.getDate() + 1} {item.date.getMonth}{' '}
                      {item.date.getFullYear}, {item.date.getHours}{' '}
                      {item.date.getMinutes}
                    </GraySpan>
                  </div>
                </div>
                {/* Нет цели использования */}
                <button className={`text-gray-7 pr-3`}>
                  <DotsHorizontal />
                </button>
              </Content>
              <Content className="content">
                {item.content.message}
                {item.content.imgUrl && (
                  <img src={item.content.imgUrl} alt="img" />
                )}
              </Content>
              <div className="button-line">
                <Button>
                  <Like />
                  <span>Нравится</span>
                </Button>
                <Button>
                  <Comment />
                  <span>Комментировать</span>
                </Button>
                <Button>
                  <ArrowForwardUp />
                  <span>Поделиться</span>
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </Section>
  );
};
