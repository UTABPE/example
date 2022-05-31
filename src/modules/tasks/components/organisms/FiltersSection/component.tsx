import { Button } from '@components/atoms/Button';
import {
  AdjustmentsHorizontal,
  HideTabletitle,
  ShowTabletitle,
} from '@components/atoms/Icon';
import { RadioButton, RadioGroup } from '@components/molecules/Radio';
import { TableSettingSelect } from '@components/molecules/TableSettingsSelect';
import styled from '@emotion/styled';
import { Space, Typography } from 'antd';
import { FC } from 'react';
import tw from 'twin.macro';
import { SavedFiltersModal } from '../SavedFiltersModal';
const { Text } = Typography;

const AdvancedFilterButton = styled(Button)`
  ${tw`text-gray-6 border-gray-5`}
`;

const FiltersWrapper = styled(Space)`
  ${tw`py-4 flex justify-between w-full`}
`;

export const FiltersSection: FC = () => {
  return (
    <FiltersWrapper size={16}>
      <Space>
        <AdvancedFilterButton type="default">
          Расширенная фильтрация <AdjustmentsHorizontal />
        </AdvancedFilterButton>
        {/* <TableSettingSelect /> */}
        <RadioGroup>
          <RadioButton value={'minimize'}>
            <ShowTabletitle />
          </RadioButton>
          <RadioButton value={'fullscreen'}>
            <HideTabletitle />
          </RadioButton>
        </RadioGroup>
        <Button buttonSize="md" disabled>
          Очистить все
        </Button>
      </Space>
      <Space>
        <Text type="secondary">Отображение: По умолчанию</Text>
        <SavedFiltersModal />
      </Space>
    </FiltersWrapper>
  );
};
