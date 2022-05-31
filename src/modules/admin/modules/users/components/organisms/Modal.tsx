import { EKAPLogo } from '@components/atoms/Icon/EKAPLogo';
import { Modal as AntModal } from 'antd';
import { FC, ReactChild } from 'react';

interface Props {
  visible: boolean;
  onOk: () => void;
  onCancel: () => void;
  children: ReactChild | ReactChild[];
}

const ModalTitle = () => {
  return (
    <div className="flex items-center gap-2">
      <EKAPLogo />
      <p className="text-darkBlue-5 font-semiBold mb-0">EKAP</p>
    </div>
  );
};

const Modal: FC<Props> = ({ visible, onCancel, onOk, children }) => {
  return (
    <AntModal
      visible={visible}
      title={<ModalTitle />}
      okText="Да"
      cancelText="Нет"
      onOk={onOk}
      onCancel={onCancel}
      okButtonProps={{ type: 'default' }}
      cancelButtonProps={{ type: 'default' }}
    >
      <div className="text-center">{children}</div>
    </AntModal>
  );
};

export default Modal;
