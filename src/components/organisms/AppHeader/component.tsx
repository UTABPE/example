import { Button } from '@components/atoms/Button';
import styled from '@emotion/styled';
import { Space } from 'antd';
import { Header as HeaderAntd } from 'antd/lib/layout/layout';
import { Bell, Help, Logout, Menu, Messages } from '@components/atoms/Icon';
import tw from 'twin.macro';
import { LanguageSelector } from '@components/molecules/LanguageSelector';
import { Avatar } from '@components/atoms/Avatar';
import { Badge } from '@components/atoms/Badge';
import { FC, useCallback } from 'react';
import { AppHeaderProps } from './props';
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
  ${tw`bg-white px-6 flex flex-row items-center justify-between border-b border-gray-4`}
  button {
    ${tw`text-gray-7`}
  }
`;

export const AppHeader: FC<AppHeaderProps> = ({
  isSideBarCollapsed,
  setIsSideBarCollapsed,
}) => {
  // const kc = useKeycloak();

  const profile: any = null; // kc.keycloak.profile;

  const initials = profile
    ? `${profile.firstName?.charAt(0)} ${profile.lastName?.charAt(0)}`
    : 'IP';

  const handleLangSwitch = useCallback((l: string) => {
    console.log(`language changed to ${l}`);
  }, []);

  return (
    <Header>
      <Space size={16}>
        <Button
          css={isSideBarCollapsed && tw`bg-blue-10 text-darkBlue-15`}
          shape="circle"
          type="link"
          icon={<Menu />}
          onClick={() => setIsSideBarCollapsed(!isSideBarCollapsed)}
        />
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
  );
};
