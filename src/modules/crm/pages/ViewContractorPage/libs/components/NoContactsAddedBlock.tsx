import React, { FC, MouseEventHandler, useCallback } from 'react';
import { css } from '@emotion/react';
import tw from 'twin.macro';
import noContactPerson from '@modules/crm/assets/noContactPerson.svg';
import { Card, Typography } from 'antd';
import { Button } from '@components/atoms/Button';
import { Plus } from '@components/atoms/Icon';

export const NoContactsAddedBlock: FC<{
  onAddContactClick: MouseEventHandler<HTMLButtonElement>;
}> = ({ onAddContactClick }) => {
  const handleAddContactClick = useCallback(onAddContactClick, [
    onAddContactClick,
  ]);
  return (
    <Card
      css={css`
        ${tw`text-center pt-8 bg-primary-0`}
        .ant-card-body {
          ${tw`pt-9 pb-0 px-0`}
        }
      `}
    >
      <img
        src={noContactPerson}
        alt="noContactPerson"
        className="mx-auto mb-3"
      />
      <Typography.Text type="secondary">
        Не добавлено ни одного контактного лица
      </Typography.Text>

      <Button
        icon={
          <>
            <span
              css={css`
                width: 100%;
                border-top: 1px dashed #80a1e9;
              `}
            />
            <Plus />
          </>
        }
        type="default"
        block
        className="mt-8 bg-blue bg-opacity-5 hover:bg-blue-15 border-none h-14 px-0"
        onClick={handleAddContactClick}
        // css={css`
        //   background-image: linear-gradient(
        //     to right,
        //     #80a1e9,
        //     #80a1e9 35%,
        //     #80a1e9 65%,
        //     #80a1e9
        //   );
        //   background-repeat: no-repeat;
        //   background-size: 100% 1px;
        //   background-position: 0 center;
        // `}
      >
        Добавить контактное лицо
        <span
          css={css`
            width: 100%;
            border-top: 1px dashed #80a1e9;
            ${tw`ml-2`}
          `}
        />
      </Button>
    </Card>
  );
};
