import styled from '@emotion/styled';
import { Typography } from 'antd';
import { FC } from 'react';
import tw from 'twin.macro';
import { definePermission } from '../../types/PermissionsGroups';
import { BusinessProcessFormTag } from '../atoms/BusinessProcessFormTag';
const { Text } = Typography;
const Container = styled.div`
  ${tw`bg-gray-0 px-4 py-5 border-t border-b border-gray-4 relative mt-4 w-full flex flex-row flex-wrap`}
`;

export const BusinessProcessFormTags: FC<{
  selectedGroups?: number[];
  onTagRemoveClick: (tagIndex: number) => void;
}> = ({ selectedGroups, onTagRemoveClick }) => {
  return (
    <Container>
      {selectedGroups && selectedGroups.length > 0 ? (
        selectedGroups?.map((permission: number, index) => (
          <BusinessProcessFormTag
            title={definePermission(permission)}
            key={index}
            onRemoveClick={() => onTagRemoveClick(permission)}
          />
        ))
      ) : (
        <Text className="text-gray-8 text-sm">
          Необходимо выбрать одну или несколько групп из представленного списка
        </Text>
      )}
    </Container>
  );
};
