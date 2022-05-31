import styled from '@emotion/styled';
import { PaginationProps } from 'antd/lib/pagination';
import {
  Col,
  Divider,
  Pagination as PaginationAntd,
  Select,
  Space,
  Typography,
} from 'antd';
import tw from 'twin.macro';
import { FC } from 'react';
import { ChevronDown } from '@components/atoms/Icon';

const PaginationWrapper = styled(Space)`
  ${tw`flex justify-end w-full`}
  .ant-typography {
    ${tw`text-gray-7 font-normal`}
  }
`;

const PaginationBase = styled(PaginationAntd)`
  ${tw`justify-end items-center flex`}
  .ant-pagination-item {
    ${tw`flex items-center justify-center`}
    a {
      ${tw`text-gray-7 font-normal`}
    }
  }
  .ant-pagination-item-active {
    ${tw`border-none`}
    a {
      ${tw`text-primary font-medium`}
    }
  }
  .ant-pagination-prev,
  .ant-pagination-next {
    button {
      ${tw`flex items-center justify-center text-gray-8`}
    }
  }
  .ant-pagination-jump-next,
  .ant-pagination-jump-prev {
    ${tw`min-w-[32px]`}
    .ant-pagination-item-ellipsis {
      font-family: inherit;
      ${tw`top-1 tracking-wider`}
    }
  }
  .ant-pagination-jump-next:hover,
  .ant-pagination-jump-prev:hover {
    .ant-pagination-item-link-icon {
      ${tw`opacity-0`}
    }
    .ant-pagination-item-ellipsis {
      ${tw`opacity-100 text-primary`}
    }
  }
`;

const PageSizeSelect = styled(Select)`
  .ant-select-selector {
    ${tw`mr-8 rounded-none! text-gray-7`}
  }
  .ant-select-arrow {
    ${tw`h-full flex items-center justify-center mt-0 inset-y-0`}
  }
`;

const { Text } = Typography;
const { Option } = Select;
const pageSizeOptions = [10, 15, 20];

interface Props {
  onPageSizeChange?: (pageSize: number) => void;
}

export const Pagination: FC<PaginationProps & Props> = ({
  total,
  onPageSizeChange,
  onChange,
  pageSize,
}) => {
  return (
    <Col className="py-4 w-full mt-8">
      <Divider className="my-4" />
      <PaginationWrapper size={24}>
        <Text>{`${total} результатов`}</Text>
        <Space>
          <Text>Показать:</Text>
          <PageSizeSelect
            size="small"
            suffixIcon={<ChevronDown />}
            value={pageSize}
            onChange={(value) =>
              onPageSizeChange && onPageSizeChange(value as number)
            }
          >
            {pageSizeOptions.map((option, i) => (
              <Option value={option} key={i}>
                {option}
              </Option>
            ))}
          </PageSizeSelect>
        </Space>
        <PaginationBase
          showSizeChanger={false}
          size="small"
          onChange={onChange}
          pageSize={pageSize}
          total={total}
        />
      </PaginationWrapper>
    </Col>
  );
};
