import { Space, Typography } from 'antd';
import { Avatar } from '@components/atoms/Avatar';
import { FC } from 'react';
import tw from 'twin.macro';
import { SideBarProfileProps } from './props';

export const SideBarProfile: FC<SideBarProfileProps> = ({
  isSideBarCollapsed,
  name,
  initials,
}) => {
  const { Text } = Typography;

  return (
    <Space direction="vertical" css={tw`flex items-center`}>
      <Avatar css={tw`border-4 border-solid border-blue-15`} size="large">
        {initials}
      </Avatar>
      {!isSideBarCollapsed && <Text css={tw`text-primary`}> {name}</Text>}
    </Space>
  );
};
