import styled from '@emotion/styled';
import { Divider, Tabs } from 'antd';
import Title from 'antd/lib/typography/Title';
import tw from 'twin.macro';
import { BlueSpan } from '../atoms/Span';
import { ReactComponent as Gra } from '../../../../assets/images/Graph.svg';

const LeftPart = styled.div`
  h2 {
    ${tw`h-[32px] text-center items-center`}
  }
`;
const RightPart = styled.div`
  .ant-tabs-nav {
    margin: 0px !important;
    .ant-tabs-tab {
      padding: 14px 0px !important;
    }
  }
`;

export const HSE = () => {
  return (
    <section className="my-10">
      <Title className="text-darkBlue-15">Счетчики HSE</Title>
      <div className="mt-14 flex flec-row gap-8">
        <LeftPart className="w-[359px] flex flex-col">
          <BlueSpan className="text-base mx-5 my-4 ">
            АО «НАК «Казатомпром»
          </BlueSpan>
          <div className="w-full p-5 pb-7 bg-gray-0">
            {/* <Title level={5} className="w-60 h-11 text-center"> */}
            <div className="flex flex-col items-center text-lg text-darkBlue-15">
              <div>По состоянию</div>
              <div>на 30 сентября 2021 г.</div>
            </div>
            {/* </Title> */}
            <Divider className="my-4" />
            <div className="flex flex-row gap-5 py-6">
              <div className="w-24 flex flex-col items-end gap-10">
                <Title level={2}>8807</Title>
                <Title level={2}>149</Title>
                <Title level={2}>93</Title>
              </div>
              <div className="w-full flex flex-col items-start gap-10 text-darkBlue-15 text-sm leading-4">
                <div>
                  <div>Количество дней</div>
                  <div>без аварий</div>
                </div>
                <div>
                  <div>Количество дней</div>
                  <div>без несчастных случаев</div>
                </div>
                <div>
                  <div>Количество дней</div>
                  <div>без ДТП</div>
                </div>
              </div>
            </div>
            <Divider className="my-4" />
          </div>
        </LeftPart>
        <RightPart>
          <Tabs defaultActiveKey="1" onChange={() => console.log(1)}>
            <Tabs.TabPane tab={`За истекшую`} key={1}></Tabs.TabPane>
            <Tabs.TabPane tab={`С начала текущего года`} key={2}></Tabs.TabPane>
          </Tabs>
          <div>
            <Gra />
          </div>
        </RightPart>
      </div>
    </section>
  );
};
