import { Button } from '@components/atoms/Button';
import {
  AdjustmentsHorizontal,
  HideTabletitle,
  Plus,
  ShowTabletitle,
} from '@components/atoms/Icon';
import { TableIconButton } from '@components/atoms/TableIconButton';
import { RadioButton, RadioGroup } from '@components/molecules/Radio';
import { TableSettingSelect } from '@components/molecules/TableSettingsSelect';
import styled from '@emotion/styled';
import { Space } from 'antd';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import tw from 'twin.macro';
import UsersListDownloadButton from './UsersListDownloadButton';

const AdvancedFilterButton = styled(Button)`
  ${tw`text-gray-6 border-gray-5 font-normal`}
`;

const FiltersWrapper = styled(Space)`
  ${tw`py-4 flex justify-between w-full`}
`;

type SettingType = {
  value: string;
  label: string;
  checked: boolean;
};

type UsersListFiltersProps = {
  setSettingsList: (settingsList: SettingType[]) => void;
  settingsList: SettingType[];
  onDownload: (downloadType: string) => void;
};

export const UsersListFilters: FC<UsersListFiltersProps> = ({
  setSettingsList,
  settingsList,
  onDownload,
}) => {
  return (
    <FiltersWrapper size={16}>
      <Space>
        <AdvancedFilterButton type="default">
          Расширенная фильтрация <AdjustmentsHorizontal />
        </AdvancedFilterButton>
        <TableSettingSelect
          settingsList={settingsList}
          setSettingsList={setSettingsList}
        />
        <RadioGroup>
          <RadioButton value={'minimize'}>
            <ShowTabletitle />
          </RadioButton>
          <RadioButton value={'fullscreen'}>
            <HideTabletitle />
          </RadioButton>
        </RadioGroup>
        <Button buttonSize="md" disabled className="font-normal">
          Очистить все
        </Button>
      </Space>
      <Space>
        <UsersListDownloadButton onDownload={onDownload} />
        <Link to="/admin/users/create-user">
          <Button icon={<Plus />} className="font-normal">
            Создать пользователя
          </Button>
        </Link>
      </Space>
    </FiltersWrapper>
  );
};
