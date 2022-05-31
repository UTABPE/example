import { Space } from 'antd';

import { Button } from '@components/atoms/Button';
import { StarOutline } from '@components/atoms/Icon';
import { TableSettingSelect } from '@components/molecules/TableSettingsSelect';

export const DesignSystemPage = () => {
  return (
    <>
      <Space direction="vertical">
        <Space direction="horizontal">
          <Button buttonSize="xl">Large</Button>
          <Button buttonSize="lg" icon={<StarOutline />}>
            Middle
          </Button>
          <Button buttonSize="sm">Small</Button>
          <Button shape="circle" buttonSize="xl" icon={<StarOutline />} />
          <Button shape="circle" buttonSize="md" icon={<StarOutline />} />
          <Button
            shape="circle"
            buttonSize="sm"
            disabled
            icon={<StarOutline />}
          />
          <Button shape="round">Round</Button>
          <Button disabled>Disabled</Button>
        </Space>
        <Space direction="horizontal">
          <Button className="ant-btn-secondary" type="default">
            Secondary
          </Button>
          <Button className="ant-btn-secondary" type="default" disabled>
            Secondary
          </Button>
          <Button type="default" icon={<StarOutline />} shape="circle" />
          <Button type="link">Borderless</Button>
        </Space>
        {/* <TableSettingSelect /> */}
      </Space>
    </>
  );
};
