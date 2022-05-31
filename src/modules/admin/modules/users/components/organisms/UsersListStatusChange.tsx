import { Checkbox, Tooltip as AntTooltip } from 'antd';
import { FC, useState } from 'react';
import { Button } from '@components/atoms/Button';
import styled from '@emotion/styled';
import tw from 'twin.macro';

interface Props {
  onStatusChange: () => void;
  block: boolean;
  indeterminate: boolean;
}

const Tooltip = styled(AntTooltip)`
  .ant-tooltip-inner {
    ${tw`p-3`}
  }
`;

const UsersListStatusChange: FC<Props> = ({
  indeterminate,
  block,
  onStatusChange,
}) => {
  const [clicked, setClicked] = useState(false);

  const hide = () => {
    setClicked(false);
  };

  const handleClickChange = (visible: boolean) => {
    setClicked(visible);
  };

  return (
    <Tooltip
      trigger="click"
      placement="topLeft"
      overlayClassName="user-tooltip"
      className="user-tooltip"
      openClassName="user-tooltip"
      color="white"
      title={
        <Button
          type="primary"
          onClick={() => {
            onStatusChange();
            hide();
          }}
        >
          {block ? 'Заблокировать' : 'Разблокировать'}
        </Button>
      }
      visible={clicked}
      onVisibleChange={handleClickChange}
    >
      <Checkbox disabled={!indeterminate} indeterminate={indeterminate} />
    </Tooltip>
  );
};

export default UsersListStatusChange;
