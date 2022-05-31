import styled from '@emotion/styled';
import tw from 'twin.macro';

import {
  Footer as FooterAntd,
  Header as HeaderAntd,
} from 'antd/lib/layout/layout';

const Footer = styled(FooterAntd)`
  height: 87px;
  width: 1440px;
  padding: 20px 150px;
  background-color: rgba(29, 55, 115, 1);
  color: rgba(228, 235, 250, 1);
  line-height: 18.75px;
`;

// const TextArea = styled
export const AppFooter = () => {
  return (
    <>
      <Footer>ТОО «KAP Technology» © 2018-2021 </Footer>
    </>
  );
};
