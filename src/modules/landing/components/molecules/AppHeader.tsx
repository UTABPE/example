import { Button } from '@components/atoms/Button';
import styled from '@emotion/styled';
import { Space, Tabs } from 'antd';
import { Header as HeaderAntd } from 'antd/lib/layout/layout';
import { Bell, Help, Logout, Menu, Messages } from '@components/atoms/Icon';
import tw from 'twin.macro';
import { LanguageSelector } from '@components/molecules/LanguageSelector';
import { Avatar } from '@components/atoms/Avatar';
import { Badge } from '@components/atoms/Badge';
import { FC, useCallback } from 'react';
import { Logo } from '@components/atoms/Logo';
import { useKeycloak } from '@react-keycloak/web';

const langs = [
  {
    title: 'Ru',
    code: 'en',
  },
  {
    title: 'En',
    code: 'ru',
  },
  {
    title: 'Kz',
    code: 'kz',
  },
];

const Header = styled(HeaderAntd)`
  ${tw`w-[1140px] bg-white px-6 flex flex-row items-center justify-between border-b border-gray-4`}
  button {
    padding: 0 10px;
    ${tw`text-gray-7`}
  }
`;
const MenuContainer = styled(HeaderAntd)`
  ${tw`w-[1140px] h-12 bg-white px-0 flex flex-row items-start `}
  .ant-tabs-tab {
    ${tw`h-12 p-0 `}
    .ant-tabs-tab-btn {
      ${tw`w-full h-full flex items-center`}
      a {
        color: inherit;
        ${tw`py-[11px] px-5`}
      }
    }
  }
`;

export const AppHeader = () => {
  // const kc = useKeycloak();

  const profile: any = null; // kc.keycloak.profile;

  const initials = profile
    ? `${profile.firstName?.charAt(0)} ${profile.lastName?.charAt(0)}`
    : 'IP';

  const handleLangSwitch = useCallback((l: string) => {
    console.log(`language changed to ${l}`);
  }, []);

  return (
    <div className="fixed z-50 ">
      <Header>
        <Space size={16}>
          <Logo />
        </Space>
        <Space>
          <Button icon={<Bell />} shape="round" type="link">
            <Badge count={3} />
          </Button>
          <Button type="link" icon={<Messages />} shape="round">
            <Badge count={3} />
          </Button>
          <Button shape="circle" type="link">
            <Help />
          </Button>
          <Button
            type="link"
            shape="circle"
            // onClick={() => kc.keycloak.logout()}
          >
            <Logout />
          </Button>
          <LanguageSelector
            currentLangCode="ru"
            langs={langs}
            onLangSwitch={handleLangSwitch}
          />
          <Avatar css={tw`text-white bg-primary`}>{initials}</Avatar>
        </Space>
      </Header>
      <MenuContainer>
        <Tabs
          defaultActiveKey="1"
          onChange={() => console.log(1)}
          className={`z-20`}
        >
          <Tabs.TabPane
            tab={<a href="#main">Главная</a>}
            key={1}
          ></Tabs.TabPane>
          <Tabs.TabPane
            tab={<a href="#feed">Живая лента</a>}
            key={2}
          ></Tabs.TabPane>
          <Tabs.TabPane
            tab={<a href="#news">Новости</a>}
            key={3}
          ></Tabs.TabPane>
          <Tabs.TabPane tab={<a>Сотрудники</a>} key={4}></Tabs.TabPane>
          <Tabs.TabPane tab={<a>Мероприятия</a>} key={5}></Tabs.TabPane>
        </Tabs>
      </MenuContainer>
    </div>
  );
};
