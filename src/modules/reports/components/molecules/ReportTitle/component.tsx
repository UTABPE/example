import {
  ArrowMaximize,
  ArrowMinimize1,
  Download,
  InfoCircleOutline,
  Upload,
  X,
} from '@components/atoms/Icon';
import { MenuItemButton } from '@components/atoms/MenuItemButton';
import { RadioGroup, RadioButton } from '@components/molecules/Radio';
import { DatePicker, Space } from 'antd';
import Title from 'antd/lib/typography/Title';
import { ReportTitleProps } from './props';

export const ReportTitle: React.FC<ReportTitleProps> = ({
  title,
  onFullscreenToggle: handleFullscreenToggle,
}) => {
  return (
    <div className="flex justify-between items-center">
      <Title level={5} className="text-darkBlue-15 my-0 font-medium">
        {title}
      </Title>

      <Space direction="horizontal">
        <DatePicker picker="month" className="w-60 h-10" format="MMMM YYYY" />

        <RadioGroup
          defaultValue="minimize"
          onChange={({ target: { value } }) => {
            if (value === 'minimize' || value === 'fullscreen') {
              handleFullscreenToggle(value);
            }
          }}
        >
          <RadioButton value={'minimize'}>
            <ArrowMinimize1 />
          </RadioButton>
          <RadioButton value={'fullscreen'}>
            <ArrowMaximize />
          </RadioButton>
        </RadioGroup>

        <MenuItemButton icon={<Upload />} />
        <MenuItemButton icon={<Download />} />
        <MenuItemButton backgroundOn icon={<InfoCircleOutline />} />
        <MenuItemButton icon={<X />} />
      </Space>
    </div>
  );
};
