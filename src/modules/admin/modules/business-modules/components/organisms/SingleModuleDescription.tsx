import styled from '@emotion/styled';
import {
  Col,
  Descriptions as DescriptionsAntd,
  Divider,
  Tag,
  Typography,
} from 'antd';
import { FC } from 'react';
import tw from 'twin.macro';
import { ModuleWithSections } from '../../types/Module';

const { Title, Text } = Typography;

const DescriptionWrapper = styled(Col)<{ visible: boolean }>`
  ${tw`h-[full] border-l border-t border-gray-4 bg-white pl-4 pt-6 w-[323px]`}
  transition: all 0.5s linear;
  ${({ visible }) => (visible ? '' : tw`hidden`)}}
`;

const Descriptions = styled(DescriptionsAntd)`
  ${tw`flex flex-col`}
  .ant-descriptions-header {
    ${tw`border-b border-gray-4 pb-3`}
    .ant-descriptions-title {
      ${tw`text-base font-normal text-gray-8`}
    }
  }
  .ant-descriptions-item:not(:last-child) {
    ${tw`border-b border-gray-3`}
  }
  .ant-descriptions-row {
    ${tw`flex flex-col`}
    .ant-descriptions-item {
      ${tw`w-full  pb-2 mt-2`}
      .ant-descriptions-item-container {
        ${tw`flex flex-col`}
        .ant-descriptions-item-label {
          ${tw`text-xs text-gray-7`}
        }
        .ant-descriptions-item-content {
          ${tw`text-gray-9 text-sm mt-1.5`}
        }
      }
    }
    .ant-tag {
      ${tw`bg-success-10 text-success-80 rounded-[12px] text-base font-medium border-none leading-5	`}
    }
  }
`;

export const SingleModuleDescription: FC<{
  visible: boolean;
  module?: ModuleWithSections;
}> = ({ visible, module }) => {
  return (
    <DescriptionWrapper visible={visible}>
      <Title className="font-normal text-lg text-gray-8 text-center mb-8">
        Модуль "{module?.name}"
      </Title>
      <Descriptions title="Общие сведения">
        <DescriptionsAntd.Item label="Автор">
          Карасаева Айнур Алтаевна
        </DescriptionsAntd.Item>
        <DescriptionsAntd.Item label="Создано">
          7 ноября 2021 г., 10:45 ч.
        </DescriptionsAntd.Item>
        <DescriptionsAntd.Item label="Изменено">
          12 мая 2022 г., 9:11 ч.
        </DescriptionsAntd.Item>
        <DescriptionsAntd.Item label="Кол-во разделов">
          {module?.sections.length}
        </DescriptionsAntd.Item>
        <DescriptionsAntd.Item label="Статус">
          <Tag>{module?.status === 'ACTIVE' ? 'Открытый' : ''}</Tag>
        </DescriptionsAntd.Item>
      </Descriptions>
      <Divider />
      <Title className="text-base font-normal text-gray-8 mb-3">Описание</Title>
      <Text className="text-sm text-gray-8">{module?.description}</Text>
    </DescriptionWrapper>
  );
};
