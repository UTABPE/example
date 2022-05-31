import React, { FC, MouseEventHandler, useCallback } from 'react';
import { Card, Typography } from 'antd';
import { Button } from '@components/atoms/Button';
import { Plus } from '@components/atoms/Icon';

export const NoContacts: FC<{ onAddContactClick: MouseEventHandler }> = ({
  onAddContactClick,
}) => {
  const handleAddContactClick = useCallback(onAddContactClick, []);
  return (
    <Card className="text-center pt-8">
      <Typography.Text type="secondary">
        Не добавлено ни одного контактного лица
      </Typography.Text>

      <Button
        type="dashed"
        icon={<Plus />}
        block
        className="mt-8"
        onClick={handleAddContactClick}
      >
        Добавить контактное лицо
      </Button>
    </Card>
  );
};
