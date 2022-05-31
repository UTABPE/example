import tw from 'twin.macro';
import styled from '@emotion/styled';

import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { Content } from 'antd/lib/layout/layout';
import Search from 'antd/lib/input/Search';
import { Button, Image as antdImage, Layout as LayoutAntd } from 'antd';

import { News } from '../components/organisms/News';
import { Feed } from '../components/organisms/Feed';
import { Covid } from '../components/organisms/CovidInfo';
import { IdeaForm } from '../components/organisms/IdeaForm';
import { HSE } from '../components/organisms/HSE';

import {
  FilterIcon,
  HandOnMainPage,
  MoleculeOnMainPAge,
  Search as SearchIcon,
} from '@components/atoms/Icon';

const Layout = styled(LayoutAntd)`
  h1,
  h2,
  h3,
  h4,
  h5 {
    ${tw`font-lato text-darkBlue-15`}
  }
  .id-href {
    ${tw`absolute w-full top-[-112px]`}
    font-size: 10rem;
  }
  .img-left {
    ${tw`relative z-10 top-14 `}
    font-size: 12rem !important;
  }
  .img-right {
    ${tw`relative z-10 top-1 `}
    font-size: 14rem !important;
  }
`;
const SearchBar = styled(Search)`
  ${tw`h-12 `}
  .ant-input-wrapper {
    ${tw`flex flex-row-reverse justify-between`}
    .ant-input {
      ${tw`px-12`}
    }
    .ant-input-group-addon {
      ${tw`w-0`}
      button {
        ${tw`w-12 h-12 bg-transparent text-gray-6 pl-3 pr-2 py-3 border-0 z-10`}
        span {
          ${tw`h-6 w-6 flex m-0`}
        }
      }
    }
  }
`;
export const MainPage = () => {
  const fullscreenHandle = useFullScreenHandle();
  return (
    <>
      <FullScreen handle={fullscreenHandle}>
        <Layout className="relative w-[1440px] flex items-center bg-transparent">
          <div id="main" className="id-href" />
          <div className="w-[1440px] h-[323px] absolute top-[-75px] flex justify-between">
            <div className={`img-left`}>
              <HandOnMainPage />
            </div>
            <div className={`img-right`}>
              <MoleculeOnMainPAge />
            </div>
          </div>
          <Content className="w-[1140px] flex flex-col items-center justify-center">
            <div className="w-[798px] mt-[93px] mb-[100px] flex flex-row relative left-10">
              <SearchBar placeholder="Search" enterButton={<SearchIcon />} />
              <Button className="w-12 h-12 relative right-12 border-0 px-3 py-3 z-10 bg-transparent">
                <FilterIcon />
              </Button>
            </div>
            <News />
            <Feed />
            <Covid />
            <HSE />
            <IdeaForm />
          </Content>
        </Layout>
      </FullScreen>
    </>
  );
};
