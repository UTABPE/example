import styled from '@emotion/styled';
import { Modal as ModalAntd } from 'antd';
import tw from 'twin.macro';

export const Modal = styled(ModalAntd)`
  .ant-modal-footer {
    ${tw`flex justify-center items-center`}
  }
`;
