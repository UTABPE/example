import { Button } from '@components/atoms/Button';
import { Plus } from '@components/atoms/Icon';
import { Divider } from 'antd';
import { FC } from 'react';

export const BusinessProcessNewFormPartButton: FC<{
  onClick: () => void;
  title: string;
}> = ({ onClick, title }) => {
  return (
    <div className="bg-blue-7 py-1 hover:bg-blue-15 w-full">
      <Divider
        dashed
        className="text-primary before:border-t-2 after:border-t-2 border-blue-60"
      >
        <Button
          icon={<Plus />}
          type="text"
          buttonSize="xs"
          className="text-primary"
          onClick={onClick}
        >
          {title}
        </Button>
      </Divider>
    </div>
  );
};
