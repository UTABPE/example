import {
  DragDots,
  InfoCircleOutline,
  StarOutline,
} from '@components/atoms/Icon';
import { Input } from '@components/atoms/Input';
import { MenuItemButton } from '@components/atoms/MenuItemButton';
import { TableIconButton } from '@components/atoms/TableIconButton';
import { BusinessProcessNewFormPartButton } from '../molecules/BPNewFormPartButton';
import {
  Tooltip,
  List as ListAntd,
  Typography,
  Form,
  Row,
  Select,
  Radio as RadioAntd,
  Divider,
} from 'antd';
import { useState } from 'react';
import tw from 'twin.macro';
import styled from '@emotion/styled';
import { RadioButton, RadioGroup } from '@components/molecules/Radio';
import { BusinessProcessFormSettingsAdditionalSettings } from './BPFormSettingsAdditionalSettings';
const { Text } = Typography;

type ListData = {
  readonly index: number;
  readonly title?: string;
  readonly options?: string;
}[];

const List = styled(ListAntd)`
  .ant-list-header {
    ${tw`bg-blue-7 px-5 py-4`}
  }
`;
const FormBase = styled(Form)`
  .ant-form-item {
    ${tw`mb-0`}
  }
`;
const Title = styled(Text)`
  ${tw`text-gray-9 font-medium`}
`;

const FormItemInputWrapper = styled(Row)`
  ${tw`bg-gray-0 hover:bg-blue-5 py-4 px-5 mt-3 mb-6`}
  .ant-form-item:hover {
    .ant-form-item-label > label {
      ${tw`text-darkBlue-15`}
    }
  }
  .ant-form-item-label > label {
    ${tw`font-medium text-xs text-gray-7`}
  }
`;

const Radio = styled(RadioAntd)`
  ${tw`mt-4`}
  span:last-child {
    ${tw`text-sm text-gray-9`}
  }
  .ant-radio-checked {
    .ant-radio-inner {
      ${tw`bg-primary border-primary`}
      &:after {
        ${tw`bg-white`}
      }
    }
  }
`;

export const BusinessProcessFormSettingsListConfigForm = () => {
  const [data, setData] = useState<ListData>([]);

  const emptyRow = {
    rowIndex: data.length + 1,
    title: undefined,
    options: undefined,
  };

  return (
    <FormBase>
      <Title>Основные настройки</Title>
      <List
        className="w-full mt-6"
        pagination={false}
        header={
          <Text className="text-darkBlue-15 text-sm font-medium">
            Формирование списка
          </Text>
        }
        dataSource={[emptyRow]}
        renderItem={(item: any) => (
          <ListAntd.Item className="flex items-center">
            <Text className="mx-5 text-gray-8 text-sm">{item.rowIndex}.</Text>{' '}
            <Input />
            <Tooltip
              placement="bottom"
              title="Копировать"
              color="#182E62"
              overlayStyle={tw`text-sm leading-[20px]`}
            >
              <TableIconButton
                className="hover:bg-transparent text-gray-7"
                icon={<StarOutline />}
              />
            </Tooltip>
            <MenuItemButton icon={<DragDots />} />
          </ListAntd.Item>
        )}
      />
      <BusinessProcessNewFormPartButton
        title="Добавить строку списка"
        onClick={() => {
          console.log('HI');
        }}
      />
      <Row
        align="middle"
        className="text-darkBlue-80 bg-blue-5 border border-darkBlue-80 p-3 flex flex-row text-sm mt-5 flex-nowrap"
      >
        <InfoCircleOutline />
        <Text className="text-darkBlue-80 ml-2">
          Список должен быть сформирован из перечня, включающего в себя 2 и
          более строки. Также из указанного перечня вы можете назначить значение
          по умолчанию.
        </Text>
      </Row>
      <Divider type="horizontal" />
      <Title>Тип выборки и настройка отображения</Title>
      <RadioAntd.Group className="flex flex-col my-6">
        <Radio value={2}>Один из множества</Radio>
        <Radio value={3}>Множественный выбор</Radio>
      </RadioAntd.Group>
      <Row align="middle" justify="space-between" className="w-full">
        <Title>Предварительный просмотр</Title>
        <RadioGroup>
          <RadioButton
            className="w-max font-medium text-xs rounded-none"
            buttonSize="xs"
          >
            По умолчанию
          </RadioButton>
          <RadioButton
            className="w-max font-medium text-xs rounded-none"
            buttonSize="xs"
          >
            С валидацией
          </RadioButton>
        </RadioGroup>
      </Row>
      <FormItemInputWrapper>
        <Text className="text-gray-7 text-xs mb-1.5 font-medium">
          Корректируещее мероприятие
        </Text>
        <Select className="w-full" />
      </FormItemInputWrapper>
      {/* <BusinessProcessFormSettingsAdditionalSettings /> */}
    </FormBase>
  );
};
