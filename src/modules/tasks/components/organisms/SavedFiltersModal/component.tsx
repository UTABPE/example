import { AllRequests } from '@components/atoms/Icon';
import { MenuItemButton } from '@components/atoms/MenuItemButton';
import { Popover } from 'antd';
import { FC, useState } from 'react';
import { SavedFiltersForm } from '../SavedFiltersForm';

//TODO fix popover height

export const SavedFiltersModal: FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Popover
      content={<SavedFiltersForm />}
      trigger="click"
      visible={visible}
      placement="bottomRight"
      onVisibleChange={() => setVisible(!visible)}
    >
      <MenuItemButton backgroundOn icon={<AllRequests />} />
    </Popover>
  );
};
