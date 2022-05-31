import { Button, Popover, Tooltip } from 'antd';
import { Download } from '@components/atoms/Icon';
import { FC, useState } from 'react';

interface Props {
  onDownload: (downloadType: string) => void;
}

const UsersListDownloadButton: FC<Props> = ({ onDownload }) => {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  const hide = () => {
    setClicked(false);
    setHovered(false);
  };

  const handleHoverChange = (visible: boolean) => {
    setHovered(visible);
    setClicked(false);
  };

  const handleClickChange = (visible: boolean) => {
    setHovered(false);
    setClicked(visible);
  };

  const hoverContent = <div>Экспорт пользователей</div>;

  return (
    <Tooltip
      visible={hovered}
      placement="bottom"
      trigger="hover"
      color="#182E62"
      title={hoverContent}
      onVisibleChange={handleHoverChange}
    >
      <Popover
        trigger="click"
        placement="bottom"
        overlayClassName="user-popover"
        content={
          <div className="flex flex-col items-start">
            <Button
              type="text"
              size="small"
              onClick={() => {
                hide();
                onDownload('excel');
              }}
              className="w-full text-gray-8 text-sm px-3 hover:bg-blue-5 hover:text-darkBlue-15 focus:bg-blue-15 focus:text-darkBlue-15 text-left"
            >
              Скачать в формате EXCEL
            </Button>
            <Button
              type="text"
              size="small"
              onClick={() => {
                hide();
                onDownload('pdf');
              }}
              className="w-full text-gray-8  text-sm px-3 hover:bg-blue-5 hover:text-darkBlue-15 focus:bg-blue-15 focus:text-darkBlue-15 text-left"
            >
              Скачать в формате PDF
            </Button>
          </div>
        }
        visible={clicked}
        onVisibleChange={handleClickChange}
      >
        <Button
          icon={<Download />}
          type="text"
          size="small"
          className="text-gray-7 hover:bg-blue-15 hover:text-darkBlue-15 focus:bg-blue-35 focus:text-darkBlue-15 rounded-full"
        />
      </Popover>
    </Tooltip>
  );
};

export default UsersListDownloadButton;
