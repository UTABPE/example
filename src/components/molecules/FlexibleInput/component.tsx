import styled from '@emotion/styled';
import {
  Col,
  Divider as DividerAntd,
  Input,
  Row,
  Tooltip,
  Typography,
} from 'antd';
import { FC, useState } from 'react';
import tw from 'twin.macro';
import { ArrowBack } from '../../atoms/Icon';
import { MenuItemButton } from '../../atoms/MenuItemButton';
import { FlexibleInputProps } from './props';
const { Text } = Typography;

const Label = styled(Text)`
  ${tw`font-medium text-xs text-gray-7 ml-[1px]`}
`;

const Wrapper = styled.div`
  ${tw`bg-gray-0 hover:bg-blue-5 py-4 mt-3 mb-6 relative`}
  &:hover {
    ${Label} {
      ${tw`text-darkBlue-15`}
    }
  }
`;

const Divider = styled(DividerAntd)`
  ${tw`h-full m-0`}
`;

export const FlexibleInput: FC<FlexibleInputProps> = ({ labelText }) => {
  const [hasInputChanged, setHasInputChanged] = useState(false);

  const handleChangeInputWidth = () => {
    setHasInputChanged(!hasInputChanged);
  };

  return (
    <Wrapper>
      <Row
        align="middle"
        className="absolute pl-6 h-full w-full top-0 m-0"
        justify="start"
        gutter={9}
      >
        <Col span={9} className="flex justify-between h-full pr-3 pl-0">
          <Divider type="vertical" dashed />
          <Divider type="vertical" dashed />
        </Col>
        <Col span={9} className="flex justify-between h-full pl-3 pr-0">
          <Divider type="vertical" dashed />
          <Divider type="vertical" dashed />
        </Col>
      </Row>
      <div className="pl-6">
        <Label>{labelText}</Label>
        <Row align="middle">
          <Col span={18}>
            <Input
              style={{
                width: `${hasInputChanged ? 'calc(50% - 12px)' : '100%'}`,
              }}
            />
          </Col>
          <Tooltip
            title="Сократить длинну поля"
            placement="right"
            color="#182E62"
            overlayStyle={tw`text-sm leading-[20px]`}
          >
            <MenuItemButton
              onClick={handleChangeInputWidth}
              className="bg-white ml-2 border-gray-5 hover:border-primary hover:bg-blue-15"
              buttonSize="xs"
              shape="circle"
              icon={<ArrowBack />}
            />
          </Tooltip>
        </Row>
      </div>
    </Wrapper>
  );
};
