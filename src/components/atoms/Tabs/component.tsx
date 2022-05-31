import styled from '@emotion/styled';
import { Tabs as TabsAntd } from 'antd';
import tw from 'twin.macro';

export const Tabs = styled(TabsAntd)`
  .ant-tabs-nav {
    ${tw`border-b border-gray-4 mb-0`}
  }
  .ant-tabs-tab {
    ${tw`text-gray-8 px-6 py-3`}
  }
  .ant-tabs-tab-active {
    ${tw`font-normal`}
  }

  a {
    color: inherit;
  }
`;
